import Blockquote from '@tiptap/extension-blockquote'
import TipTapBold from '@tiptap/extension-bold'
import BulletList from '@tiptap/extension-bullet-list'
import TipTapCode from '@tiptap/extension-code'
import Color from '@tiptap/extension-color'
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import Highlight from '@tiptap/extension-highlight'
import TipTapItalic from '@tiptap/extension-italic'
import Link from '@tiptap/extension-link'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import Paragraph from '@tiptap/extension-paragraph'
import Strike from '@tiptap/extension-strike'
import Text from '@tiptap/extension-text'
import TextAlign from '@tiptap/extension-text-align'
import { TextStyle } from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
  Quote,
  Strikethrough,
  Underline as UnderlineIcon
} from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/Button'

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
  placeholder?: string
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  content,
  onChange
}) => {
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false)
  const [linkUrl, setLinkUrl] = useState('')

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      TipTapBold,
      TipTapItalic,
      Strike,
      TipTapCode,
      Underline,
      BulletList.configure({
        HTMLAttributes: {
          class: 'prose-bullet-list',
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: 'prose-ordered-list',
        },
      }),
      ListItem,
      Blockquote.configure({
        HTMLAttributes: {
          class: 'prose-blockquote',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 underline cursor-pointer',
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'prose prose-slate max-w-none focus:outline-none min-h-[300px] p-4 prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:my-2 prose-ul:list-disc prose-ol:list-decimal prose-li:my-1 prose-blockquote:border-l-4 prose-blockquote:border-slate-300 prose-blockquote:pl-4 prose-blockquote:italic',
      },
    },
  })

  // Update editor content when content prop changes (for AI optimization)
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content, { emitUpdate: false })
    }
  }, [editor, content])

  const addLink = useCallback(() => {
    if (editor) {
      const previousUrl = editor.getAttributes('link').href
      setLinkUrl(previousUrl || '')
      setIsLinkModalOpen(true)
    }
  }, [editor])

  const setLink = useCallback(() => {
    if (editor) {
      if (linkUrl === '') {
        editor.chain().focus().extendMarkRange('link').unsetLink().run()
      } else {
        // Ensure the URL has a protocol
        const url = linkUrl.startsWith('http://') || linkUrl.startsWith('https://') 
          ? linkUrl 
          : `https://${linkUrl}`
        
        // If there's selected text, apply link to selection
        // If no selection, insert the URL as both text and link
        const { from, to } = editor.state.selection
        if (from === to) {
          // No selection, insert URL as text and link
          editor.chain().focus().insertContent(`<a href="${url}">${url}</a>`).run()
        } else {
          // There's a selection, apply link to it
          editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
        }
      }
      setIsLinkModalOpen(false)
      setLinkUrl('')
    }
  }, [editor, linkUrl])

  if (!editor) {
    return null
  }

  const ToolbarButton = ({ 
    onClick, 
    isActive = false, 
    children, 
    title 
  }: { 
    onClick: () => void
    isActive?: boolean
    children: React.ReactNode
    title: string
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`p-2 rounded hover:bg-slate-100 transition-colors ${
        isActive ? 'bg-slate-200 text-slate-900' : 'text-slate-600'
      }`}
      title={title}
    >
      {children}
    </button>
  )

  return (
    <div className="border border-slate-300 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="border-b border-slate-300 p-2 flex flex-wrap gap-1 bg-slate-50">
        {/* Headings */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          isActive={editor.isActive('heading', { level: 1 })}
          title="Heading 1"
        >
          <Heading1 className="w-4 h-4" />
        </ToolbarButton>
        
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          isActive={editor.isActive('heading', { level: 2 })}
          title="Heading 2"
        >
          <Heading2 className="w-4 h-4" />
        </ToolbarButton>
        
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          isActive={editor.isActive('heading', { level: 3 })}
          title="Heading 3"
        >
          <Heading3 className="w-4 h-4" />
        </ToolbarButton>

        <div className="w-px h-6 bg-slate-300 mx-1" />
        
        {/* Text Formatting */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </ToolbarButton>
        
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </ToolbarButton>
        
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          isActive={editor.isActive('underline')}
          title="Underline"
        >
          <UnderlineIcon className="w-4 h-4" />
        </ToolbarButton>
        
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive('strike')}
          title="Strikethrough"
        >
          <Strikethrough className="w-4 h-4" />
        </ToolbarButton>
        
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive('code')}
          title="Code"
        >
          <Code className="w-4 h-4" />
        </ToolbarButton>

        <div className="w-px h-6 bg-slate-300 mx-1" />
        
        {/* Lists and Quote */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </ToolbarButton>
        
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive('orderedList')}
          title="Numbered List"
        >
          <ListOrdered className="w-4 h-4" />
        </ToolbarButton>
        
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive('blockquote')}
          title="Quote"
        >
          <Quote className="w-4 h-4" />
        </ToolbarButton>

        <div className="w-px h-6 bg-slate-300 mx-1" />
        
        {/* Text Alignment */}
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          isActive={editor.isActive({ textAlign: 'left' })}
          title="Align Left"
        >
          <AlignLeft className="w-4 h-4" />
        </ToolbarButton>
        
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          isActive={editor.isActive({ textAlign: 'center' })}
          title="Align Center"
        >
          <AlignCenter className="w-4 h-4" />
        </ToolbarButton>
        
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          isActive={editor.isActive({ textAlign: 'right' })}
          title="Align Right"
        >
          <AlignRight className="w-4 h-4" />
        </ToolbarButton>

        <div className="w-px h-6 bg-slate-300 mx-1" />
        
        {/* Link */}
        <ToolbarButton
          onClick={addLink}
          isActive={editor.isActive('link')}
          title="Add Link"
        >
          <LinkIcon className="w-4 h-4" />
        </ToolbarButton>
      </div>

      {/* Editor */}
      <EditorContent 
        editor={editor} 
        className="min-h-[300px] bg-white"
      />

      {/* Link Modal */}
      {isLinkModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Add Link</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                URL
              </label>
              <input
                type="url"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    setLink()
                  } else if (e.key === 'Escape') {
                    setIsLinkModalOpen(false)
                    setLinkUrl('')
                  }
                }}
              />
              <p className="text-xs text-slate-500 mt-1">
                Press Enter to add link, Escape to cancel
              </p>
            </div>
            <div className="flex justify-end space-x-2">
              <Button
                variant="secondary"
                onClick={() => {
                  setIsLinkModalOpen(false)
                  setLinkUrl('')
                }}
              >
                Cancel
              </Button>
              <Button 
                onClick={setLink}
                disabled={!linkUrl.trim()}
              >
                {linkUrl && editor?.getAttributes('link').href ? 'Update Link' : 'Add Link'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}