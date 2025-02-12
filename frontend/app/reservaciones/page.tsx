import Header from "@/components/header"
import ReservationList from "@/components/reservation-list"

export default function ReservacionesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Header title="RESERVACIONES" />
      <ReservationList />
    </div>
  )
}

