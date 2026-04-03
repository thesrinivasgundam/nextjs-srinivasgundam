import type { Metadata } from 'next';
import { dmSans } from './fonts';
import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  metadataBase: new URL('https://srinivasgundam.com'),

  title: {
    default: 'srinivas gundam ',
    template: '%s | Srinivas Gundam',
  },

  description:
    'Srinivas Gundam is a full stack web developer crafting responsive, interactive websites with clean UI using HTML, CSS, and JavaScript — focused on performance and user experience.',

  keywords: [
    'Full Stack Developer',
    'Web Developer',
    'HTML',
    'CSS',
    'JavaScript',
    'Responsive Design',
    'Interactive Websites',
    'UI Developer',
    'Frontend Developer',
    'Performance Optimization',
    'User Experience',
    'Clean Code',
    'Web Development Portfolio',
  ],

  authors: [{ name: 'Srinivas Gundam' }],
  creator: 'Srinivas Gundam',
  publisher: 'Srinivas Gundam',

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

  openGraph: {
    type: 'website',
    url: 'https://srinivasgundam.com',
    title: 'Srinivas Gundam ⚡ Frontend Web Developer',
    description:
      'Expert in building responsive and high-performance web interfaces with clean UI & UX design.',
    siteName: 'Srinivas Gundam Portfolio',
    images: [
      {
        url: '/og-srinivasgundam.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio of Srinivas Gundam – Full Stack Developer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Srinivas Gundam ⚡ Full Stack Web Developer',
    description:
      'Responsive, interactive, clean UI websites built with HTML, CSS & JavaScript.',
    images: ['/og-srinivasgundam.png'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  alternates: {
    canonical: 'https://srinivasgundam.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
        <Analytics />
      </body>
    </html>
  );
}