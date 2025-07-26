# Troubleshooting Guide

## Current Status
The admin blog and user management system has been implemented with the following features:
- Admin authentication and session persistence
- Blog creation and editing with rich text editor
- User management for super admins
- RLS (Row Level Security) policies for Supabase

## Common Issues and Solutions

### 1. SQL/RLS Policy Errors

**Symptoms**: Getting SQL syntax errors or `current_user` function errors when accessing user management.

**Solution**: 
1. Go to your Supabase dashboard → SQL Editor
2. Run the simplified RLS policies from `rls_policies.sql`:

```sql
-- Simple development policy (run this first)
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow authenticated users full access to admin_users" ON admin_users;
CREATE POLICY "Allow authenticated users full access to admin_users"
ON admin_users FOR ALL TO authenticated USING (true) WITH CHECK (true);
```

### 2. User Creation Issues

**Symptoms**: Cannot create new admin users, getting authentication errors.

**Solution**:
1. Ensure you have at least one super admin user in the `admin_users` table
2. Check that the `auth_user_id` column exists and is properly linked
3. Create your first super admin manually in Supabase dashboard:

```sql
INSERT INTO admin_users (email, name, role, auth_user_id)
VALUES ('your-email@example.com', 'Your Name', 'super_admin', null);
```

### 3. Login Issues

**Symptoms**: Cannot log in to admin panel, redirected or getting errors.

**Solution**:
1. Check environment variables are set correctly
2. Ensure Supabase URL and anon key are valid
3. Check browser console for detailed error messages
4. Verify admin user exists in both `auth.users` and `admin_users` tables

### 4. Blog Creation/Editing Issues

**Symptoms**: Cannot save blogs, rich text editor not working properly.

**Solution**:
1. Check if RLS policies are applied to the `blogs` table
2. Ensure all required fields are filled
3. Check network tab for API errors
4. Verify featured image upload functionality

## Testing Steps

### 1. Test RLS Policies
1. Apply the simple development policy from `rls_policies.sql`
2. Try accessing the user management page
3. If it works, you can later apply the production policies

### 2. Test User Creation
1. Log in as a super admin
2. Go to user management
3. Create a new admin user with email and password
4. Try logging in with the new user credentials

### 3. Test Blog Management
1. Log in as any admin user
2. Create a new blog post with rich text content
3. Upload a featured image
4. Save and verify the blog appears correctly
5. Edit the blog and verify changes are saved

## Environment Variables Required

Create a `.env` file in the root directory with:
```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Database Schema Required

### admin_users table
```sql
CREATE TABLE admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('admin', 'super_admin')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  created_by UUID REFERENCES admin_users(id),
  auth_user_id UUID REFERENCES auth.users(id)
);
```

### blogs table (if not exists)
```sql
CREATE TABLE blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image_url TEXT,
  author TEXT NOT NULL,
  tags TEXT[],
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Next Steps for Production

1. **Apply Production RLS Policies**: Once development testing is complete, apply the commented production policies from `rls_policies.sql`

2. **Secure Environment Variables**: Ensure all environment variables are properly set in production

3. **Test All User Flows**: Thoroughly test user creation, login, blog management, and access controls

4. **Add Additional Security**: Consider implementing additional security measures like email verification, password strength requirements, etc.

## Support

If you continue to have issues:
1. Check the browser console for detailed error messages
2. Check the Supabase dashboard logs
3. Verify all database tables and columns exist
4. Ensure RLS policies are correctly applied
