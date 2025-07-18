import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import Script from 'next/script';

export const metadata : Metadata = {
  metadataBase: new URL('https://nplcoder.org'),
  title: {
    default: 'NPLCoder | Empowering the Next Generation of Nepali Computational Minds',
    template: 'NPLCoder',
  },
  description: 'NPLCoder is a non-profit organization dedicated to empowering Nepali students in computing and innovation through resources, mentorship, and opportunities to nurture talent that will drive global change.',
  keywords: [
    'NPLCoder', 'Nepal Programming', 'Nepali Coders', 'Nepal Tech', 
    'Competitive Programming Nepal', 'NPLAlgo', 'NPLNeural', 'NPLCareer', 
    'NPLAcademia', 'GenAI Fellowship', 'Nepal Olympiad in Informatics', 
    'Tech Education Nepal', 'Coding Nepal', 'AI Nepal', 'Machine Learning Nepal'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nplcoder.org',
    siteName: 'NPLCoder',
    title: 'NPLCoder | Empowering the Next Generation of Nepali Computational Minds',
    description: 'Building the foundation for Nepal\'s digital future through programs designed to nurture and showcase computational talent.',
    images: [
      {
        url: '/images/NPLCoder.png', 
        width: 1200,
        height: 630,
        alt: 'NPLCoder - Shaping Nepal\'s Future with Computational Innovation',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NPLCoder | Empowering Nepali Computational Minds',
    description: 'A non-profit organization dedicated to empowering Nepali students in computing and innovation.',
    images: ['/images/NPLCoder.png'],
    creator: '@nplcoder', 
    site: '@nplcoder',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.ico', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.ico' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.ico',
      },
    ],
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
  alternates: {
    canonical: 'https://nplcoder.org',
    languages: {
      'en-US': 'https://nplcoder.org',
    },
  },
  category: 'Technology, Education, Non-Profit',
  other: {
    'application-name': 'NPLCoder',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'NPLCoder',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#2d89ef',
    'theme-color': '#ffffff',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NPLCoder',
  url: 'https://nplcoder.org',
  logo: 'https://nplcoder.org/images/NPLCoder.png',
  sameAs: [
    'https://www.instagram.com/nplcoder',
    'https://www.linkedin.com/company/nplcoder',
  ],
  description: 'NPLCoder is a non-profit organization dedicated to empowering Nepali students in computing and innovation through resources, mentorship, and opportunities.',
};

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preload" href="/images/NPLCoder.png" as="image" />
      </head>
      <body className="font-verdana antialiased">
        <ThemeProvider>
          <NextIntlClientProvider>
            <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0d0f15] dark:via-[#2C3043] dark:to-[#1a1d2c]">
              <section className="relative overflow-hidden mx-auto lg:px-8 pt-32 lg:pt-[200px]">
              <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
              <Nav />
                  {children}
                </div>
              </section>
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>

        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
