-- Complete Database Setup for Solv Admin System
-- Run this in your Supabase SQL Editor

-- Step 1: Ensure admin_users table exists
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('admin', 'super_admin')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  created_by UUID REFERENCES admin_users(id),
  auth_user_id UUID REFERENCES auth.users(id)
);

-- Step 2: Ensure blog_tags table exists
CREATE TABLE IF NOT EXISTS blog_tags (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  color TEXT DEFAULT '#3B82F6',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  created_by UUID REFERENCES admin_users(id)
);

-- Step 3: Enable RLS on all tables
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_tags ENABLE ROW LEVEL SECURITY;

-- Step 4: Drop all existing policies to avoid conflicts
DROP POLICY IF EXISTS "Allow authenticated users full access to admin_users" ON admin_users;
DROP POLICY IF EXISTS "Allow authenticated users full access to blog_tags" ON blog_tags;
DROP POLICY IF EXISTS "Allow public read access to blog_tags" ON blog_tags;
DROP POLICY IF EXISTS "Anyone can read tags" ON blog_tags;
DROP POLICY IF EXISTS "Admins can manage tags" ON blog_tags;

-- Step 5: Create simple development policies
-- Admin Users Policies
CREATE POLICY "Allow authenticated users full access to admin_users"
ON admin_users
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Blog Tags Policies
CREATE POLICY "Allow authenticated users full access to blog_tags"
ON blog_tags
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow public read access to blog_tags"
ON blog_tags
FOR SELECT
TO public
USING (true);

-- Step 6: Insert some default tags if they don't exist
INSERT INTO blog_tags (name, slug, description, color) VALUES
  ('Legal Advice', 'legal-advice', 'Posts about legal advice and consultation', '#3B82F6'),
  ('Case Studies', 'case-studies', 'Real case studies and examples', '#10B981'),
  ('Legal News', 'legal-news', 'Latest legal news and updates', '#F59E0B'),
  ('Regulations', 'regulations', 'Information about legal regulations', '#EF4444'),
  ('Corporate Law', 'corporate-law', 'Corporate and business law topics', '#8B5CF6')
ON CONFLICT (name) DO NOTHING;

-- Step 7: Create your first super admin (replace with your details)
-- Uncomment and modify the following line with your email and name:
-- INSERT INTO admin_users (email, name, role, auth_user_id) VALUES ('your-email@example.com', 'Your Name', 'super_admin', null) ON CONFLICT (email) DO NOTHING;

-- Step 8: Verify setup
SELECT 'admin_users' as table_name, count(*) as row_count FROM admin_users
UNION ALL
SELECT 'blog_tags' as table_name, count(*) as row_count FROM blog_tags;
