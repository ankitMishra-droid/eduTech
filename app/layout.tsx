import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ourFileRouter } from "./api/uploadthing/core";
import { extractRouterConfig } from "uploadthing/server";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const containerStyle = {
    backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #121416 29.27%, rgba(18, 20, 22, 0.00) 81.09%)',
    backgroundColor: '#000000',
    // fontFamily: "Montserrat"
  };
  return (
    <>
    <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`} style={containerStyle}>{children}</body>
      </html>
    </ClerkProvider>
    </>
  )
}