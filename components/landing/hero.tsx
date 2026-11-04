import { Badge } from '@/components/ui/badge'
import { CtaLink } from './cta-link'
import { ProtocolCard } from './protocol-card'

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="px-5 pt-16 pb-20 sm:px-8 md:pt-24 md:pb-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <Badge
          variant="outline"
          className="h-auto gap-2 rounded-full border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700"
        >
          <span className="size-1.5 rounded-full bg-blue-700" aria-hidden="true" />
          {'Модуль 1 · готов к внедрению'}
        </Badge>

        <h1
          id="hero-heading"
          className="mt-8 max-w-5xl text-5xl leading-[1.02] font-bold tracking-tighter text-balance text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Вы сказали. <em className="font-bold text-blue-700">Записано.</em> Принято к исполнению.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-pretty text-slate-600 sm:text-xl">
          Утром собрали совещание, к обеду половина забыла, через неделю слышите: «мы вроде не так
          договаривались». ИИ садится на каждое совещание и выдаёт протокол, где нет слова
          «обсудили».
        </p>

        <div className="mt-10 w-full sm:w-auto">
          <CtaLink>Обсудить внедрение</CtaLink>
        </div>

        <div className="mt-20 w-full md:mt-24">
          <ProtocolCard />
        </div>
      </div>
    </section>
  )
}
