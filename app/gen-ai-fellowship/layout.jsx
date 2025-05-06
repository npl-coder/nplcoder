import { Metadata } from 'next';
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/Nav";

import Footer from "@/components/Footer";

export const metadata = {
  title: 'NPLCoder GenAI Builders Fellowship 001 | Build Real AI Products',
  description: 'A 6-week intensive program for Nepali students and professionals to become hands-on AI builders and create real, usable, AI-first products.',
  keywords: 'GenAI, AI Fellowship, Nepal, NPLCoder, AI Builders, AI Products, Artificial Intelligence Training',
  
  openGraph: {
    title: 'NPLCoder GenAI Builders Fellowship 001',
    description: 'Build real AI products in 6 weeks. A launchpad for Nepali students and professionals to create usable AI-first products.',
    url: 'https://www.nplcoder.org/gen-ai-fellowship',
    siteName: 'NPLCoder',
    images: [
      {
        url: 'https://nplcoder.org/images/gen-ai-fellowship.svg',
        width: 1200,
        height: 630,
        alt: 'NPLCoder GenAI Builders Fellowship',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'NPLCoder GenAI Builders Fellowship 001',
    description: 'A 6-week intensive program for building real AI products in Nepal',
    images: ['https://nplcoder.org/images/gen-ai-fellowship.svg'], 
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

  canonical: 'https://www.nplcoder.org/gen-ai-fellowship',
  
  other: {
    'application-name': 'NPLCoder',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'NPLCoder Fellowship',
    'format-detection': 'telephone=no',
  },
};

export default function Layout({ children }) {
  return (
    <>
    <ThemeProvider>

        {children}
        
       </ThemeProvider>
        </>
  );
}