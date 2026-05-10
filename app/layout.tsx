import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Richard Blea — IT Support & Cybersecurity',
  description:
    'CS graduate (CU Denver, May 2026) with hands-on IT experience — Active Directory, Intune MDM, M365, and PowerShell. Security fundamentals built in. Available for IT support and infrastructure roles.',
  keywords: [
    'IT support', 'cybersecurity', 'Active Directory', 'Intune MDM',
    'CU Denver', 'Richard Blea', 'SIEM', 'PowerShell', 'help desk',
  ],
  authors: [{ name: 'Richard Blea', url: 'https://github.com/Rblea97' }],
  openGraph: {
    title: 'Richard Blea — IT Support & Cybersecurity',
    description: 'Security-aware IT professional. Available for IT support and infrastructure roles.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
        {children}
      </body>
    </html>
  )
}
