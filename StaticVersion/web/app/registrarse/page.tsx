'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DollarSign } from 'lucide-react'

export default function RegisterPage() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmar, setConfirmar] = useState('')

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-md">
          <DollarSign className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-slate-800">FinanSync</h1>
        <p className="text-slate-500 mt-1 text-sm">Sincroniza tus finanzas, sincroniza tu vida</p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Crear cuenta</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Nombre completo
          </label>
          <input
            type="text"
            placeholder="Ingresa tu nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full px-4 py-3 bg-slate-100 rounded-lg text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Correo Electrónico
          </label>
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-slate-100 rounded-lg text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Contraseña
          </label>
          <input
            type="password"
            placeholder="Crea una contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-slate-100 rounded-lg text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Confirmar contraseña
          </label>
          <input
            type="password"
            placeholder="Repite tu contraseña"
            value={confirmar}
            onChange={(e) => setConfirmar(e.target.value)}
            className="w-full px-4 py-3 bg-slate-100 rounded-lg text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        <Link href="/dashboard">
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors text-sm">
            Crear cuenta
          </button>
        </Link>

        <p className="text-center mt-4 text-slate-500 text-sm">
          ¿Ya tienes una cuenta?{' '}
          <Link href="/" className="text-blue-600 font-semibold hover:underline">
            Inicia sesión aquí
          </Link>
        </p>
      </div>

      <p className="mt-4 text-slate-400 text-xs">
        Demo: El registro redirige directamente al dashboard
      </p>
    </div>
  )
}
