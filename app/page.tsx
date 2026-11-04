import { SiteHeader } from '@/components/landing/site-header'
import { Hero } from '@/components/landing/hero'
import { Steps } from '@/components/landing/steps'
import { Result } from '@/components/landing/result'
import { UnderTheHood } from '@/components/landing/under-the-hood'
import { DataSecurity } from '@/components/landing/data-security'
import { Modules } from '@/components/landing/modules'
import { Limitations } from '@/components/landing/limitations'
import { Faq } from '@/components/landing/faq'
import { FinalCta } from '@/components/landing/final-cta'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="bg-slate-50 text-slate-900">
        <Hero />
        <Steps />
        <Result />
        <UnderTheHood />
        <DataSecurity />
        <Modules />
        <Limitations />
        <Faq />
        <FinalCta />
      </main>
      <footer className="border-t border-slate-200 bg-slate-50 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <span className="font-semibold text-slate-900">Директива</span>
          <span>Система управленческого контроля (с) Михаил Алексеев +79153987030 </span>
        </div>
      </footer>
    </>
  )
}
