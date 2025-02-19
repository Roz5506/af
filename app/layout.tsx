import { SpeedInsights } from "@vercel/speed-insights/next"
import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "OffendEverybdy - The Most Offensive Meme Coin",
  description: "Join the revolution of unapologetic humor and meme culture with OffendEverybdy!",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/channels4_profile.jpg-GLtDncbvPcrL19GweqSH45h26wtniG.jpeg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/channels4_profile.jpg-GLtDncbvPcrL19GweqSH45h26wtniG.jpeg"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

