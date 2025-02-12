import RingChart from "./ring-chart"

const sensors = [
  { name: "Temperature", value: 25, max: 50, unit: "°C", color: "text-red-500" },
  { name: "Humidity", value: 60, max: 100, unit: "%", color: "text-blue-500" },
  { name: "Pressure", value: 1013, max: 1100, unit: "hPa", color: "text-green-500" },
  { name: "Light", value: 500, max: 1000, unit: "lux", color: "text-yellow-500" },
  { name: "CO2", value: 800, max: 2000, unit: "ppm", color: "text-purple-500" },
  { name: "Noise", value: 45, max: 100, unit: "dB", color: "text-pink-500" },
]

export default function SensorRings() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sensors.map((sensor) => (
        <div key={sensor.name} className="flex items-center space-x-4">
          <RingChart value={sensor.value} max={sensor.max} unit={sensor.unit} color={sensor.color} />
          <span className="text-xl font-semibold">{sensor.name}</span>
        </div>
      ))}
    </div>
  )
}

