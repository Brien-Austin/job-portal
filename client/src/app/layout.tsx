import type { Metadata } from "next";
import { Inter } from 'next/font/google'

import "./globals.css";
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Job Management Admin ",
  description: "A Job Management Dashboard for Admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
    
        {children}</body>
    </html>
  );
}
