import Logo from "./logo"

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <Logo />
      <h1 className="text-3xl font-bold text-center flex-grow">{title}</h1>
      <div className="w-12 h-12">{/* This empty div balances the layout */}</div>
    </div>
  )
}

