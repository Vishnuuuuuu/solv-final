import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import './globals.css'

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
