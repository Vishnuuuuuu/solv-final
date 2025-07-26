import { Crown, Eye, EyeOff, Plus, RefreshCw, Shield, Trash2, User } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { AdminLayout } from '../../components/AdminLayout'
import { useAuth } from '../../hooks/useAuth'
import { supabase } from '../../lib/supabase'

interface AdminUser {
  id: string
  email: string
  name: string
  role: 'super_admin' | 'admin'
  created_at: string
  created_by: string | null
}

export const UserManagement: React.FC = () => {
  const { adminUser, isSuperAdmin } = useAuth()
  const [users, setUsers] = useState<AdminUser[]>([])
  const [loading, setLoading] = useState(true)
  const [showAddModal, setShowAddModal] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    role: 'admin' as 'admin' | 'super_admin'
  })
  const [submitting, setSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    // console.log('useEffect triggered, adminUser:', adminUser, 'isSuperAdmin:', isSuperAdmin()) // Reduced logging
    if (adminUser && isSuperAdmin()) {
      fetchUsers()
    } else {
      setLoading(false)
    }
  }, [adminUser])

  const fetchUsers = async (retryCount = 0) => {
    try {
      console.log('Fetching users...', retryCount > 0 ? `(retry ${retryCount})` : '')
      
      // Small delay to ensure database consistency after insert
      if (retryCount === 0) {
        await new Promise(resolve => setTimeout(resolve, 100))
      }
      
      const { data, error } = await supabase
        .from('admin_users')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching users:', error)
        
        // If it's an RLS error and we have retries left, try again
        if (error.message.includes('RLS') && retryCount < 2) {
          console.log('RLS error detected, retrying...')
          await new Promise(resolve => setTimeout(resolve, 500))
          return fetchUsers(retryCount + 1)
        }
        
        throw error
      }
      
      console.log('Users fetched successfully:', data?.length || 0, 'users')
      console.log('User data:', data)
      
      // Ensure we always set an array, even if data is null/undefined
      const usersArray = Array.isArray(data) ? data : []
      setUsers(usersArray)
      
      return usersArray
    } catch (error) {
      console.error('Error fetching users:', error)
      
      // If it's the first attempt and we get an error, try once more
      if (retryCount === 0) {
        console.log('Retrying fetch users due to error...')
        await new Promise(resolve => setTimeout(resolve, 1000))
        return fetchUsers(1)
      }
      
      toast.error('Failed to load users')
      // Don't clear existing users on error, keep what we have
      return users
    } finally {
      setLoading(false)
    }
  }

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      // Validate form data
      if (!formData.email || !formData.name || !formData.password) {
        toast.error('All fields are required')
        setSubmitting(false)
        return
      }

      if (formData.password.length < 6) {
        toast.error('Password must be at least 6 characters long')
        setSubmitting(false)
        return
      }

      console.log('Starting user creation process...')

      // Check if user already exists (with better error handling)
      let existingUser = null
      try {
        const { data } = await supabase
          .from('admin_users')
          .select('email')
          .eq('email', formData.email)
          .maybeSingle()
        
        existingUser = data
      } catch (checkError) {
        console.warn('Could not check for existing user, proceeding...', checkError)
      }

      if (existingUser) {
        toast.error('A user with this email already exists')
        setSubmitting(false)
        return
      }

      console.log('Creating auth user and admin record...')

      // Try to create auth user first
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
            role: formData.role
          }
        }
      })

      if (authError) {
        console.warn('Auth signup failed:', authError)
        
        // Check if user already exists in auth
        if (authError.message.includes('User already registered') || authError.message.includes('already registered')) {
          // Try to get the existing auth user
          const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password
          })
          
          if (signInData?.user && !signInError) {
            // Auth user exists and password matches, create admin record
            const { error: adminError } = await supabase
              .from('admin_users')
              .insert({
                email: formData.email,
                name: formData.name,
                role: formData.role,
                created_by: adminUser?.id || null,
                auth_user_id: signInData.user.id
              })

            if (adminError) {
              console.error('Admin user creation error:', adminError)
              toast.error(`Failed to create admin user: ${adminError.message}`)
              setSubmitting(false)
              return
            }

            // Sign out the temporary session
            await supabase.auth.signOut()
            toast.success('User created successfully with existing authentication!')
          } else {
            // Auth user exists but password doesn't match, create admin record only
            const { error: adminError } = await supabase
              .from('admin_users')
              .insert({
                email: formData.email,
                name: formData.name,
                role: formData.role,
                created_by: adminUser?.id || null,
                auth_user_id: null
              })

            if (adminError) {
              console.error('Admin user creation error:', adminError)
              toast.error(`Failed to create admin user: ${adminError.message}`)
              setSubmitting(false)
              return
            }

            toast.success('User created successfully! Note: Authentication already exists with different password.')
          }
        } else {
          // Other auth error, create admin record only
          const { error: adminError } = await supabase
            .from('admin_users')
            .insert({
              email: formData.email,
              name: formData.name,
              role: formData.role,
              created_by: adminUser?.id || null,
              auth_user_id: null
            })

          if (adminError) {
            console.error('Admin user creation error:', adminError)
            toast.error(`Failed to create admin user: ${adminError.message}`)
            setSubmitting(false)
            return
          }

          toast.success('User created successfully! Note: Authentication will need to be set up manually.')
        }
      } else {
        // Auth user created successfully, now create admin record
        const { error: adminError } = await supabase
          .from('admin_users')
          .insert({
            email: formData.email,
            name: formData.name,
            role: formData.role,
            created_by: adminUser?.id || null,
            auth_user_id: authData.user?.id || null
          })

        if (adminError) {
          console.error('Admin user creation error:', adminError)
          // Try to clean up auth user if admin creation fails
          if (authData.user?.id) {
            try {
              await supabase.auth.admin.deleteUser(authData.user.id)
            } catch (cleanupError) {
              console.error('Failed to cleanup auth user:', cleanupError)
            }
          }
          toast.error(`Failed to create admin user: ${adminError.message}`)
          setSubmitting(false)
          return
        }

        toast.success('User created successfully with authentication!')
      }

      console.log('User created successfully!')
      
      // Add the newly created user to the current list immediately for better UX
      const newUser = {
        id: Date.now().toString(), // Temporary ID, will be replaced by actual fetch
        email: formData.email,
        name: formData.name,
        role: formData.role,
        created_at: new Date().toISOString(),
        created_by: adminUser?.id || null
      }
      
      // Optimistically update the UI
      setUsers(prevUsers => [newUser, ...prevUsers])
      
      setShowAddModal(false)
      setShowPassword(false)
      setFormData({ email: '', name: '', password: '', role: 'admin' })
      
      // Refresh the user list to get the actual data from database
      console.log('Refreshing user list after creation...')
      const refreshedUsers = await fetchUsers()
      
      // If fetch returns empty but we know we just created a user, show a warning
      if (refreshedUsers && refreshedUsers.length === 0) {
        console.warn('Fetch returned empty array after user creation - this might be an RLS issue')
        toast.success('User created successfully! Note: List may take a moment to refresh due to security policies.')
      }
    } catch (error: any) {
      console.error('Error creating user:', error)
      toast.error(`An unexpected error occurred: ${error.message || 'Please try again'}`)
    } finally {
      setSubmitting(false)
    }
  }

  const handleDeleteUser = async (userId: string, userName: string) => {
    if (!confirm(`Are you sure you want to delete ${userName}? This action cannot be undone.`)) return

    try {
      // Optimistically remove from UI first
      const originalUsers = users
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId))

      // Delete from admin_users table
      const { error: adminDeleteError } = await supabase
        .from('admin_users')
        .delete()
        .eq('id', userId)

      if (adminDeleteError) {
        console.error('Error deleting admin user:', adminDeleteError)
        // Restore original list on error
        setUsers(originalUsers)
        toast.error('Failed to delete user from admin records')
        return
      }

      toast.success('User deleted successfully')
      
      // Refresh the list to ensure consistency
      await fetchUsers()
    } catch (error: any) {
      console.error('Error deleting user:', error)
      toast.error(`Failed to delete user: ${error.message || 'Unknown error'}`)
      // Refresh to get current state
      await fetchUsers()
    }
  }

  if (!isSuperAdmin()) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <Shield className="h-16 w-16 text-slate-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Access Denied</h2>
          <p className="text-slate-600">Only super admins can manage users.</p>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-serif text-slate-900">User Management</h1>
            <p className="text-slate-600 mt-2">Manage admin users and their permissions</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                setLoading(true)
                fetchUsers()
              }}
              className="bg-slate-100 text-slate-700 px-4 py-2 rounded-md font-medium hover:bg-slate-200 transition-all duration-200 inline-flex items-center space-x-2"
              title="Refresh user list"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Refresh</span>
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-gradient-to-r from-slate-800 to-slate-700 text-white px-6 py-3 rounded-md font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 inline-flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Add User</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mx-auto"></div>
              <p className="text-slate-600 mt-4">Loading users...</p>
            </div>
          ) : (
            <>
              <div className="px-6 py-3 bg-slate-50 border-b border-slate-200">
                <p className="text-sm text-slate-600">
                  {users.length} user{users.length !== 1 ? 's' : ''} found
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {users.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                        No users found. Create your first admin user to get started.
                      </td>
                    </tr>
                  ) : (
                    users.map((user) => (
                      <tr key={user.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
                                <User className="h-5 w-5 text-slate-600" />
                              </div>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-slate-900">{user.name}</div>
                              <div className="text-sm text-slate-500">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            {user.role === 'super_admin' ? (
                              <>
                                <Crown className="h-4 w-4 text-yellow-500" />
                                <span className="text-sm font-medium text-yellow-700">Super Admin</span>
                              </>
                            ) : (
                              <>
                                <Shield className="h-4 w-4 text-blue-500" />
                                <span className="text-sm font-medium text-blue-700">Admin</span>
                              </>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                          {new Date(user.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          {user.id !== adminUser?.id && (
                            <button
                              onClick={() => handleDeleteUser(user.id, user.name)}
                              className="text-red-600 hover:text-red-900 p-2 rounded-md hover:bg-red-50 transition-colors duration-200"
                              title="Delete User"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              </div>
            </>
          )}
        </div>

        {/* Add User Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Add New Admin User</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Create an admin user record. The password will be stored for future authentication setup.
                </p>
                <form onSubmit={handleAddUser} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                      placeholder="user@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                        required
                        minLength={6}
                        className="w-full px-3 py-2 pr-10 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                        placeholder="Minimum 6 characters"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Role *
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value as 'admin' | 'super_admin' }))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                    >
                      <option value="admin">Admin</option>
                      <option value="super_admin">Super Admin</option>
                    </select>
                  </div>
                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setShowAddModal(false)
                        setShowPassword(false)
                      }}
                      className="px-4 py-2 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 disabled:opacity-50"
                    >
                      {submitting ? 'Creating...' : 'Create User'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}