const reservations = [
  {
    id: "RES001",
    user: "John Doe",
    date: "2023-05-15",
    startTime: "09:00",
    endTime: "11:00",
    zoneName: "Conference Room A",
  },
  {
    id: "RES002",
    user: "Jane Smith",
    date: "2023-05-16",
    startTime: "14:00",
    endTime: "16:00",
    zoneName: "Meeting Room B",
  },
  // Add more reservations as needed
]

export default function ReservationList() {
  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {reservations.map((reservation) => (
        <div key={reservation.id} className="bg-gray-800 p-4 rounded-lg">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-gray-400">Usuario:</span> {reservation.user}
            </div>
            <div>
              <span className="text-gray-400">ID:</span> {reservation.id}
            </div>
            <div>
              <span className="text-gray-400">Fecha:</span> {reservation.date}
            </div>
            <div>
              <span className="text-gray-400">Hora Inicio:</span> {reservation.startTime}
            </div>
            <div>
              <span className="text-gray-400">Hora Final:</span> {reservation.endTime}
            </div>
            <div>
              <span className="text-gray-400">Nombre de la Zona:</span> {reservation.zoneName}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

