"use client"

import type React from "react"

import { useCallback } from "react"

export function Footer() {
  const scrollToSection = useCallback(
    (sectionId: string) => (e: React.MouseEvent) => {
      e.preventDefault()
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    },
    [],
  )

  return (
    <footer className="bg-white text-gray-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">OffendEverybdy</h3>
            <p className="text-sm">The meme coin that doesn't care about your feelings.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={scrollToSection("roadmap")} className="hover:text-primary transition-colors">
                  Roadmap
                </button>
              </li>
              <li>
                <a
                  href="https://offensiveswag.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Merch
                </a>
              </li>
              <li>
                <button onClick={scrollToSection("tokenomics")} className="hover:text-primary transition-colors">
                  Tokenomics
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li className="text-gray-500">Terms of Service</li>
              <li className="text-gray-500">Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://x.com/OffendEverybdy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/OffendingEverybdy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@0ffendingeverybody"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm">&copy; 2025 OffendEverybdy. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-500">
            Disclaimer: This is a meme coin. It's meant to be offensive. Invest at your own risk.
          </p>
        </div>
      </div>
    </footer>
  )
}

