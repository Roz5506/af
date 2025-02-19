import { Card } from "@/components/ui/card"
import { Coins, Users, Lock, Rocket, PieChart } from "lucide-react"

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Tokenomics</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Understanding the distribution and utility of $OFFENDED tokens
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <PieChart className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold">Token Distribution</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Community & Rewards</span>
                <span className="font-semibold">40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary rounded-full h-2" style={{ width: "40%" }}></div>
              </div>

              <div className="flex justify-between items-center">
                <span>Liquidity Pool</span>
                <span className="font-semibold">30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary rounded-full h-2" style={{ width: "30%" }}></div>
              </div>

              <div className="flex justify-between items-center">
                <span>Marketing & Development</span>
                <span className="font-semibold">20%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary rounded-full h-2" style={{ width: "20%" }}></div>
              </div>

              <div className="flex justify-between items-center">
                <span>Team</span>
                <span className="font-semibold">10%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary rounded-full h-2" style={{ width: "10%" }}></div>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <Coins className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold">Token Details</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Token Name</span>
                <span className="font-semibold">OffendEverybdy</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Token Symbol</span>
                <span className="font-semibold">$OFFENDED</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Total Supply</span>
                <span className="font-semibold">800,000,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Initial Price</span>
                <span className="font-semibold">$0.000069</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 shadow-lg text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Governance</h3>
            <p className="text-gray-600">
              Token holders can participate in decision-making processes for the project's future
            </p>
          </Card>

          <Card className="p-6 shadow-lg text-center">
            <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Liquidity Locking</h3>
            <p className="text-gray-600">
              Initial liquidity locked for 12 months to ensure project stability and security
            </p>
          </Card>

          <Card className="p-6 shadow-lg text-center">
            <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Deflationary Mechanism</h3>
            <p className="text-gray-600">
              1% of each transaction is burned, gradually reducing the total supply over time
            </p>
          </Card>
        </div>

        <p className="text-sm text-gray-500 text-center mt-8">
          Disclaimer: Cryptocurrency investments are subject to market risks. Please do your own research before
          investing.
        </p>
      </div>
    </section>
  )
}

