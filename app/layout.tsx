import type { Metadata } from 'next';
import './globals.css';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['600','700','800'], variable: '--font-heading' });

export const metadata: Metadata = {
  metadataBase: new URL('https://agentic-4203e670.vercel.app'),
  title: 'Murad Khan ? Building Smarter Systems for the Digital Age',
  description: 'IT solutions expert and developer specializing in modern web systems, automation, and on-demand AI integration. Karachi, Pakistan.',
  openGraph: {
    title: 'Murad Khan ? Building Smarter Systems for the Digital Age',
    description: 'IT solutions expert and developer specializing in modern web systems, automation, and on-demand AI integration.',
    url: 'https://agentic-4203e670.vercel.app',
    siteName: 'Murad Khan Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Murad Khan ? Building Smarter Systems for the Digital Age',
    description: 'IT solutions expert and developer specializing in modern web systems, automation, and on-demand AI integration.',
  },
  themeColor: '#0b0d12'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
