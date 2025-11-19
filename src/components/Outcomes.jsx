const outcomes = [
  'Анализатор на данни / Business Intelligence',
  'Специалист по информационни системи',
  'Икономист в технологични компании',
  'Консултант по дигитална трансформация',
  'Продуктов анализатор и изследовател'
]

function Outcomes() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Реализация</h2>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">Професионални пътеки, по които нашите възпитаници продължават след дипломиране.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {outcomes.map((o) => (
            <div key={o} className="p-5 rounded-xl bg-white border border-slate-200">{o}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Outcomes
