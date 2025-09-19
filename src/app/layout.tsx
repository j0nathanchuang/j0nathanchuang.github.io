import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import { StructuredData } from '@/components/shared';

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Jonathan Chuang',
    template: '%s | Jonathan Chuang',
  },
  description:
    'Full-stack software engineer at Greenlight with experience at Magical ($2M+ ARR growth), Capital One, and LeaseMagnets. University of Michigan graduate specializing in TypeScript, React, Next.js, and AI tools.',
  keywords: [
    'Jonathan Chuang',
    'Software Engineer',
    'Full-Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Greenlight',
    'Magical',
    'Capital One',
    'University of Michigan',
    'Chicago Developer',
    'AI Tools',
    'Startup Experience',
  ],
  authors: [{ name: 'Jonathan Chuang', url: 'https://jonathanchuang.me' }],
  creator: 'Jonathan Chuang',
  publisher: 'Jonathan Chuang',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jonathanchuang.me'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jonathanchuang.me',
    title: 'Jonathan Chuang',
    description:
      'Full-stack software engineer at Greenlight with experience at Magical ($2M+ ARR growth), Capital One, and LeaseMagnets. University of Michigan graduate specializing in TypeScript, React, Next.js, and AI tools.',
    siteName: 'Jonathan Chuang',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jonathan Chuang',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jonathan Chuang',
    description:
      'Full-stack software engineer at Greenlight with experience at Magical ($2M+ ARR growth), Capital One, and LeaseMagnets. University of Michigan graduate specializing in TypeScript, React, Next.js, and AI tools.',
    images: ['/og-image.jpg'],
    creator: '@j0nathanchuang',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google:
      'google-site-verification=dxifpzV7nwCnk_wZVcCedBdwt2p6P7oxMG6i-W6WtpI',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.variable}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
