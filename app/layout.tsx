import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Solv.',
  description: 'Your Legal Solutions Partner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-verdana">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
