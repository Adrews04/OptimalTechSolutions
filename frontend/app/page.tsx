import CameraFeed from "@/components/camera-feed"
import Header from "@/components/header"

const cameras = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  alert: Math.random() > 0.5,
}))

export default function CamarasPage() {
  return (
    <div className="container mx-auto px-4 py-8 h-screen flex flex-col">
      <Header title="CÁMARAS" />
      <div className="flex-grow flex items-center justify-center">
        <div className="grid grid-cols-3 gap-4 max-w-5xl w-full">
          {cameras.map((camera) => (
            <CameraFeed key={camera.id} id={camera.id} alert={camera.alert} />
          ))}
        </div>
      </div>
    </div>
  )
}

