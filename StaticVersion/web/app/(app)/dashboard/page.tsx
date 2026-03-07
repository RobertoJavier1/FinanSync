'use client'

import Link from 'next/link'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import { TrendingUp, TrendingDown, Plus, ArrowUpRight, ArrowDownLeft } from 'lucide-react'

const monthlyData = [
  { mes: 'Ene', ingresos: 5800, gastos: 3800 },
  { mes: 'Feb', ingresos: 5800, gastos: 4000 },
  { mes: 'Mar', ingresos: 5800, gastos: 3600 },
  { mes: 'Abr', ingresos: 5800, gastos: 4200 },
  { mes: 'May', ingresos: 6300, gastos: 4000 },
  { mes: 'Jun', ingresos: 5800, gastos: 4200 },
]

const categoryData = [
  { name: 'Vivienda', value: 30, color: '#3b82f6' },
  { name: 'Comida', value: 20, color: '#22c55e' },
  { name: 'Transporte', value: 10, color: '#94a3b8' },
  { name: 'Compras', value: 15, color: '#ef4444' },
  { name: 'Entretenimiento', value: 8, color: '#a855f7' },
  { name: 'Otros', value: 17, color: '#64748b' },
]

const budgetProgress = [
  { name: 'Vivienda', spent: 1200, total: 1500, color: '#3b82f6', over: false },
  { name: 'Comida', spent: 800, total: 900, color: '#22c55e', over: false },
  { name: 'Transporte', spent: 400, total: 500, color: '#f59e0b', over: false },
  { name: 'Entretenimiento', spent: 300, total: 400, color: '#a855f7', over: false },
  { name: 'Compras', spent: 700, total: 600, color: '#ef4444', over: true },
]

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">¡Bienvenido de nuevo! 👋</h1>
          <p className="text-slate-500 text-sm mt-0.5">Aquí está tu resumen financiero de Marzo 2026</p>
        </div>
        <Link href="/transacciones/agregar">
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-medium transition-colors text-sm">
            <Plus className="w-4 h-4" />
            Agregar Transacción
          </button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-600 text-white rounded-xl p-5">
          <p className="text-green-100 text-xs mb-1">Saldo Total</p>
          <p className="text-3xl font-bold">$12.650</p>
          <p className="text-green-200 text-xs mt-2 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            +38.1% desde el mes pasado
          </p>
          <div className="w-8 h-8 bg-green-500 rounded-lg mt-3 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-5">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-xs mb-1">Ingresos</p>
              <p className="text-2xl font-bold text-slate-800">$5800</p>
              <p className="text-slate-400 text-xs mt-1">Este mes</p>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-xs mb-1">Gastos</p>
              <p className="text-2xl font-bold text-slate-800">$4200</p>
              <p className="text-slate-400 text-xs mt-1">Este mes</p>
            </div>
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
              <ArrowDownLeft className="w-4 h-4 text-red-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-4">
        {/* Area Chart */}
        <div className="bg-white rounded-xl p-5">
          <h2 className="font-semibold text-slate-800 mb-4 text-sm">Ingresos vs Gastos</h2>
          <ResponsiveContainer width="100%" height={190}>
            <AreaChart data={monthlyData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorIngresos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorGastos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="mes" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Area type="monotone" dataKey="ingresos" stroke="#22c55e" fill="url(#colorIngresos)" strokeWidth={2} name="income" />
              <Area type="monotone" dataKey="gastos" stroke="#ef4444" fill="url(#colorGastos)" strokeWidth={2} name="expenses" />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex gap-4 mt-1 justify-center">
            <span className="flex items-center gap-1.5 text-xs text-slate-500">
              <span className="w-4 h-0.5 bg-green-500 inline-block rounded" />
              income
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-500">
              <span className="w-4 h-0.5 bg-red-500 inline-block rounded" />
              expenses
            </span>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl p-5">
          <h2 className="font-semibold text-slate-800 mb-4 text-sm">Gastos por Categoría</h2>
          <div className="flex items-center gap-4">
            <ResponsiveContainer width={170} height={170}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={75}
                  dataKey="value"
                  paddingAngle={2}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-2">
              {categoryData.map((item) => (
                <div key={item.name} className="flex items-center gap-2 text-xs">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-slate-600 flex-1">{item.name}</span>
                  <span className="text-slate-400">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Budget Progress */}
      <div className="bg-white rounded-xl p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-slate-800 text-sm">Progreso del Presupuesto</h2>
          <Link href="/presupuesto">
            <button className="text-xs text-blue-600 border border-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors font-medium">
              Ver Todo
            </button>
          </Link>
        </div>
        <div className="space-y-3">
          {budgetProgress.map((item) => {
            const pct = Math.min((item.spent / item.total) * 100, 100)
            return (
              <div key={item.name}>
                <div className="flex justify-between text-sm mb-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-slate-700 font-medium">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 text-xs">${item.spent} / ${item.total}</span>
                    {item.over && (
                      <span className="text-red-500 text-xs font-semibold">Sobre Presupuesto</span>
                    )}
                  </div>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: item.over ? '#ef4444' : '#22c55e',
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* AI Banner */}
      <div className="bg-blue-600 rounded-xl p-5 flex items-start gap-4">
        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
          🤖
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-sm">Perspectiva Financiera IA</h3>
          <p className="text-blue-100 text-xs mt-1 leading-relaxed">
            Tus gastos de compras son un 17% más altos que el mes pasado. Considera establecer un presupuesto más estricto para esta categoría y alcanzar tu meta de ahorro de $10,000 para Diciembre.
          </p>
          <Link href="/perspectivas-ia">
            <button className="mt-3 bg-white text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-lg hover:bg-blue-50 transition-colors">
              Ver Todas las Perspectivas
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
