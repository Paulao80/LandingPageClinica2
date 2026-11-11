import Image from 'next/image'
import { ArrowUpRight, ShieldCheck, Stethoscope } from 'lucide-react'

import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: null,
    title: 'Clínica geral',
    text: 'Cuidado completo para todas as fases da vida, com escuta e acompanhamento próximo.',
  },
  {
    icon: Stethoscope,
    title: 'Check-up preventivo',
    text: 'Avaliações personalizadas para prevenir doenças e manter sua saúde em dia.',
  },
  {
    icon: ShieldCheck,
    title: 'Saúde da família',
    text: 'Orientação para hábitos saudáveis, tratamentos e qualidade de vida para sua família.',
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-[#edf7f6] px-6 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#0e8b91]">Como posso ajudar</p>
            <h2 className="font-serif text-4xl tracking-tight text-[#163b45] sm:text-5xl">
              Cuidado completo para
              <br className="hidden sm:block" /> todas as fases da vida.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#6a8287]">
            Um olhar atento para cuidar do que realmente importa: você.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, index) => (
            <Reveal
              as="article"
              key={title}
              delay={index * 120}
              className={`rounded-3xl p-8 ${index === 1 ? 'bg-[#0e7983] text-white shadow-xl shadow-[#0e7983]/15' : 'bg-white text-[#163b45]'}`}
            >
              <span
                className={`mb-10 grid size-14 place-items-center rounded-2xl ${index === 1 ? 'bg-white/15 text-white' : 'bg-[#e4f3f2] text-[#0e8b91]'}`}
              >
                {Icon ? (
                  <Icon size={25} strokeWidth={1.7} />
                ) : (
                  <Image src="/medical-heart.png" alt="" width={32} height={32} className="size-8 object-contain" />
                )}
              </span>
              <h3 className="font-serif text-2xl">{title}</h3>
              <p className={`mt-4 text-sm leading-7 ${index === 1 ? 'text-white/75' : 'text-[#6a8287]'}`}>{text}</p>
              <a
                href="#agendamento"
                className={`mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${index === 1 ? 'text-white' : 'text-[#0e7983]'}`}
              >
                Saiba mais <ArrowUpRight size={15} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
