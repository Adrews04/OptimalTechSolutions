interface RingChartProps {
  value: number
  max: number
  unit: string
  color: string
}

export default function RingChart({ value, max, unit, color }: RingChartProps) {
  const percentage = (value / max) * 100
  const strokeDasharray = `${percentage} ${100 - percentage}`

  return (
    <div className="relative w-28 h-28">
      <svg className="w-full h-full" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="16" fill="none" className="stroke-gray-700" strokeWidth="3.6" />
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className={`${color} transition-all duration-1000 ease-in-out`}
          strokeWidth="3.6"
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          transform="rotate(-90 18 18)"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-xs">{unit}</span>
      </div>
    </div>
  )
}

