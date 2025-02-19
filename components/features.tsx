import { Bomb, Flame, Zap } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose OffendEverybdy?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Bomb className="w-12 h-12 text-primary" />}
            title="Maximum Offense"
            description="Create content so spicy, it'll trigger everyone in your social circle."
          />
          <FeatureCard
            icon={<Flame className="w-12 h-12 text-primary" />}
            title="Rage to Earn"
            description="Convert outrage into profit. The more people you trigger, the more you earn."
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12 text-primary" />}
            title="Unmatched Volatility"
            description="Experience the thrill of extreme price swings. It's not a bug, it's a feature!"
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform hover:scale-105">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

