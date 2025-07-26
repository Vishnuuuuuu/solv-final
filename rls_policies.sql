-- RLS Policies for admin_users table
-- Run these commands in your Supabase SQL editor

-- First, enable RLS on the admin_users table (if not already enabled)
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Allow authenticated users to read admin_users" ON admin_users;
DROP POLICY IF EXISTS "Allow super admins to insert admin_users" ON admin_users;
DROP POLICY IF EXISTS "Allow super admins to update admin_users" ON admin_users;
DROP POLICY IF EXISTS "Allow super admins to delete admin_users" ON admin_users;
DROP POLICY IF EXISTS "Allow authenticated users full access to admin_users" ON admin_users;

-- Simple development-friendly policy (more permissive for development)
-- This allows all authenticated users to manage admin_users
-- Replace with more restrictive policies in production
CREATE POLICY "Allow authenticated users full access to admin_users"
ON admin_users
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- RLS Policies for blog_tags table
ALTER TABLE blog_tags ENABLE ROW LEVEL SECURITY;

-- Drop existing blog_tags policies
DROP POLICY IF EXISTS "Anyone can read tags" ON blog_tags;
DROP POLICY IF EXISTS "Admins can manage tags" ON blog_tags;
DROP POLICY IF EXISTS "Allow authenticated users full access to blog_tags" ON blog_tags;

-- Simple policy for blog_tags (development)
CREATE POLICY "Allow authenticated users full access to blog_tags"
ON blog_tags
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Allow public read access to tags
CREATE POLICY "Allow public read access to blog_tags"
ON blog_tags
FOR SELECT
TO public
USING (true);

-- For production, use these more restrictive policies instead:
-- (Uncomment and apply these after testing the basic functionality)

/*
-- Production Policy 1: Allow authenticated users to read admin_users
CREATE POLICY "Allow authenticated users to read admin_users"
ON admin_users
FOR SELECT
TO authenticated
USING (true);

-- Production Policy 2: Allow super admins to insert new admin users
CREATE POLICY "Allow super admins to insert admin_users"
ON admin_users
FOR INSERT
TO authenticated
WITH CHECK (
  EXISTS (
    SELECT 1 FROM admin_users au
    WHERE au.auth_user_id = auth.uid()
    AND au.role = 'super_admin'
  )
);

-- Production Policy 3: Allow super admins to update admin users
CREATE POLICY "Allow super admins to update admin_users"
ON admin_users
FOR UPDATE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM admin_users au
    WHERE au.auth_user_id = auth.uid()
    AND au.role = 'super_admin'
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM admin_users au
    WHERE au.auth_user_id = auth.uid()
    AND au.role = 'super_admin'
  )
);

-- Production Policy 4: Allow super admins to delete admin users
CREATE POLICY "Allow super admins to delete admin_users"
ON admin_users
FOR DELETE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM admin_users au
    WHERE au.auth_user_id = auth.uid()
    AND au.role = 'super_admin'
  )
);
*/

-- Note: Make sure your admin_users table has the auth_user_id column
-- and that it's properly linked to the auth.users table

-- To apply production policies, first drop the development policy:
-- DROP POLICY "Allow authenticated users full access to admin_users" ON admin_users;
-- Then uncomment and run the production policies above.
