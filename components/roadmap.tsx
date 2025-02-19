import { Card } from "@/components/ui/card"
import { Rocket, Users, Zap, Globe, BarChartIcon as ChartBar, Lock } from "lucide-react"

const milestones = [
  {
    phase: "Phase 1",
    title: "Launch & Community Building",
    timeline: "Q2 2025",
    items: [
      { icon: <Rocket className="w-5 h-5 text-primary" />, text: "Token creation and smart contract deployment" },
      { icon: <Users className="w-5 h-5 text-primary" />, text: "Community outreach and social media campaign" },
      { icon: <Zap className="w-5 h-5 text-primary" />, text: "Initial exchange listings and liquidity provision" },
    ],
  },
  {
    phase: "Phase 2",
    title: "Expansion & Partnerships",
    timeline: "Q3 2025",
    items: [
      { icon: <Globe className="w-5 h-5 text-primary" />, text: "Launch of OffendEverybdy meme creation platform" },
      { icon: <Users className="w-5 h-5 text-primary" />, text: "Partnerships with meme creators and influencers" },
      { icon: <ChartBar className="w-5 h-5 text-primary" />, text: "Implementation of staking and rewards program" },
    ],
  },
  {
    phase: "Phase 3",
    title: "Ecosystem Development",
    timeline: "Q4 2025",
    items: [
      { icon: <Lock className="w-5 h-5 text-primary" />, text: "Launch of OffendEverybdy NFT collection" },
      { icon: <Zap className="w-5 h-5 text-primary" />, text: "Development of decentralized meme marketplace" },
      { icon: <Globe className="w-5 h-5 text-primary" />, text: "Expansion to multiple blockchain networks" },
    ],
  },
  {
    phase: "Phase 4",
    title: "Global Domination",
    timeline: "Q1 2026",
    items: [
      { icon: <ChartBar className="w-5 h-5 text-primary" />, text: "Launch of OffendEverybdy DeFi platform" },
      {
        icon: <Users className="w-5 h-5 text-primary" />,
        text: "Establishment of OffendEverybdy DAO for community governance",
      },
      {
        icon: <Rocket className="w-5 h-5 text-primary" />,
        text: "Mainstream media partnerships and global marketing campaign",
      },
    ],
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">OffendEverybdy Roadmap</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>

          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""} md:flex md:items-center`}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Card className="p-6 shadow-lg bg-white relative">
                  {/* Phase indicator */}
                  <div className="absolute top-0 left-0 bg-primary text-white text-xs font-bold px-2 py-1 rounded-tr-lg rounded-bl-lg">
                    {milestone.phase}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 mt-4">{milestone.title}</h3>
                  <p className="text-gray-600 mb-4">{milestone.timeline}</p>
                  <ul className="space-y-3">
                    {milestone.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="mr-2 mt-1">{item.icon}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
              <div className="md:w-1/2 flex justify-center items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

