"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "CÁMARAS", href: "/" },
  { name: "RECURSOS", href: "/recursos" },
  { name: "RESERVACIONES", href: "/reservaciones" },
  { name: "REPORTES", href: "/reportes" },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-gray-800 py-4">
      <ul className="flex justify-around max-w-2xl mx-auto">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`px-4 py-2 rounded-md transition-colors ${
                pathname === item.href
                  ? "bg-gray-700 text-white shadow-lg"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

