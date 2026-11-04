import { TELEGRAM_URL } from './cta-link'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-slate-50/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-2.5" aria-label="Директива, на главную">
          <span className="flex size-7 items-center justify-center rounded-sm bg-slate-900 font-mono text-sm font-bold text-white">
            Д
          </span>
          <span className="text-base font-bold tracking-tight text-slate-900">Директива</span>
        </a>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
        >
          Связаться
        </a>
      </div>
    </header>
  )
}
