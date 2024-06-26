import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MyBookshelf',
  description: 'Manage your books here :)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="antialiased"
    >
      <body
        className={`${inter.className} bg-zinc-50 text-zinc-950 sm:w-[80%] mx-auto min-h-screen flex flex-col justify-between`}
      >
        {children}
      </body>
    </html>
  );
}
