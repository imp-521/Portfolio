import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";
import Provider from "../components/Hoc/Provider";


const font = Inter({
  weight : ['100', '200', '300', '400', '500']
})

export const metadata: Metadata = {
  title: "AFSHIN SOHRABI",
  description: "Portfolio Gernerated by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
        <Provider>
            {children}
        </Provider>
        </body>
    </html>
  );
}
