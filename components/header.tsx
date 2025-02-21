"use client"

import type React from "react"

import Image from "next/image"
import { Youtube, Twitter, Send } from "lucide-react"
import { logScrollAction } from "../app/actions"
import { useCallback } from "react"

export function Header() {
  const handleScrollToSection = useCallback(
    (sectionId: string) => async (e: React.MouseEvent) => {
      e.preventDefault()
      await logScrollAction(sectionId)
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    },
    [],
  )

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="https://x.com/OffendEverybdy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/channels4_profile.jpg-GLtDncbvPcrL19GweqSH45h26wtniG.jpeg"
            alt="OffendEverybdy Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-gradient">OffendEverybdy</span>
        </a>
        <nav className="flex items-center space-x-8">
          <button
            onClick={handleScrollToSection("about")}
            className="text-gray-600 hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={handleScrollToSection("roadmap")}
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Roadmap
          </button>
          <button
            onClick={() => window.open("https://offensiveswag.com/", "_blank")}
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Merch
          </button>
          <button
            onClick={handleScrollToSection("tokenomics")}
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Tokenomics
          </button>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.youtube.com/@0ffendingeverybody"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              <Youtube size={24} />
              <span className="sr-only">YouTube</span>
            </a>
            <a
              href="https://x.com/OffendEverybdy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 transition-colors"
            >
              <Twitter size={24} />
              <span className="sr-only">X (Twitter)</span>
            </a>
            <a
              href="https://t.me/OffendingEverybdy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <Send size={24} />
              <span className="sr-only">Telegram</span>
            </a>
            <a
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-yXTYcjRUKQ2PgsxzPJd0ZMcayUnJCZ.webp"
                alt="pump.fun"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="sr-only">pump.fun</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

