import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const Neue = localFont({
  src: './fonts/NeuePlakBlack.ttf',
  variable: '--font-neue',
})

export const metadata: Metadata = {
  title: "Acdra",
  description: "Acdra - The learning hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Neue.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
