import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import { Roboto } from 'next/font/google';
import React from 'react';
import './globals.css';
import Navbar from '@/app/product/components/NavBar';
import TostifyProvider from '@/provider/TostifyProvider';

// Local Fonts
// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

// // Google Fonts
// const jetBrainsMono = JetBrains_Mono({
//   subsets: ['latin'],
//   variable: '--font-jetbrains-mono',
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
// });

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Fresh mart',
  description: 'Online grocery store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${roboto.variable} antialiased`}>
        <Navbar />
        {children}
        <TostifyProvider />
      </body>
    </html>
  );
}
