'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Receipt,
  Wallet,
  Target,
  Sparkles,
  Settings,
  LogOut,
  DollarSign,
} from 'lucide-react'

const navItems = [
  { href: '/dashboard', label: 'Panel', icon: LayoutDashboard },
  { href: '/transacciones', label: 'Transacciones', icon: Receipt },
  { href: '/presupuesto', label: 'Presupuesto', icon: Wallet },
  { href: '/metas', label: 'Metas', icon: Target },
  { href: '/perspectivas-ia', label: 'Perspectivas IA', icon: Sparkles },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-56 h-screen bg-white border-r border-slate-200 flex flex-col flex-shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-slate-100">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
          <DollarSign className="w-4 h-4 text-white" />
        </div>
        <span className="font-bold text-slate-800 text-lg">FinanSync</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-0.5">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-green-500 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-slate-100 space-y-0.5">
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 w-full transition-colors">
          <Settings className="w-4 h-4 flex-shrink-0" />
          Configuración
        </button>
        <Link href="/" className="block">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 w-full transition-colors">
            <LogOut className="w-4 h-4 flex-shrink-0" />
            Cerrar Sesión
          </button>
        </Link>
      </div>
    </aside>
  )
}
