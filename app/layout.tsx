import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uppsikt",
  description: "Uppsikt",
  openGraph: {
    title: "Uppsikt",
    description: "Uppsikt",
    url: "https://uppsikt.se",
    siteName: "Uppsikt",
    images: [
      {
        url: "https://klokasiffror.se/favicon.png",
        width: 1200,
        height: 630,
        alt: "Preview image",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
