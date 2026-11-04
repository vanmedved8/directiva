import { CtaLink } from './cta-link'

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="border-t border-slate-200 bg-white px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2
          id="final-cta-heading"
          className="text-4xl font-bold tracking-tighter text-balance text-slate-900 sm:text-5xl md:text-6xl"
        >
          Торговаться о том, делать или нет, больше никто не будет
        </h2>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <CtaLink>Обсудить внедрение</CtaLink>
          <CtaLink variant="secondary">Бесплатный разбор совещания</CtaLink>
        </div>
      </div>
    </section>
  )
}
