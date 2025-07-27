import { User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

interface AdminUser {
  id: string
  email: string
  name: string
  role: 'super_admin' | 'admin'
  auth_user_id: string
}

// localStorage keys
const ADMIN_SESSION_KEY = 'solv_admin_session'
const SESSION_DURATION = 2 * 60 * 60 * 1000 // 2 hours (changed from 24 hours)

// Helper functions for localStorage
const saveAdminSession = (user: User, adminUser: AdminUser) => {
  try {
    const sessionData = {
      user: {
        id: user.id,
        email: user.email,
        created_at: user.created_at,
        updated_at: user.updated_at
      },
      adminUser,
      timestamp: Date.now()
    }
    localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(sessionData))
  } catch (error) {
    console.error('Error saving admin session:', error)
  }
}

const getAdminSession = () => {
  try {
    const sessionData = localStorage.getItem(ADMIN_SESSION_KEY)
    if (sessionData) {
      const parsed = JSON.parse(sessionData)
      // Check if session is not older than 2 hours
      if (Date.now() - parsed.timestamp < SESSION_DURATION) {
        return parsed
      } else {
        // Clear expired session
        console.log('Session expired after 2 hours, clearing localStorage')
        clearAdminSession()
      }
    }
  } catch (error) {
    console.error('Error getting admin session:', error)
    clearAdminSession()
  }
  return null
}

const clearAdminSession = () => {
  try {
    localStorage.removeItem(ADMIN_SESSION_KEY)
  } catch (error) {
    console.error('Error clearing admin session:', error)
  }
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [initialized, setInitialized] = useState(false)

  // Session expiration checker
  useEffect(() => {
    let sessionCheckInterval: NodeJS.Timeout

    if (user && adminUser) {
      // Check every 30 seconds if session is still valid
      sessionCheckInterval = setInterval(() => {
        const currentSession = getAdminSession()
        if (!currentSession) {
          console.log('Session expired, logging out user')
          // Session expired, clear state and redirect to login
          setUser(null)
          setAdminUser(null)
          setInitialized(false)
          // Redirect to login page
          if (window.location.pathname.startsWith('/admin') && !window.location.pathname.includes('/login')) {
            window.location.href = '/admin/login'
          }
        }
      }, 30000) // Check every 30 seconds
    }

    return () => {
      if (sessionCheckInterval) {
        clearInterval(sessionCheckInterval)
      }
    }
  }, [user, adminUser])

  useEffect(() => {
    let mounted = true
    let authTimeout: NodeJS.Timeout

    const initializeAuth = async () => {
      try {
        if (!mounted) return
        
        setError(null)
        setLoading(true)
        
        // Set a timeout for the entire auth initialization
        authTimeout = setTimeout(() => {
          if (mounted) {
            console.error('Auth initialization timeout')
            setError('Authentication timeout. Please refresh the page.')
            setLoading(false)
          }
        }, 15000) // 15 second timeout
        
        // First check localStorage for existing session
        const savedSession = getAdminSession()
        if (savedSession?.user && savedSession?.adminUser) {
          // console.log('Found valid session in localStorage') // Commented out to reduce console noise
          setUser(savedSession.user)
          setAdminUser(savedSession.adminUser)
          setInitialized(true)
          if (mounted) {
            clearTimeout(authTimeout)
            setLoading(false)
          }
          return
        }
        
        // Get current session from Supabase
        // console.log('Checking Supabase session...') // Commented out to reduce console noise
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()
        
        if (sessionError) {
          console.error('Session error:', sessionError)
          throw sessionError
        }
        
        if (!mounted) return
        
        if (session?.user) {
          // console.log('Found Supabase session, fetching admin user...') // Commented out to reduce console noise
          setUser(session.user)
          await fetchAdminUser(session.user.id, session.user)
        } else {
          console.log('No active session found')
          clearAdminSession()
          setUser(null)
          setAdminUser(null)
        }
        
        setInitialized(true)
        if (mounted) {
          clearTimeout(authTimeout)
          setLoading(false)
        }
      } catch (error) {
        console.error('Error initializing auth:', error)
        if (mounted) {
          clearTimeout(authTimeout)
          setError(`Authentication failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
          setLoading(false)
          setInitialized(true)
        }
      }
    }

    // Initialize auth
    initializeAuth()

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!mounted || !initialized) return
      
      console.log('Auth state changed:', event, session?.user?.id)
      
      try {
        if (session?.user) {
          setUser(session.user)
          await fetchAdminUser(session.user.id, session.user)
        } else {
          console.log('User logged out, clearing session')
          clearAdminSession()
          setUser(null)
          setAdminUser(null)
        }
      } catch (error) {
        console.error('Error in auth state change:', error)
        setError(`Authentication error: ${error instanceof Error ? error.message : 'Unknown error'}`)
      }
    })

    return () => {
      mounted = false
      if (authTimeout) clearTimeout(authTimeout)
      subscription.unsubscribe()
    }
  }, [])

  const fetchAdminUser = async (authUserId: string, currentUser?: User) => {
    try {
      console.log('Fetching admin user for:', authUserId)
      
      const { data, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('auth_user_id', authUserId)
        .maybeSingle()

      if (error) {
        console.error('Error fetching admin user:', error)
        setError(`Failed to load admin user: ${error.message}`)
        setAdminUser(null)
        clearAdminSession()
        return
      }

      if (data) {
        console.log('Admin user found:', data.email)
        setAdminUser(data)
        setError(null)
        
        // Save session to localStorage
        const userToSave = currentUser || user
        if (userToSave) {
          saveAdminSession(userToSave, data)
        }
      } else {
        console.log('No admin user found for auth user:', authUserId)
        setAdminUser(null)
        clearAdminSession()
      }
    } catch (error) {
      console.error('Network error fetching admin user:', error)
      setError(`Network error: ${error instanceof Error ? error.message : 'Unknown error'}`)
      setAdminUser(null)
      clearAdminSession()
    }
  }

  const isSuperAdmin = () => adminUser?.role === 'super_admin'
  const isAdmin = () => adminUser?.role === 'admin' || adminUser?.role === 'super_admin'

  // Logout function
  const logout = async () => {
    try {
      console.log('Logging out...')
      await supabase.auth.signOut()
      clearAdminSession()
      setUser(null)
      setAdminUser(null)
      setError(null)
    } catch (error) {
      console.error('Error during logout:', error)
      // Force clear even if logout fails
      clearAdminSession()
      setUser(null)
      setAdminUser(null)
    }
  }

  // Retry function for failed requests
  const retry = async () => {
    console.log('Retrying auth...')
    clearAdminSession()
    setLoading(true)
    setError(null)
    setInitialized(false)
    
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (session?.user) {
        setUser(session.user)
        await fetchAdminUser(session.user.id, session.user)
      }
    } catch (error) {
      console.error('Retry failed:', error)
      setError(`Retry failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setLoading(false)
      setInitialized(true)
    }
  }

  // Function to refresh session timestamp (extend session)
  const refreshSession = () => {
    if (user && adminUser) {
      console.log('Refreshing session timestamp')
      saveAdminSession(user, adminUser)
    }
  }

  return {
    user,
    adminUser,
    loading,
    error,
    initialized,
    isSuperAdmin,
    isAdmin,
    logout,
    retry,
    refreshSession
  }
}