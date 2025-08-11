import { Calendar, Edit, Eye, FileText, Plus, Trash2, User } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AdminLayout } from '../../components/AdminLayout'
import { supabase } from '../../lib/supabase'

interface Blog {
  id: string
  title: string
  slug: string
  author: string
  created_at: string
  updated_at: string
}

// Cache for blogs data to avoid repeated API calls
let blogsCache: Blog[] | null = null
let blogsCacheTimestamp: number = 0
const BLOGS_CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export const AdminBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    // Check if we have valid cached data
    const now = Date.now()
    if (blogsCache && blogsCacheTimestamp && (now - blogsCacheTimestamp) < BLOGS_CACHE_DURATION) {
      setBlogs(blogsCache)
      setLoading(false)
      return
    }
    
    try {
      console.log('Fetching blogs...')
      setError(null) // Clear previous errors
      
      // Check if Supabase is properly configured
      if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
        throw new Error('Supabase configuration missing. Please check your environment variables.')
      }
      
      const { data, error } = await supabase
        .from('articles')
        .select('id, title, slug, author, created_at, updated_at')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Supabase error fetching blogs:', error)
        console.error('Error details:', {
          message: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint
        })
        throw error
      }
      
      console.log('Blogs fetched successfully:', data?.length || 0, 'blogs')
      setBlogs(data || [])
      // Cache the blogs data
      blogsCache = data || []
      blogsCacheTimestamp = now
    } catch (error) {
      console.error('Error fetching blogs:', error)
      
      let errorMessage = 'Failed to load blogs. Please try again.'
      
      // Provide user-friendly error messages
      if (error instanceof Error) {
        if (error.message.includes('Supabase configuration')) {
          errorMessage = 'Database configuration error. Please check your environment settings.'
        } else if (error.message.includes('Failed to fetch')) {
          errorMessage = 'Network error. Please check your internet connection.'
        } else if (error.message.includes('relation "articles" does not exist')) {
          errorMessage = 'Database error. Articles table not found.'
        }
        console.error('CONFIGURATION ERROR: Please check your .env file has VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY')
      }
      
      setError(errorMessage)
      
      // Clear cache on error
      blogsCache = null
      blogsCacheTimestamp = 0
      
      // Set empty array instead of keeping loading state
      setBlogs([])
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) {
      return
    }

    setDeleting(id)
    try {
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('id', id)

      if (error) throw error
      
      setBlogs(blogs.filter(blog => blog.id !== id))
      // Update cache after deletion
      if (blogsCache) {
        blogsCache = blogsCache.filter(blog => blog.id !== id)
      }
    } catch (error) {
      console.error('Error deleting blog:', error)
      alert('Failed to delete blog')
    } finally {
      setDeleting(null)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-serif text-slate-900">Blog Management</h1>
            <p className="text-slate-600 mt-2">Manage your blog posts and articles</p>
          </div>
          <Link
            to="/admin/blogs/create"
            className="bg-gradient-to-r from-slate-800 to-slate-700 text-white px-6 py-3 rounded-md font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 inline-flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Create New Blog</span>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mx-auto"></div>
              <p className="text-slate-600 mt-4">Loading blogs...</p>
            </div>
          ) : error ? (
            <div className="p-8 text-center">
              <div className="bg-red-50 border border-red-200 rounded-md p-6">
                <h3 className="text-lg font-medium text-red-800 mb-2">Error Loading Blogs</h3>
                <p className="text-red-600 mb-4">{error}</p>
                <button
                  onClick={() => {
                    setError(null)
                    fetchBlogs()
                  }}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 mb-2">No blogs yet</h3>
              <p className="text-slate-600 mb-6">Get started by creating your first blog post.</p>
              <Link
                to="/admin/blogs/create"
                className="bg-gradient-to-r from-slate-800 to-slate-700 text-white px-6 py-3 rounded-md font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 inline-flex items-center space-x-2"
              >
                <Plus className="h-5 w-5" />
                <span>Create Blog</span>
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Author
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Updated
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {blogs.map((blog) => (
                    <tr key={blog.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-slate-900">
                            {blog.title}
                          </div>
                          <div className="text-sm text-slate-500">
                            /{blog.slug}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-slate-400" />
                          <span className="text-sm text-slate-900">{blog.author}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-slate-400" />
                          <span className="text-sm text-slate-500">{formatDate(blog.created_at)}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        {formatDate(blog.updated_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <a
                            href={`/blog/${blog.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-slate-900 p-2 rounded-md hover:bg-slate-100 transition-colors duration-200"
                            title="View Blog"
                          >
                            <Eye className="h-4 w-4" />
                          </a>
                          <Link
                            to={`/admin/blogs/edit/${blog.id}`}
                            className="text-blue-600 hover:text-blue-900 p-2 rounded-md hover:bg-blue-50 transition-colors duration-200"
                            title="Edit Blog"
                          >
                            <Edit className="h-4 w-4" />
                          </Link>
                          <button
                            onClick={() => handleDelete(blog.id, blog.title)}
                            disabled={deleting === blog.id}
                            className="text-red-600 hover:text-red-900 p-2 rounded-md hover:bg-red-50 transition-colors duration-200 disabled:opacity-50"
                            title="Delete Blog"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  )
}