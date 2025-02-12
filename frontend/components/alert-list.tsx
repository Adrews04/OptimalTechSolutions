"use client"

import { useState } from "react"

const initialAlerts = [
  { id: 1, message: "Temperature exceeds threshold", severity: "high" },
  { id: 2, message: "Humidity level is low", severity: "medium" },
  { id: 3, message: "Pressure dropping rapidly", severity: "high" },
  { id: 4, message: "Light levels are fluctuating", severity: "low" },
  { id: 5, message: "CO2 levels are high", severity: "medium" },
  { id: 6, message: "Noise levels exceeding limits", severity: "high" },
]

export default function AlertList() {
  const [alerts, setAlerts] = useState(initialAlerts)

  const handleDismiss = (id: number) => {
    setAlerts(alerts.filter((alert) => alert.id !== id))
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="w-full lg:w-96 bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Alerts</h2>
      <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
        {alerts.map((alert) => (
          <div key={alert.id} className="bg-gray-700 p-4 rounded-lg flex justify-between items-center">
            <div>
              <span className={`inline-block w-3 h-3 rounded-full mr-2 ${getSeverityColor(alert.severity)}`}></span>
              <span>{alert.message}</span>
            </div>
            <button onClick={() => handleDismiss(alert.id)} className="text-gray-400 hover:text-white">
              Dismiss
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

