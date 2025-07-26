// Quick Test Script - Run in Browser Console
// Paste this into your browser console on the admin page to test connectivity

console.log('🔍 Testing Supabase connectivity and permissions...');

async function testSupabaseConnection() {
  try {
    // Test 1: Check if Supabase client is available
    if (typeof supabase === 'undefined') {
      console.error('❌ Supabase client not found');
      return;
    }
    console.log('✅ Supabase client found');

    // Test 2: Check current session
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    if (sessionError) {
      console.error('❌ Session error:', sessionError);
      return;
    }
    
    if (session?.user) {
      console.log('✅ User authenticated:', session.user.email);
    } else {
      console.log('⚠️ No active session');
      return;
    }

    // Test 3: Test admin_users table access
    console.log('🔍 Testing admin_users table...');
    const { data: adminData, error: adminError } = await supabase
      .from('admin_users')
      .select('count')
      .limit(1);
    
    if (adminError) {
      console.error('❌ admin_users error:', adminError.message);
    } else {
      console.log('✅ admin_users table accessible');
    }

    // Test 4: Test blog_tags table access
    console.log('🔍 Testing blog_tags table...');
    const { data: tagsData, error: tagsError } = await supabase
      .from('blog_tags')
      .select('count')
      .limit(1);
    
    if (tagsError) {
      console.error('❌ blog_tags error:', tagsError.message);
    } else {
      console.log('✅ blog_tags table accessible');
    }

    // Test 5: Get actual data
    console.log('🔍 Fetching actual data...');
    
    const { data: users, error: usersError } = await supabase
      .from('admin_users')
      .select('*')
      .limit(5);
    
    if (usersError) {
      console.error('❌ Users fetch error:', usersError.message);
    } else {
      console.log('✅ Users data:', users?.length || 0, 'users found');
    }

    const { data: tags, error: tagsSelectError } = await supabase
      .from('blog_tags')
      .select('*')
      .limit(5);
    
    if (tagsSelectError) {
      console.error('❌ Tags fetch error:', tagsSelectError.message);
    } else {
      console.log('✅ Tags data:', tags?.length || 0, 'tags found');
    }

    console.log('🎉 Test complete!');
    
  } catch (error) {
    console.error('❌ Unexpected error:', error);
  }
}

// Run the test
testSupabaseConnection();
