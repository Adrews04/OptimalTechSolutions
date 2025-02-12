import Header from "@/components/header"
import SensorRings from "@/components/sensor-rings"
import AlertList from "@/components/alert-list"

export default function RecursosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Header title="RECURSOS" />
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <SensorRings />
        <AlertList />
      </div>
    </div>
  )
}

