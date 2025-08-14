import { useEffect } from 'react'
import { useAuth } from './useAuth'

// Hook to automatically refresh session on user activity
export const useSessionRefresh = () => {
  const { refreshSession, user } = useAuth()

  useEffect(() => {
    if (!user) return

    let activityTimer: NodeJS.Timeout
    const refreshInterval = 10 * 60 * 1000 // Refresh every 10 minutes

    // List of events that indicate user activity
    const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click']

    const handleActivity = () => {
      // Clear existing timer
      if (activityTimer) {
        clearTimeout(activityTimer)
      }

      // Set new timer to refresh session after 10 minutes of activity
      activityTimer = setTimeout(() => {
        refreshSession()
      }, refreshInterval)
    }

    // Add event listeners
    activityEvents.forEach(event => {
      document.addEventListener(event, handleActivity, true)
    })

    // Initial activity trigger
    handleActivity()

    return () => {
      // Clean up event listeners
      activityEvents.forEach(event => {
        document.removeEventListener(event, handleActivity, true)
      })
      
      if (activityTimer) {
        clearTimeout(activityTimer)
      }
    }
  }, [user, refreshSession])
}
