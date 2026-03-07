'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, Check } from 'lucide-react'

export default function AgregarTransaccionPage() {
  const [type, setType] = useState<'gasto' | 'ingreso'>('gasto')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('07/03/2026')
  const [description, setDescription] = useState('')

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Link href="/transacciones">
          <button className="text-slate-600 hover:text-slate-800 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
        </Link>
        <h1 className="text-2xl font-bold text-slate-800">Agregar Transacción</h1>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 space-y-6">
        {/* Type Toggle */}
        <div>
          <p className="text-sm font-medium text-slate-700 mb-2">Tipo de Transacción</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setType('gasto')}
              className={`py-3 rounded-lg font-semibold text-sm border-2 transition-colors ${
                type === 'gasto'
                  ? 'border-red-400 bg-red-50 text-red-500'
                  : 'border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              Gasto
            </button>
            <button
              onClick={() => setType('ingreso')}
              className={`py-3 rounded-lg font-semibold text-sm border-2 transition-colors ${
                type === 'ingreso'
                  ? 'border-green-400 bg-green-50 text-green-600'
                  : 'border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              Ingreso
            </button>
          </div>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Monto *</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full pl-8 pr-4 py-3 bg-slate-100 rounded-lg text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-green-500 text-sm"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Categoría *</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 bg-slate-100 rounded-lg text-slate-600 outline-none focus:ring-2 focus:ring-green-500 cursor-pointer text-sm"
          >
            <option value="">Selecciona una categoría</option>
            <option value="vivienda">Vivienda</option>
            <option value="comida">Comida</option>
            <option value="transporte">Transporte</option>
            <option value="entretenimiento">Entretenimiento</option>
            <option value="compras">Compras</option>
            <option value="salario">Salario</option>
            <option value="freelance">Freelance</option>
            <option value="salud">Salud</option>
            <option value="educacion">Educación</option>
            <option value="otros">Otros</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Fecha *</label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 bg-slate-100 rounded-lg text-slate-700 outline-none focus:ring-2 focus:ring-green-500 text-sm"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Descripción (Opcional)
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Agrega una nota..."
            rows={3}
            className="w-full px-4 py-3 bg-slate-100 rounded-lg text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-green-500 resize-none text-sm"
          />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <Link href="/transacciones">
            <button className="w-full py-3 border border-slate-200 rounded-lg text-slate-600 font-medium hover:bg-slate-50 transition-colors text-sm">
              Cancelar
            </button>
          </Link>
          <Link href="/transacciones">
            <button className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors text-sm">
              <Check className="w-4 h-4" />
              Guardar Transacción
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
