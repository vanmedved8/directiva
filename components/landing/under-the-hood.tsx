import { Section } from './section'

export function UnderTheHood() {
  return (
    <Section
      id="under-the-hood"
      index="Под капотом"
      title="Протокол — это лишь то, что видно снаружи"
      className="bg-white [&_h2]:font-bold [&_h2]:text-slate-900"
    >
      <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-slate-700 md:text-xl">
        <p>
          Пока Модуль 1 наводит дисциплину, система уже копит данные о том, как фирма живёт на самом деле:
          где отделы грызутся, где рвутся цепочки, где настоящие пробки и где утекают деньги.
        </p>

        <p>
          Вам докладывают красивое.{' '}
          <strong className="font-semibold text-slate-900">Система видит как есть.</strong>
        </p>

        <p>
          Когда данных достаточно — следующие модули встают не «куда-нибудь», а туда,
          где сразу принесут деньги. Автоматизировать всё подряд мы не будем.
        </p>
      </div>
    </Section>
  )
}
