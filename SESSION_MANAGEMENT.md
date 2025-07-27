# Session Management System

## Overview
The admin session management system has been updated to automatically clear user sessions after **2 hours** of inactivity. This provides better security while maintaining a good user experience.

## Key Features

### ⏰ **2-Hour Session Expiration**
- Sessions stored in localStorage expire after exactly 2 hours
- Previously was 24 hours, now reduced to 2 hours for better security

### 🔄 **Automatic Session Checking**
- System checks session validity every 30 seconds
- If session expires, user is automatically logged out and redirected to login

### 📱 **Activity-Based Session Refresh**
- User activity (mouse movement, clicks, keyboard input, scrolling) automatically refreshes the session
- Session timestamp is updated every 10 minutes when user is active
- This means active users won't be logged out unexpectedly

### 📊 **Visual Session Status**
- Session timer displayed in the admin sidebar
- Shows remaining time (e.g., "1h 45m")
- Changes to yellow color when less than 30 minutes remain
- Updates every minute

## Technical Implementation

### Files Modified/Created:

1. **`src/hooks/useAuth.ts`**
   - Changed `SESSION_DURATION` from 24 hours to 2 hours
   - Added automatic session expiration checking every 30 seconds
   - Added `refreshSession()` function to extend session
   - Improved logging for session expiration

2. **`src/hooks/useSessionRefresh.ts`** (New)
   - Monitors user activity (mouse, keyboard, touch events)
   - Automatically refreshes session every 10 minutes when user is active
   - Prevents active users from being logged out

3. **`src/components/SessionStatus.tsx`** (New)
   - Visual component showing session time remaining
   - Updates every minute
   - Compact mode for collapsed sidebar

4. **`src/components/AdminLayout.tsx`**
   - Integrated session refresh hook
   - Added session status display in sidebar

## How It Works

### Session Creation
```typescript
// When user logs in, session is saved with timestamp
const sessionData = {
  user: userInfo,
  adminUser: adminInfo,
  timestamp: Date.now() // Current time
}
localStorage.setItem('solv_admin_session', JSON.stringify(sessionData))
```

### Session Validation
```typescript
// Every time session is checked
const sessionAge = Date.now() - sessionData.timestamp
const twoHours = 2 * 60 * 60 * 1000 // 2 hours in milliseconds

if (sessionAge > twoHours) {
  // Session expired - clear and redirect to login
  localStorage.removeItem('solv_admin_session')
  window.location.href = '/admin/login'
}
```

### Session Refresh
```typescript
// On user activity, refresh session
const refreshSession = () => {
  const updatedSession = {
    ...currentSession,
    timestamp: Date.now() // Reset timestamp
  }
  localStorage.setItem('solv_admin_session', JSON.stringify(updatedSession))
}
```

## User Experience

### ✅ **What Users Will Notice:**
- Session timer in sidebar showing time remaining
- Automatic logout after 2 hours of inactivity
- Seamless experience for active users (no unexpected logouts)
- Warning color when session is about to expire

### ✅ **What Users Won't Notice:**
- Automatic session refresh during activity
- Background session validation
- Smooth transition when session expires

## Security Benefits

1. **Reduced Session Window**: 2 hours instead of 24 hours reduces exposure if device is compromised
2. **Automatic Cleanup**: Sessions are automatically cleared, preventing stale sessions
3. **Activity-Based**: Only active users maintain sessions, idle sessions expire
4. **Visual Feedback**: Users are aware of their session status

## Configuration

To change session duration, modify the `SESSION_DURATION` constant in `src/hooks/useAuth.ts`:

```typescript
// Current: 2 hours
const SESSION_DURATION = 2 * 60 * 60 * 1000

// Examples:
const SESSION_DURATION = 1 * 60 * 60 * 1000  // 1 hour
const SESSION_DURATION = 4 * 60 * 60 * 1000  // 4 hours
const SESSION_DURATION = 30 * 60 * 1000      // 30 minutes
```

## Testing

### Test Session Expiration:
1. Login to admin panel
2. Note the session timer in sidebar
3. Wait or manually change localStorage timestamp to simulate expiration
4. Navigate to any admin page - should redirect to login

### Test Activity Refresh:
1. Login and note session timer
2. Use the application normally (click, type, scroll)
3. Session should refresh every 10 minutes of activity
4. Timer should reset periodically

### Test Visual Indicators:
1. Session timer should update every minute
2. Should turn yellow when < 30 minutes remain
3. Should show "Expired" when session ends

The system now provides secure, user-friendly session management with automatic expiration after 2 hours!
