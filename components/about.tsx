import { Card } from "@/components/ui/card"
import { Laugh, Zap, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About OffendEverybdy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 shadow-lg text-center">
            <Laugh className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Unapologetic Humor</h3>
            <p className="text-gray-600">
              We're here to push boundaries and make you laugh, even if it means offending everyone along the way.
            </p>
          </Card>
          <Card className="p-6 shadow-lg text-center">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Meme-Powered Token</h3>
            <p className="text-gray-600">
              $OFFENDED isn't just a token, it's a movement fueled by the dankest memes and the most offensive jokes.
            </p>
          </Card>
          <Card className="p-6 shadow-lg text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-600">
              Join a community of like-minded individuals who aren't afraid to laugh at the absurdity of life.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

