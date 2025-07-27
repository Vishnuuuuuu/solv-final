import { Clock } from 'lucide-react'
import React, { useEffect, useState } from 'react'

interface SessionStatusProps {
  compact?: boolean
}

export const SessionStatus: React.FC<SessionStatusProps> = ({ compact = false }) => {
  const [timeRemaining, setTimeRemaining] = useState<string>('')

  useEffect(() => {
    const updateTimeRemaining = () => {
      try {
        const sessionData = localStorage.getItem('solv_admin_session')
        if (sessionData) {
          const parsed = JSON.parse(sessionData)
          const sessionDuration = 2 * 60 * 60 * 1000 // 2 hours
          const elapsed = Date.now() - parsed.timestamp
          const remaining = sessionDuration - elapsed

          if (remaining > 0) {
            const hours = Math.floor(remaining / (60 * 60 * 1000))
            const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000))
            
            if (compact) {
              setTimeRemaining(`${hours}:${minutes.toString().padStart(2, '0')}`)
            } else {
              setTimeRemaining(`${hours}h ${minutes}m`)
            }
          } else {
            setTimeRemaining('Expired')
          }
        } else {
          setTimeRemaining('No session')
        }
      } catch (error) {
        setTimeRemaining('Error')
      }
    }

    // Update immediately
    updateTimeRemaining()

    // Update every minute
    const interval = setInterval(updateTimeRemaining, 60000)

    return () => clearInterval(interval)
  }, [compact])

  const isExpiringSoon = timeRemaining.includes('0h') && parseInt(timeRemaining.split('h')[0] || '0') === 0 && parseInt(timeRemaining.split(' ')[1] || '30') < 30

  return (
    <div className={`flex items-center space-x-2 text-xs ${isExpiringSoon ? 'text-yellow-400' : 'text-slate-400'} ${compact ? 'justify-center' : ''}`}>
      <Clock className="h-3 w-3 flex-shrink-0" />
      {!compact && <span className="text-xs">Session: {timeRemaining}</span>}
      {compact && <span className="sr-only">Session: {timeRemaining}</span>}
    </div>
  )
}
