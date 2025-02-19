import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { About } from "../components/about"
import { Roadmap } from "../components/roadmap"
import { Tokenomics } from "../components/tokenomics"
import { CTA } from "../components/cta"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Roadmap />
        <Tokenomics />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

