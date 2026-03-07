'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Edit2, Trash2, Plus, ArrowUpRight, ArrowDownRight } from 'lucide-react'

const transactions = [
  { id: 1, name: 'Salario mensual', category: 'Salario', date: '14 feb 2026', amount: 5800, type: 'income' },
  { id: 2, name: 'Pago de renta', category: 'Vivienda', date: '13 feb 2026', amount: 1200, type: 'expense' },
  { id: 3, name: 'Compras del supermercado', category: 'Comida', date: '12 feb 2026', amount: 85.5, type: 'expense' },
  { id: 4, name: 'Gasolina', category: 'Transporte', date: '11 feb 2026', amount: 45, type: 'expense' },
  { id: 5, name: 'Proyecto de diseño web', category: 'Freelance', date: '9 feb 2026', amount: 500, type: 'income' },
  { id: 6, name: 'Boletos de concierto', category: 'Entretenimiento', date: '8 feb 2026', amount: 120, type: 'expense' },
  { id: 7, name: 'Zapatos nuevos', category: 'Compras', date: '7 feb 2026', amount: 250, type: 'expense' },
  { id: 8, name: 'Restaurante', category: 'Comida', date: '6 feb 2026', amount: 65, type: 'expense' },
]

const categories = ['Salario', 'Vivienda', 'Comida', 'Transporte', 'Freelance', 'Entretenimiento', 'Compras']

export default function TransaccionesPage() {
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const filtered = transactions.filter((t) => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase())
    const matchType = typeFilter === 'all' || t.type === typeFilter
    const matchCategory = categoryFilter === 'all' || t.category === categoryFilter
    return matchSearch && matchType && matchCategory
  })

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  return (
    <div className="p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Transacciones</h1>
          <p className="text-slate-500 text-sm mt-0.5">Visualiza y administra tus transacciones</p>
        </div>
        <Link href="/transacciones/agregar">
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-medium transition-colors text-sm">
            <Plus className="w-4 h-4" />
            Agregar Transacción
          </button>
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 flex gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar transacciones..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-slate-100 rounded-lg text-sm text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="relative">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="appearance-none pl-9 pr-8 py-2.5 bg-slate-100 rounded-lg text-sm text-slate-600 outline-none cursor-pointer"
          >
            <option value="all">Todos los Tipos</option>
            <option value="income">Ingresos</option>
            <option value="expense">Gastos</option>
          </select>
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">▼</span>
        </div>
        <div className="relative">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="appearance-none pl-9 pr-8 py-2.5 bg-slate-100 rounded-lg text-sm text-slate-600 outline-none cursor-pointer"
          >
            <option value="all">Todas las Categorías</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">▼</span>
        </div>
      </div>

      {/* Transaction List */}
      <div className="space-y-2">
        {filtered.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-white rounded-xl px-5 py-4 flex items-center gap-4"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
              }`}
            >
              {transaction.type === 'income' ? (
                <ArrowUpRight className="w-5 h-5 text-green-600" />
              ) : (
                <ArrowDownRight className="w-5 h-5 text-red-500" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-slate-800 text-sm">{transaction.name}</p>
              <p className="text-xs text-slate-500 mt-0.5">
                {transaction.category} • {transaction.date}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`font-semibold text-base ${
                  transaction.type === 'income' ? 'text-green-600' : 'text-red-500'
                }`}
              >
                {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
              </span>
              <button className="text-blue-400 hover:text-blue-600 transition-colors">
                <Edit2 className="w-4 h-4" />
              </button>
              <button className="text-red-400 hover:text-red-600 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="bg-white rounded-xl p-5 flex justify-between">
        <div>
          <p className="text-slate-500 text-sm">Total Ingresos</p>
          <p className="text-green-600 font-bold text-xl mt-0.5">${totalIncome.toFixed(2)}</p>
        </div>
        <div className="text-right">
          <p className="text-slate-500 text-sm">Total Gastos</p>
          <p className="text-red-500 font-bold text-xl mt-0.5">${totalExpenses.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}
