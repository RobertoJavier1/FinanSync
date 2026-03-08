'use client'

import { useState } from 'react'
import { User, Bell, Shield, Palette, DollarSign, Trash2 } from 'lucide-react'

const tabs = [
  { id: 'perfil', label: 'Perfil', icon: User },
  { id: 'notificaciones', label: 'Notificaciones', icon: Bell },
  { id: 'seguridad', label: 'Seguridad', icon: Shield },
  { id: 'apariencia', label: 'Apariencia', icon: Palette },
  { id: 'finanzas', label: 'Finanzas', icon: DollarSign },
]

export default function ConfiguracionPage() {
  const [activeTab, setActiveTab] = useState('perfil')
  const [nombre, setNombre] = useState('Roberto García')
  const [email, setEmail] = useState('roberto@email.com')
  const [moneda, setMoneda] = useState('MXN')
  const [tema, setTema] = useState('claro')
  const [notifPresupuesto, setNotifPresupuesto] = useState(true)
  const [notifMetas, setNotifMetas] = useState(true)
  const [notifIA, setNotifIA] = useState(true)
  const [categorias, setCategorias] = useState(['Alimentación', 'Transporte', 'Entretenimiento', 'Salud', 'Educación', 'Vivienda', 'Ropa'])
  const [nuevaCategoria, setNuevaCategoria] = useState('')
  const [agregandoCategoria, setAgregandoCategoria] = useState(false)

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Configuración</h1>
        <p className="text-slate-500 text-sm mt-1">Administra tu cuenta y preferencias</p>
      </div>

      <div className="flex gap-6">
        {/* Sidebar tabs */}
        <div className="w-48 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm p-2 space-y-0.5">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-green-500 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">

          {/* Perfil */}
          {activeTab === 'perfil' && (
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              <h2 className="text-lg font-semibold text-slate-800">Información personal</h2>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-100 rounded-lg text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-100 rounded-lg text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
                  Guardar cambios
                </button>
              </div>

              {/* Zona peligrosa */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-sm font-semibold text-red-500 mb-3">Zona peligrosa</h3>
                <button className="flex items-center gap-2 text-sm text-red-500 border border-red-200 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                  Eliminar cuenta
                </button>
              </div>
            </div>
          )}

          {/* Notificaciones */}
          {activeTab === 'notificaciones' && (
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              <h2 className="text-lg font-semibold text-slate-800">Notificaciones</h2>
              <p className="text-sm text-slate-500">Elige qué alertas quieres recibir.</p>

              <div className="space-y-4">
                {[
                  { label: 'Alertas de presupuesto', desc: 'Aviso cuando te acercas al límite de un presupuesto', value: notifPresupuesto, set: setNotifPresupuesto },
                  { label: 'Progreso de metas', desc: 'Actualizaciones sobre el avance de tus metas de ahorro', value: notifMetas, set: setNotifMetas },
                  { label: 'Recomendaciones IA', desc: 'Sugerencias personalizadas de Perspectivas IA', value: notifIA, set: setNotifIA },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                    <div>
                      <p className="text-sm font-medium text-slate-700">{item.label}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                    <button
                      onClick={() => item.set(!item.value)}
                      className={`w-11 h-6 rounded-full transition-colors relative ${item.value ? 'bg-green-500' : 'bg-slate-200'}`}
                    >
                      <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${item.value ? 'translate-x-5' : 'translate-x-0.5'}`} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
                  Guardar cambios
                </button>
              </div>
            </div>
          )}

          {/* Seguridad */}
          {activeTab === 'seguridad' && (
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              <h2 className="text-lg font-semibold text-slate-800">Seguridad</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Contraseña actual
                  </label>
                  <input
                    type="password"
                    placeholder="Ingresa tu contraseña actual"
                    className="w-full px-4 py-2.5 bg-slate-100 rounded-lg text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Nueva contraseña
                  </label>
                  <input
                    type="password"
                    placeholder="Crea una nueva contraseña"
                    className="w-full px-4 py-2.5 bg-slate-100 rounded-lg text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Confirmar nueva contraseña
                  </label>
                  <input
                    type="password"
                    placeholder="Repite la nueva contraseña"
                    className="w-full px-4 py-2.5 bg-slate-100 rounded-lg text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
                  Cambiar contraseña
                </button>
              </div>

            </div>
          )}

          {/* Apariencia */}
          {activeTab === 'apariencia' && (
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              <h2 className="text-lg font-semibold text-slate-800">Apariencia</h2>

              <div>
                <p className="text-sm font-medium text-slate-700 mb-3">Tema</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'claro', label: 'Claro', bg: 'bg-white border-2', preview: 'bg-slate-100' },
                    { id: 'oscuro', label: 'Oscuro', bg: 'bg-slate-800 border-2', preview: 'bg-slate-700' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTema(t.id)}
                      className={`rounded-xl p-3 text-center border-2 transition-all ${
                        tema === t.id ? 'border-green-500' : 'border-slate-200'
                      }`}
                    >
                      <div className={`w-full h-14 rounded-lg mb-2 ${t.preview}`} />
                      <p className="text-xs font-medium text-slate-700">{t.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
                  Guardar cambios
                </button>
              </div>
            </div>
          )}

          {/* Finanzas */}
          {activeTab === 'finanzas' && (
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              <h2 className="text-lg font-semibold text-slate-800">Preferencias financieras</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Moneda principal
                  </label>
                  <select
                    value={moneda}
                    onChange={(e) => setMoneda(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-100 rounded-lg text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="MXN">MXN — Peso mexicano</option>
                    <option value="USD">USD — Dólar estadounidense</option>
                    <option value="EUR">EUR — Euro</option>
                    <option value="GTQ">GTQ — Quetzal</option>
                    <option value="COP">COP — Peso colombiano</option>
                    <option value="ARS">ARS — Peso argentino</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Día de inicio del mes financiero
                  </label>
                  <select className="w-full px-4 py-2.5 bg-slate-100 rounded-lg text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                    {[1, 5, 10, 15, 20, 25].map((d) => (
                      <option key={d} value={d}>Día {d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Categorías de gasto predeterminadas
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categorias.map((cat) => (
                      <span key={cat} className="flex items-center gap-1 bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full">
                        {cat}
                        <button
                          onClick={() => setCategorias(categorias.filter(c => c !== cat))}
                          className="ml-1 text-slate-400 hover:text-red-500 transition-colors leading-none"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                    {agregandoCategoria ? (
                      <div className="flex items-center gap-1">
                        <input
                          type="text"
                          value={nuevaCategoria}
                          onChange={(e) => setNuevaCategoria(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && nuevaCategoria.trim()) {
                              setCategorias([...categorias, nuevaCategoria.trim()])
                              setNuevaCategoria('')
                              setAgregandoCategoria(false)
                            }
                            if (e.key === 'Escape') {
                              setNuevaCategoria('')
                              setAgregandoCategoria(false)
                            }
                          }}
                          autoFocus
                          placeholder="Nombre..."
                          className="text-xs px-3 py-1.5 border border-green-300 rounded-full outline-none focus:ring-2 focus:ring-green-300 w-28"
                        />
                        <button
                          onClick={() => {
                            if (nuevaCategoria.trim()) {
                              setCategorias([...categorias, nuevaCategoria.trim()])
                              setNuevaCategoria('')
                              setAgregandoCategoria(false)
                            }
                          }}
                          className="text-xs bg-green-500 text-white px-2.5 py-1.5 rounded-full hover:bg-green-600 transition-colors"
                        >
                          OK
                        </button>
                        <button
                          onClick={() => { setNuevaCategoria(''); setAgregandoCategoria(false) }}
                          className="text-xs text-slate-400 hover:text-slate-600 px-1"
                        >
                          ×
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setAgregandoCategoria(true)}
                        className="bg-green-50 text-green-600 text-xs font-medium px-3 py-1.5 rounded-full border border-green-200 hover:bg-green-100 transition-colors"
                      >
                        + Agregar
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
                  Guardar cambios
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
