'use client'

import { useState } from 'react'
import { Plus, Calendar, X } from 'lucide-react'

const goals = [
  {
    id: 1,
    name: 'Fondo de Emergencia',
    icon: '🐷',
    date: 'Dec 30, 2026',
    current: 6500,
    target: 10000,
    color: '#22c55e',
    days: 299,
  },
  {
    id: 2,
    name: 'Enganche de Casa',
    icon: '🏠',
    date: 'Jun 29, 2027',
    current: 15000,
    target: 50000,
    color: '#3b82f6',
    days: 480,
  },
  {
    id: 3,
    name: 'Vacaciones a Europa',
    icon: '✈️',
    date: 'Aug 14, 2026',
    current: 2800,
    target: 5000,
    color: '#a855f7',
    days: 161,
  },
  {
    id: 4,
    name: 'Auto Nuevo',
    icon: '🚗',
    date: 'Mar 30, 2027',
    current: 8000,
    target: 30000,
    color: '#f59e0b',
    days: 389,
  },
]

export default function MetasPage() {
  const [showModal, setShowModal] = useState(false)
  const [newName, setNewName] = useState('')
  const [newAmount, setNewAmount] = useState('')
  const [newDate, setNewDate] = useState('')

  const totalGoals = goals.reduce((sum, g) => sum + g.target, 0)
  const totalSaved = goals.reduce((sum, g) => sum + g.current, 0)
  const totalRemaining = totalGoals - totalSaved
  const overallProgress = (totalSaved / totalGoals) * 100

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Metas de Ahorro</h1>
          <p className="text-slate-500 text-sm mt-0.5">Rastrea tu progreso hacia tus metas financieras</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-medium transition-colors text-sm"
        >
          <Plus className="w-4 h-4" />
          Crear Meta
        </button>
      </div>

      {/* Summary */}
      <div className="bg-green-600 text-white rounded-xl p-6">
        <div className="grid grid-cols-3 gap-4 mb-5">
          <div>
            <p className="text-green-200 text-xs mb-1">Monto Total de Metas</p>
            <p className="text-2xl font-bold">${totalGoals.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-green-200 text-xs mb-1">Total Ahorrado</p>
            <p className="text-2xl font-bold">${totalSaved.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-green-200 text-xs mb-1">Restante</p>
            <p className="text-2xl font-bold">${totalRemaining.toLocaleString()}</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs text-green-200 mb-1.5">
            <span>Progreso General</span>
            <span>{overallProgress.toFixed(1)}%</span>
          </div>
          <div className="h-2 bg-green-500 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-2 gap-4">
        {goals.map((goal) => {
          const pct = (goal.current / goal.target) * 100
          const remaining = goal.target - goal.current
          const monthlyNeeded = Math.ceil(remaining / Math.ceil(goal.days / 30))

          return (
            <div key={goal.id} className="bg-white rounded-xl p-5">
              {/* Goal Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                  style={{ backgroundColor: `${goal.color}20` }}
                >
                  {goal.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 text-sm">{goal.name}</h3>
                  <div className="flex items-center gap-1 text-slate-400 text-xs mt-0.5">
                    <Calendar className="w-3 h-3" />
                    {goal.date}
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="flex justify-between text-xs text-slate-500 mb-1">
                <span>Progreso</span>
                <span>{pct.toFixed(1)}%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${pct}%`, backgroundColor: goal.color }}
                />
              </div>

              {/* Amounts */}
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <p className="text-slate-400 text-xs">Actual</p>
                  <p className="font-bold text-slate-800 text-sm">${goal.current.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Meta</p>
                  <p className="font-bold text-slate-800 text-sm">${goal.target.toLocaleString()}</p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-1.5 text-xs border-t border-slate-100 pt-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-slate-500">Restante</span>
                  <span className="text-slate-700 font-medium">${remaining.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Días hasta la fecha límite</span>
                  <span className="font-medium" style={{ color: goal.color }}>
                    {goal.days} días
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Promedio mensual necesario</span>
                  <span className="text-slate-700 font-medium">${monthlyNeeded.toLocaleString()}</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className="w-full py-2.5 text-white rounded-lg font-medium text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: goal.color }}
              >
                Agregar Contribución
              </button>
            </div>
          )
        })}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-lg font-semibold text-slate-800">Crear Meta de Ahorro</h3>
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
                  Nombre de la Meta
                </label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="ej., Vacaciones, Auto Nuevo"
                  className="w-full px-4 py-3 bg-slate-100 rounded-lg text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Monto Objetivo
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
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Fecha Límite
                </label>
                <input
                  type="text"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  placeholder="dd/mm/aaaa"
                  className="w-full px-4 py-3 bg-slate-100 rounded-lg text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
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
                  Crear Meta
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
