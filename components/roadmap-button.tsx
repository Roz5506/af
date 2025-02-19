import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function RoadmapButton() {
  return (
    <Button
      className="fixed left-0 top-20 bg-primary text-white hover:bg-red-600 transition-colors z-50 rounded-r-full rounded-l-none px-3 py-4"
      onClick={() => {
        // TODO: Implement roadmap navigation or modal opening
        console.log("Roadmap button clicked")
      }}
    >
      <MapPin className="w-5 h-5 mr-2" />
      <span className="font-bold">Roadmap</span>
    </Button>
  )
}

