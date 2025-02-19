import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function Merch() {
  const products = [
    {
      name: "Friends T-Shirt",
      price: "$27.99",
      image:
        "https://sjc.microlink.io/1LDMZRibapWxTre30bDzFDLXRj5nIHNY2QLw6K6Ch_VP8Y5JDB7KuJcIkpDAH_nphROfCOtBViaFbZgtNB2x8w.jpeg",
      link: "https://offensiveswag.com/products/friends-t-shirt",
    },
    {
      name: "Can't Say No T-Shirt",
      price: "$27.99",
      image:
        "https://sjc.microlink.io/1LDMZRibapWxTre30bDzFDLXRj5nIHNY2QLw6K6Ch_VP8Y5JDB7KuJcIkpDAH_nphROfCOtBViaFbZgtNB2x8w.jpeg",
      link: "https://offensiveswag.com/products/cant-say-no-t-shirt",
    },
    {
      name: "6 Inches T-Shirt",
      price: "$27.99",
      image:
        "https://sjc.microlink.io/1LDMZRibapWxTre30bDzFDLXRj5nIHNY2QLw6K6Ch_VP8Y5JDB7KuJcIkpDAH_nphROfCOtBViaFbZgtNB2x8w.jpeg",
      link: "https://offensiveswag.com/products/6-inches-t-shirt",
    },
  ]

  return (
    <section id="merch" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Offensive Merch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-lg font-bold text-primary mb-4">{product.price}</p>
                  <Button asChild className="w-full bg-primary text-white hover:bg-red-600 transition-colors">
                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                      Buy Now <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary text-white hover:bg-red-600 transition-colors">
            <a href="https://offensiveswag.com" target="_blank" rel="noopener noreferrer" className="text-lg px-8 py-3">
              View All Merch <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

