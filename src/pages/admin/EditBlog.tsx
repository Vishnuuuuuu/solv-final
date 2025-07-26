import { ArrowLeft, Save, Upload, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AdminLayout } from '../../components/AdminLayout'
import { RichTextEditor } from '../../components/RichTextEditor'
import { supabase } from '../../lib/supabase'

export const EditBlog: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    status: 'published' as 'draft' | 'published',
    is_featured: false,
    featured_image: '',
    // video_url: '', // Commented out - will integrate later
    selected_author_id: '',
    selectedTags: [] as string[]
  })
  const [tags, setTags] = useState<any[]>([])
  const [authors, setAuthors] = useState<any[]>([])
  const [uploadingImage, setUploadingImage] = useState(false)
  const [loading, setLoading] = useState(false)
  const [fetchLoading, setFetchLoading] = useState(true)
  const [loadingAuthors, setLoadingAuthors] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      fetchBlog()
      fetchTags()
      fetchAuthors()
    }
  }, [id])

  const fetchTags = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_tags')
        .select('*')
        .order('name')

      if (error) throw error
      setTags(data || [])
    } catch (error) {
      console.error('Error fetching tags:', error)
    }
  }

  const fetchAuthors = async () => {
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('id, name, email')
        .order('name')

      if (error) throw error
      setAuthors(data || [])
    } catch (error) {
      console.error('Error fetching authors:', error)
      toast.error('Failed to load authors')
    } finally {
      setLoadingAuthors(false)
    }
  }

  const fetchBlog = async () => {
    try {
      // First fetch the article
      const { data: articleData, error: articleError } = await supabase
        .from('articles')
        .select('*')
        .eq('id', id)
        .single()

      if (articleError) throw articleError

      // Then fetch the article tags separately
      const { data: tagsData, error: tagsError } = await supabase
        .from('article_tags')
        .select('tag_id')
        .eq('article_id', id)

      if (tagsError) {
        console.warn('Error fetching article tags:', tagsError)
      }

      const articleTags = tagsData?.map((rel: any) => rel.tag_id) || []
      
      setFormData({
        title: articleData.title,
        slug: articleData.slug,
        excerpt: articleData.excerpt || '',
        content: articleData.content,
        status: articleData.status || 'published',
        is_featured: articleData.is_featured || false,
        featured_image: articleData.featured_image || '',
        // video_url: articleData.video_url || '', // Commented out - will integrate later
        selected_author_id: articleData.author_id || '',
        selectedTags: articleTags
      })
    } catch (error) {
      console.error('Error fetching blog:', error)
      toast.error('Failed to load blog')
      setError('Failed to load blog')
    } finally {
      setFetchLoading(false)
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  const handleImageUpload = async (file: File) => {
    if (file.size > 102400) { // 100KB limit
      toast.error('Image must be less than 100KB')
      return
    }

    setUploadingImage(true)
    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}.${fileExt}`
      
      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(fileName, file)

      if (uploadError) throw uploadError

      const { data } = supabase.storage
        .from('blog-images')
        .getPublicUrl(fileName)

      setFormData(prev => ({ ...prev, featured_image: data.publicUrl }))
      toast.success('Image uploaded successfully')
    } catch (error: any) {
      console.error('Error uploading image:', error)
      toast.error('Failed to upload image')
    } finally {
      setUploadingImage(false)
    }
  }

  const toggleTag = (tagId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedTags: prev.selectedTags.includes(tagId)
        ? prev.selectedTags.filter(id => id !== tagId)
        : [...prev.selectedTags, tagId]
    }))
  }

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Comprehensive validation
    if (!formData.title.trim()) {
      toast.error('Title is required')
      return
    }

    if (formData.title.length < 5) {
      toast.error('Title must be at least 5 characters long')
      return
    }

    if (!formData.content.trim() || formData.content === '<p></p>') {
      toast.error('Content is required')
      return
    }

    if (formData.excerpt.length > 300) {
      toast.error('Excerpt must be less than 300 characters')
      return
    }

    setLoading(true)
    setError('')

    try {
      // Get current user
      const { data: { user }, error: userError } = await supabase.auth.getUser()
      
      if (userError || !user) {
        toast.error('User not authenticated. Please log in again.')
        navigate('/admin/login')
        return
      }

      // Determine author
      let authorData
      if (formData.selected_author_id) {
        // Use selected author
        const { data, error } = await supabase
          .from('admin_users')
          .select('*')
          .eq('id', formData.selected_author_id)
          .single()
        
        if (error || !data) {
          toast.error('Selected author not found')
          return
        }
        authorData = data
      } else {
        // Use current logged-in user as author
        const { data, error } = await supabase
          .from('admin_users')
          .select('*')
          .eq('auth_user_id', user.id)
          .single()

        if (error || !data) {
          toast.error('Current user admin data not found. Please contact support.')
          return
        }
        authorData = data
      }

      const finalSlug = formData.slug.trim() || generateSlug(formData.title)

      // Check if slug already exists (excluding current article)
      const { data: existingArticle } = await supabase
        .from('articles')
        .select('id')
        .eq('slug', finalSlug)
        .neq('id', id)
        .single()

      if (existingArticle) {
        toast.error('A blog with this slug already exists. Please use a different title or modify the slug.')
        return
      }

      // Update the article
      const { error: articleError } = await supabase
        .from('articles')
        .update({
          title: formData.title,
          slug: finalSlug,
          excerpt: formData.excerpt,
          content: formData.content,
          author: authorData.name,
          author_id: authorData.id,
          status: formData.status,
          is_featured: formData.is_featured,
          featured_image: formData.featured_image || null,
          // video_url: formData.video_url || null // Commented out - will integrate later
        })
        .eq('id', id)

      if (articleError) {
        console.error('Article update error:', articleError)
        toast.error(`Failed to update blog: ${articleError.message}`)
        return
      }

      // Update tags - first delete existing relationships
      await supabase
        .from('article_tags')
        .delete()
        .eq('article_id', id)

      // Add new tags if any are selected
      if (formData.selectedTags.length > 0) {
        const tagInserts = formData.selectedTags.map(tagId => ({
          article_id: id,
          tag_id: tagId
        }))

        const { error: tagError } = await supabase
          .from('article_tags')
          .insert(tagInserts)

        if (tagError) {
          console.warn('Error updating tags:', tagError)
          toast.success('Blog updated successfully, but some tags could not be updated.')
        } else {
          toast.success('Blog updated successfully with tags!')
        }
      } else {
        toast.success('Blog updated successfully!')
      }

      navigate('/admin/blogs')
    } catch (err: any) {
      console.error('Error updating blog:', err)
      toast.error(`An unexpected error occurred: ${err.message || 'Please try again'}`)
    } finally {
      setLoading(false)
    }
  }

  if (fetchLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mx-auto mb-4"></div>
            <p className="text-slate-600">Loading blog...</p>
          </div>
        </div>
      </AdminLayout>
    )
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center space-x-4">
            <Link
              to="/admin/blogs"
              className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Blogs</span>
            </Link>
            <h1 className="text-3xl font-bold font-serif text-slate-900">Edit Blog</h1>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <p className="text-red-700">{error}</p>
          </div>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center space-x-4">
          <Link
            to="/admin/blogs"
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blogs</span>
          </Link>
          <h1 className="text-3xl font-bold font-serif text-slate-900">Edit Blog</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  placeholder="Enter blog title"
                />
              </div>
              
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-slate-700 mb-2">
                  Status *
                </label>
                <select
                  id="status"
                  value={formData.status}
                  onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as 'draft' | 'published' }))}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-slate-700 mb-2">
                Slug
              </label>
              <input
                type="text"
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                placeholder="blog-url-slug (auto-generated from title)"
              />
              <p className="text-sm text-slate-500 mt-1">Leave empty to auto-generate from title</p>
            </div>

            <div>
              <label htmlFor="author" className="block text-sm font-medium text-slate-700 mb-2">
                Author
              </label>
              {loadingAuthors ? (
                <div className="flex items-center space-x-2 text-slate-600">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-slate-600"></div>
                  <span>Loading authors...</span>
                </div>
              ) : (
                <select
                  id="author"
                  value={formData.selected_author_id}
                  onChange={(e) => setFormData(prev => ({ ...prev, selected_author_id: e.target.value }))}
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                >
                  <option value="">Use current user as author</option>
                  {authors.map((author) => (
                    <option key={author.id} value={author.id}>
                      {author.name} ({author.email})
                    </option>
                  ))}
                </select>
              )}
              <p className="text-sm text-slate-500 mt-1">Leave empty to use your account as the author</p>
            </div>

            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium text-slate-700 mb-2">
                Excerpt
              </label>
              <textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                rows={3}
                className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                placeholder="Brief description of the article (optional)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Featured Image (Max 100KB)
              </label>
              <div className="space-y-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) {
                      handleImageUpload(file)
                    }
                  }}
                  className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-slate-50 file:text-slate-700 hover:file:bg-slate-100"
                />
                {uploadingImage && (
                  <div className="flex items-center text-sm text-slate-600">
                    <Upload className="h-4 w-4 mr-2 animate-pulse" />
                    Uploading image...
                  </div>
                )}
                {formData.featured_image && (
                  <div className="relative w-32 h-20 rounded-md overflow-hidden">
                    <img
                      src={formData.featured_image}
                      alt="Featured preview"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, featured_image: '' }))}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="is_featured"
                checked={formData.is_featured}
                onChange={(e) => setFormData(prev => ({ ...prev, is_featured: e.target.checked }))}
                className="rounded border-slate-300 text-slate-600 focus:ring-slate-500"
              />
              <label htmlFor="is_featured" className="text-sm font-medium text-slate-700">
                Feature this article
              </label>
            </div>

            {/* Tags Section */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Tags
              </label>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() => toggleTag(tag.id)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      formData.selectedTags.includes(tag.id)
                        ? 'bg-slate-800 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {tag.name}
                  </button>
                ))}
              </div>
              {tags.length === 0 && (
                <p className="text-sm text-slate-500">No tags available. Create tags in Tag Management.</p>
              )}
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-slate-700 mb-2">
                Content *
              </label>
              <RichTextEditor
                content={formData.content}
                onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                placeholder="Start writing your blog content..."
              />
            </div>

            <div className="flex items-center justify-end space-x-4 pt-6 border-t border-slate-200">
              <Link
                to="/admin/blogs"
                className="px-6 py-3 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition-colors duration-200"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={loading || !formData.title || !formData.content}
                className="bg-gradient-to-r from-slate-800 to-slate-700 text-white px-6 py-3 rounded-md font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center space-x-2"
              >
                <Save className="h-5 w-5" />
                <span>{loading ? 'Updating...' : 'Update Blog'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  )
}
