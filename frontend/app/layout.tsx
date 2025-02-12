import "./globals.css"
import { Inter } from "next/font/google"
import Navigation from "@/components/navigation"
import type { Metadata } from "next"
import type React from "react"
import type { JSX, ReactHTML } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dark-themed dashboard with multiple screens",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen flex flex-col`}>
        <main className="flex-grow">{children}</main>
        <Navigation />
      </body>
    </html>
  )
}



import './globals.css'