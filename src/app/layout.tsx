import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Recursive } from 'next/font/google'
import { constructMetadata } from "@/lib/utils";

const recursive = Recursive({ subsets: ['latin'] })

export const metadata= constructMetadata();

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>{children}</body>
    </html>
  );
}
