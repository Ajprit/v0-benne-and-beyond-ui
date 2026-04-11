import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Benne & Beyond | Authentic South Indian Cafe',
  description: 'Experience authentic South Indian flavors - Dosa, Idli, Vada & Filter Coffee. A cozy cafe with traditional recipes and modern ambiance.',
  generator: 'v0.app',
  keywords: ['South Indian cafe', 'dosa', 'idli', 'filter coffee', 'vada', 'authentic', 'cafe'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
