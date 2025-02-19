import Image from "next/image"

const milestones = [
  {
    title: "Q2 2025: Launch",
    description: "Token creation, website launch, initial listings",
    icon: "🚀",
    position: { top: "10%", left: "20%" },
  },
  {
    title: "Q3 2025: Community Growth",
    description: "Meme contests, partnerships, merch store",
    icon: "🌱",
    position: { top: "30%", left: "40%" },
  },
  {
    title: "Q4 2025: Ecosystem Expansion",
    description: "NFT collection, staking program, major marketing",
    icon: "🔥",
    position: { top: "50%", left: "60%" },
  },
  {
    title: "Q1 2026: Global Domination",
    description: "DeFi platform, brand partnerships, mainstream expansion",
    icon: "🌍",
    position: { top: "70%", left: "80%" },
  },
]

export function TreasureMapRoadmap() {
  return (
    <section id="roadmap" className="py-20 bg-amber-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-brown-800">OffendEverybdy Treasure Map</h2>
        <div className="relative w-full" style={{ paddingBottom: "75%" }}>
          <div className="absolute inset-0 bg-amber-200 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Treasure Map Background"
              layout="fill"
              objectFit="cover"
              className="mix-blend-overlay opacity-50"
            />
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20 Q 20 50 30 40 T 50 60 T 70 50 T 90 80"
                stroke="#8B4513"
                strokeWidth="2"
                strokeDasharray="5 5"
                fill="none"
              />
            </svg>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ top: milestone.position.top, left: milestone.position.left }}
              >
                <div className="bg-amber-800 rounded-full p-4 shadow-lg">
                  <span className="text-3xl">{milestone.icon}</span>
                </div>
                <div className="mt-2 bg-white bg-opacity-80 p-2 rounded shadow text-center">
                  <h3 className="text-lg font-semibold text-brown-800">{milestone.title}</h3>
                  <p className="text-sm text-brown-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

