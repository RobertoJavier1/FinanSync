'use client'

import { useState } from 'react'
import { Plus, Edit2, X, TrendingDown, AlertTriangle } from 'lucide-react'

const budgets = [
  { name: 'Vivienda', spent: 1200, total: 1500, color: '#3b82f6', status: 'good' },
  { name: 'Comida', spent: 800, total: 900, color: '#22c55e', status: 'warning' },
  { name: 'Transporte', spent: 400, total: 500, color: '#f59e0b', status: 'good' },
  { name: 'Entretenimiento', spent: 300, total: 400, color: '#a855f7', status: 'good' },
  { name: 'Compras', spent: 700, total: 600, color: '#ef4444', status: 'over' },
  { name: 'Salud', spent: 150, total: 300, color: '#06b6d4', status: 'good' },
  { name: 'Educación', spent: 180, total: 200, color: '#ec4899', status: 'warning' },
  { name: 'Otros', spent: 470, total: 500, color: '#6b7280', status: 'warning' },
]

export default function PresupuestoPage() {
  const [showModal, setShowModal] = useState(false)
  const [newCategory, setNewCategory] = useState('')
  const [newAmount, setNewAmount] = useState('')

  const totalBudget = budgets.reduce((sum, b) => sum + b.total, 0)
  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0)
  const totalRemaining = totalBudget - totalSpent
  const overallProgress = (totalSpent / totalBudget) * 100

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Gestión de Presupuestos</h1>
          <p className="text-slate-500 text-sm mt-0.5">Rastrea y administra tus presupuestos mensuales</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-medium transition-colors text-sm"
        >
          <Plus className="w-4 h-4" />
          Crear Presupuesto
        </button>
      </div>

      {/* Summary Card */}
      <div className="bg-blue-700 text-white rounded-xl p-6">
        <div className="grid grid-cols-3 gap-4 mb-5">
          <div>
            <p className="text-blue-200 text-xs mb-1">Presupuesto Total</p>
            <p className="text-2xl font-bold">${totalBudget.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-blue-200 text-xs mb-1">Total Gastado</p>
            <p className="text-2xl font-bold">${totalSpent.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-blue-200 text-xs mb-1">Restante</p>
            <p className="text-2xl font-bold">${totalRemaining.toLocaleString()}</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs text-blue-200 mb-1.5">
            <span>Progreso General</span>
            <span>{overallProgress.toFixed(1)}%</span>
          </div>
          <div className="h-2 bg-blue-600 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Budget Grid */}
      <div className="grid grid-cols-2 gap-4">
        {budgets.map((budget) => {
          const pct = (budget.spent / budget.total) * 100
          const isOver = budget.status === 'over'
          const isWarning = budget.status === 'warning'
          const remaining = budget.total - budget.spent

          return (
            <div key={budget.name} className="bg-white rounded-xl p-5">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: budget.color }}
                    />
                    <span className="font-semibold text-slate-800 text-sm">{budget.name}</span>
                  </div>
                  <p className="text-slate-500 text-xs mt-0.5 ml-4.5">
                    ${budget.spent} / ${budget.total}
                  </p>
                </div>
                <button className="text-blue-400 hover:text-blue-600 transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${Math.min(pct, 100)}%`,
                    backgroundColor: isOver ? '#ef4444' : isWarning ? '#f59e0b' : '#22c55e',
                  }}
                />
              </div>

              {/* Status Badge */}
              <div
                className={`flex items-center gap-1.5 text-xs px-2 py-1.5 rounded-lg mb-2 ${
                  isOver
                    ? 'bg-red-50 text-red-500'
                    : isWarning
                    ? 'bg-amber-50 text-amber-600'
                    : 'bg-green-50 text-green-600'
                }`}
              >
                {isOver ? (
                  <>
                    <AlertTriangle className="w-3 h-3" />
                    Sobre presupuesto por ${Math.abs(remaining).toFixed(2)}
                  </>
                ) : isWarning ? (
                  <>
                    <AlertTriangle className="w-3 h-3" />
                    {((remaining / budget.total) * 100).toFixed(0)}% restante (${remaining.toFixed(2)})
                  </>
                ) : (
                  <>
                    <TrendingDown className="w-3 h-3" />
                    En camino • ${remaining.toFixed(2)} restante
                  </>
                )}
              </div>

              <div className="flex justify-between text-xs text-slate-500">
                <span>Progreso</span>
                <span
                  className={
                    isOver
                      ? 'text-red-500 font-semibold'
                      : isWarning
                      ? 'text-amber-500 font-semibold'
                      : 'text-green-600 font-semibold'
                  }
                >
                  {pct.toFixed(1)}%
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-lg font-semibold text-slate-800">Crear Nuevo Presupuesto</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Nombre de Categoría
                </label>
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Ej., Servicios, Suscripciones"
                  className="w-full px-4 py-3 bg-slate-100 rounded-lg text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Presupuesto Mensual
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
                  <input
                    type="number"
                    value={newAmount}
                    onChange={(e) => setNewAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-3 bg-slate-100 rounded-lg text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-2.5 border border-slate-200 rounded-lg text-slate-600 font-medium hover:bg-slate-50 transition-colors text-sm"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors text-sm"
                >
                  Crear Presupuesto
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
