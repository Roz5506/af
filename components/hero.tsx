import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Left side image */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4 w-1/3 aspect-[3/4] overflow-hidden rounded-r-xl hidden xl:block">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zYTZaN4iTGc4RcPqJgw6rSA2mhU9Uc.png"
            alt="Money Face Meme"
            fill
            className="object-contain bg-white"
          />
        </div>

        {/* Right side image */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4 w-1/3 aspect-[3/4] overflow-hidden rounded-l-xl hidden xl:block">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zYTZaN4iTGc4RcPqJgw6rSA2mhU9Uc.png"
            alt="Money Face Meme"
            fill
            className="object-contain bg-white scale-x-[-1]"
          />
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl">
              The Meme Coin That <span className="text-gradient">Offends Everyone</span>
            </h1>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl">
              Join the revolution of unapologetic humor and meme culture with OffendEverybdy
            </p>
            <Button size="lg" className="bg-primary text-white hover:bg-red-600 transition-colors text-lg px-8 py-3">
              Get Started
            </Button>
          </div>

          <div className="bg-black text-white p-6 rounded-t-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-red-600 opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2 text-center">Contract Address</h2>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                <span className="font-mono text-4xl font-bold text-yellow-300 tracking-wider">SOON</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-b-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d86692c5-1c35-4efd-9968-68f06c8a6b0b.jpg-Xo941lfoPCNUbnDQCrabGGU7bAYN9F.jpeg"
              alt="OffendEverybdy $OFFENDED Meme"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

