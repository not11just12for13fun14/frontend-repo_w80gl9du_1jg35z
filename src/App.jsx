import Hero from './components/Hero'
import Features from './components/Features'
import Outcomes from './components/Outcomes'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">Икономическа информация</a>
          <div className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
            <a href="#program" className="hover:text-slate-900">Дисциплини</a>
            <a href="#apply" className="hover:text-slate-900">Кандидатстване</a>
            <a href="/test" className="hover:text-slate-900">Тест</a>
          </div>
        </div>
      </nav>

      <Hero />
      <Features />
      <Outcomes />
      <CTA />

      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Специалност „Икономическа информация“</p>
          <div className="flex items-center gap-4">
            <a href="#program" className="hover:text-slate-700">Програма</a>
            <a href="#apply" className="hover:text-slate-700">Контакт</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
