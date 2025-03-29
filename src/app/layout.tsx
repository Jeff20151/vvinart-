import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '藝術風格 | 個人藝術電商',
  description: '展示與銷售獨特藝術作品、手工服裝與珠寶的個人藝術電商網站',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
