'use client'

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { ArrowRight, TrendingUp } from 'lucide-react'

const trendData = [
  { mes: 'Ene', gastos: 3000 },
  { mes: 'Feb', gastos: 3200 },
  { mes: 'Mar', gastos: 3100 },
  { mes: 'Abr', gastos: 3400 },
  { mes: 'May', gastos: 3300 },
  { mes: 'Jun', gastos: 3800 },
]

const comparisonData = [
  { categoria: 'Vivienda', actual: 1200 },
  { categoria: 'Comida', actual: 800 },
  { categoria: 'Transporte', actual: 400 },
  { categoria: 'Compras', actual: 700 },
  { categoria: 'Entretenimiento', actual: 120 },
]

const insights = [
  {
    id: 1,
    icon: '⚠️',
    iconBg: '#fef2f2',
    title: 'Alerta de Gastos en Compras',
    priority: 'Alto',
    priorityColor: 'bg-red-500 text-white',
    description:
      'Tus gastos de compras aumentaron un 40% este mes comparado con tu promedio. Considera revisar las compras recientes y establecer un presupuesto más estricto.',
  },
  {
    id: 2,
    icon: '📉',
    iconBg: '#f0fdf4',
    title: '¡Excelente Ahorro en Comida!',
    priority: 'Medio',
    priorityColor: 'bg-amber-400 text-white',
    description:
      'Gastaste un 12% menos en comida este mes. Tu estrategia de planificación de comidas está funcionando bien. ¡Sigue así!',
  },
  {
    id: 3,
    icon: '🎯',
    iconBg: '#eff6ff',
    title: 'Actualización de Progreso de Meta',
    priority: 'Medio',
    priorityColor: 'bg-amber-400 text-white',
    description:
      'A tu ritmo actual de ahorro, alcanzarás tu meta de Fondo de Emergencia 2 meses antes de lo planeado. Considera aumentar tu contribución al fondo de vacaciones.',
  },
  {
    id: 4,
    icon: '💡',
    iconBg: '#fefce8',
    title: 'Optimiza tu Presupuesto',
    priority: 'Alto',
    priorityColor: 'bg-red-500 text-white',
    description:
      'El análisis muestra que podrías ahorrar $200/mes adicionales reduciendo los gastos de entretenimiento en un 20% y redirigiéndolo a tus metas de ahorro.',
  },
  {
    id: 5,
    icon: '💵',
    iconBg: '#f5f3ff',
    title: 'Consistencia de Ingresos',
    priority: 'Bajo',
    priorityColor: 'bg-blue-500 text-white',
    description:
      'Tus ingresos han sido estables durante los últimos 6 meses. Este es un buen momento para aumentar tu contribución automática de ahorros en $100/mes.',
  },
  {
    id: 6,
    icon: '📅',
    iconBg: '#fef2f2',
    title: 'Recordatorio de Facturas Próximas',
    priority: 'Medio',
    priorityColor: 'bg-amber-400 text-white',
    description:
      'Basado en tu historial de transacciones, tienes facturas recurrentes por un total de $450 que vencen en los próximos 7 días. Asegura tener saldo suficiente.',
  },
]

const savingsRecommendations = [
  { title: 'Reducir Salidas a Comer', description: 'Cocina en casa 2 veces más por semana', saves: 150 },
  { title: 'Cambiar a Suscripciones Anuales', description: 'Ahorra en tarifas de suscripciones mensuales', saves: 75 },
  { title: 'Compartir Auto al Trabajo', description: 'Comparte viajes 3 días por semana', saves: 100 },
]

export default function PerspectivasIAPage() {
  const totalPotentialSavings = savingsRecommendations.reduce((sum, r) => sum + r.saves, 0)

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          ✨ Perspectivas Financieras IA
        </h1>
        <p className="text-slate-500 text-sm mt-0.5">Recomendaciones personalizadas impulsadas por análisis de IA</p>
      </div>

      {/* Health Score Card */}
      <div className="bg-green-600 text-white rounded-xl p-6">
        <p className="text-green-200 text-xs mb-2">Puntuación de Salud Financiera</p>
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-bold">82</span>
              <span className="text-green-200 text-lg">/100</span>
            </div>
            <p className="text-green-100 text-sm mt-1">Bueno • ¡Sigue mejorando!</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-green-200 text-sm justify-end">
              <TrendingUp className="w-4 h-4" />
              +5 pts este mes
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-green-500">
          <div className="text-center">
            <p className="text-green-200 text-xs mb-0.5">Gastos</p>
            <p className="font-bold text-lg">75/100</p>
          </div>
          <div className="text-center">
            <p className="text-green-200 text-xs mb-0.5">Ahorro</p>
            <p className="font-bold text-lg">88/100</p>
          </div>
          <div className="text-center">
            <p className="text-green-200 text-xs mb-0.5">Presupuesto</p>
            <p className="font-bold text-lg">85/100</p>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-4">
        {/* Trend Chart */}
        <div className="bg-white rounded-xl p-5">
          <h2 className="font-semibold text-slate-800 text-sm mb-4">Tendencia de Gastos de 6 Meses</h2>
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={trendData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="mes" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="gastos"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ fill: '#3b82f6', r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-xs text-slate-500 mt-3 leading-relaxed">
            Tus gastos han aumentado un 31% durante los{' '}
            <span className="text-blue-600">últimos 6 meses</span>. Enfócate en controlar los gastos discrecionales.
          </p>
        </div>

        {/* Comparison Chart */}
        <div className="bg-white rounded-xl p-5">
          <h2 className="font-semibold text-slate-800 text-sm mb-4">Gastos Actuales vs Promedio</h2>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={comparisonData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="categoria" tick={{ fontSize: 9, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="actual" fill="#64748b" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-slate-500 mt-3 leading-relaxed">
            Los gastos de compras están significativamente por encima de tu promedio. Revisa y ajusta.
          </p>
        </div>
      </div>

      {/* Personalized Insights */}
      <div>
        <h2 className="font-semibold text-slate-800 mb-4">Perspectivas Personalizadas</h2>
        <div className="grid grid-cols-2 gap-3">
          {insights.map((insight) => (
            <div key={insight.id} className="bg-white rounded-xl p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                    style={{ backgroundColor: insight.iconBg }}
                  >
                    {insight.icon}
                  </div>
                  <p className="font-semibold text-slate-800 text-xs leading-tight pt-1">{insight.title}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${insight.priorityColor}`}>
                  {insight.priority}
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed ml-11">{insight.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Savings Recommendations */}
      <div className="bg-white rounded-xl p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-slate-800">Recomendaciones de Ahorro</h2>
          <div className="text-right">
            <p className="text-xs text-slate-500">Ahorro Mensual Potencial</p>
            <p className="text-green-600 font-bold text-lg">${totalPotentialSavings}</p>
          </div>
        </div>
        <div className="space-y-3">
          {savingsRecommendations.map((rec) => (
            <div key={rec.title} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
              <div>
                <p className="font-medium text-slate-800 text-sm">{rec.title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{rec.description}</p>
              </div>
              <div className="flex items-center gap-3 ml-4">
                <div className="text-right">
                  <p className="text-xs text-slate-400">Ahorra</p>
                  <p className="text-green-600 font-bold text-sm">${rec.saves}</p>
                </div>
                <button className="w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors flex-shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
