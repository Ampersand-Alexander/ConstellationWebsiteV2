import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react';

const banner = require('/public/metacard.png')

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Alexander's Portfolio",
  keywords: "Alexander Tran",
  description: 'Come check out the website to learn more about me',
  openGraph: {
    title: "Alexander's Portfolio",
    type: "website",
    description: 'Come check out the website to learn more about me',
    images: banner,
    url: "https://www.alexanders-constellations.com"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


