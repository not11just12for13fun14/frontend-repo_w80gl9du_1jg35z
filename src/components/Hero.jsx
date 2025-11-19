import { GraduationCap, BarChart3, Database } from 'lucide-react'

function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-50 bg-[radial-gradient(60rem_60rem_at_80%_-10%,#93c5fd_10%,transparent_40%),radial-gradient(50rem_50rem_at_20%_-20%,#c7d2fe_10%,transparent_40%)]" />
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm text-blue-700/80 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 mb-6">
            <GraduationCap size={16} /> Специалност
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            Икономическа информация
          </h1>
          <p className="mt-5 text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
            Минималистичен уебсайт, представящ специалността, ключовите дисциплини и възможностите за реализация в съвременната икономика на данните.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#apply" className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">Кандидатствай</a>
            <a href="#program" className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors">Виж дисциплини</a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-6 text-slate-600">
            <div className="flex items-center gap-2"><BarChart3 size={18} /> Анализ на данни</div>
            <div className="flex items-center gap-2"><Database size={18} /> Информационни системи</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
