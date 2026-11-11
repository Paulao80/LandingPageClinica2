import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    quote:
      'O Dr. André nos acolheu desde a primeira consulta. Hoje toda a família se sente mais segura e bem cuidada.',
    name: 'Mariana Costa',
    role: 'Paciente há 4 anos',
  },
  {
    quote:
      'Uma consulta humana, sem pressa e com muita clareza. Recomendo para quem busca um médico de confiança.',
    name: 'Rafael Mendes',
    role: 'Paciente',
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.7fr_1fr] lg:items-center">
        <Reveal variant="fade-left">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#0e8b91]">Quem confia</p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#163b45] sm:text-5xl">
            Cuidar bem deixa marcas boas.
          </h2>
          <p className="mt-6 max-w-sm leading-7 text-[#6a8287]">
            Mais do que tratar sintomas, meu trabalho é ajudar você a viver com mais saúde e leveza.
          </p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal
              as="figure"
              key={item.name}
              variant="fade-right"
              delay={index * 120}
              className="rounded-3xl border border-[#e0ecec] bg-white p-7"
            >
              <div className="mb-6 text-3xl tracking-[0.12em] text-[#8ecaca]">“</div>
              <blockquote className="text-[15px] leading-7 text-[#4e6b71]">{item.quote}</blockquote>
              <figcaption className="mt-7 border-t border-[#edf2f2] pt-5">
                <p className="text-sm font-bold text-[#163b45]">{item.name}</p>
                <p className="mt-1 text-xs text-[#83999d]">{item.role}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
