import { AlertTriangle } from "lucide-react"

interface CameraFeedProps {
  id: number
  alert: boolean
}

export default function CameraFeed({ id, alert }: CameraFeedProps) {
  return (
    <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <div className="absolute top-2 left-2 bg-gray-900 bg-opacity-75 px-2 py-1 rounded text-xs">Zona: {id}</div>
      {alert && (
        <div className="absolute top-2 right-2">
          <AlertTriangle className="text-yellow-500 w-4 h-4" />
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-gray-500 text-sm">Camera Feed {id}</span>
      </div>
    </div>
  )
}

