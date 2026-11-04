import { Section } from './section'

export function UnderTheHood() {
  return (
    <Section
      id="under-the-hood"
      index="Под капотом"
      title="Протокол это лишь то, что видно снаружи"
      className="bg-slate-900 [&_h2]:text-white [&_span]:text-slate-400"
    >
      <p className="max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
        Пока Модуль 1 наводит дисциплину, система копит данные о том, как фирма живёт на самом деле:
        где отделы грызутся, где рвутся цепочки, где настоящие пробки. Вам докладывают красивое.{' '}
        <strong className="font-semibold text-white">Система видит как есть.</strong> Когда данных
        достаточно, следующие модули встают туда, где сразу принесут деньги. Автоматизировать всё
        подряд мы не будем.
      </p>
    </Section>
  )
}
