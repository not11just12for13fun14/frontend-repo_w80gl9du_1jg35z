import { LineChart, Cpu, ShieldCheck, Calculator, Globe, Layers } from 'lucide-react'

const features = [
  {
    icon: LineChart,
    title: 'Бизнес аналитика',
    desc: 'Статистика, визуализация и вземане на решения на база данни.'
  },
  {
    icon: Cpu,
    title: 'Информационни системи',
    desc: 'Проектиране и поддръжка на системи за управление на данни.'
  },
  {
    icon: Calculator,
    title: 'Иконометрия',
    desc: 'Количествени методи за анализ на икономически процеси.'
  },
  {
    icon: Globe,
    title: 'Дигитална икономика',
    desc: 'Електронна търговия, финтех и платформи.'
  },
  {
    icon: Layers,
    title: 'Бази данни',
    desc: 'Моделиране, SQL и управление на данни.'
  },
  {
    icon: ShieldCheck,
    title: 'Сигурност на информацията',
    desc: 'Политики и практики за защита на данните.'
  }
]

function Features() {
  return (
    <section id="program" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Какво ще изучаваш</h2>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">Практична програма, комбинираща икономика, технологии и работа с данни.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <Icon className="text-blue-600" />
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
