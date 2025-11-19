function CTA() {
  return (
    <section id="apply" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Готов ли си да започнеш?</h2>
        <p className="mt-3 text-slate-600">Свържи се с нас за повече информация относно приема, учебния план и кариерните възможности.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="mailto:admissions@example.edu" className="px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto">Пиши ни</a>
          <a href="#program" className="px-5 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors w-full sm:w-auto">Учебен план</a>
        </div>
      </div>
    </section>
  )
}

export default CTA
