const reports = [
  {
    id: "REP001",
    zone: "Zone A",
    alert: "High Temperature",
    date: "2023-05-15",
    type: "Environmental",
  },
  {
    id: "REP002",
    zone: "Zone B",
    alert: "Unauthorized Access",
    date: "2023-05-16",
    type: "Security",
  },
  // Add more reports as needed
]

export default function ReportList() {
  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {reports.map((report) => (
        <div key={report.id} className="bg-gray-800 p-4 rounded-lg">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-gray-400">Zona:</span> {report.zone}
            </div>
            <div>
              <span className="text-gray-400">Alerta:</span> {report.alert}
            </div>
            <div>
              <span className="text-gray-400">Fecha:</span> {report.date}
            </div>
            <div>
              <span className="text-gray-400">Tipo:</span> {report.type}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

