import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section id="buy" className="bg-accent text-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Offend Everyone?</h2>
        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
          Get your OffendEverybdy tokens now and start the meme war!
        </p>
        <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 transition-colors text-lg px-8 py-3">
          Buy OffendEverybdy
        </Button>
      </div>
    </section>
  )
}

