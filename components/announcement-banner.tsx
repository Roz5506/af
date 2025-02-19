import { AlertCircle } from "lucide-react"

export function AnnouncementBanner() {
  return (
    <div className="bg-black text-white py-3 px-4 text-center font-medium sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <AlertCircle className="w-5 h-5 text-primary animate-pulse" />
        <span>
          Contract Address: <span className="text-primary">SOON</span>
        </span>
      </div>
    </div>
  )
}

