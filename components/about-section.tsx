import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

import { Reveal } from '@/components/reveal'

export function AboutSection() {
  return (
    <section id="sobre" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:px-10 lg:py-32">
      <Reveal variant="fade-left" className="relative mx-auto w-full max-w-md">
        <div className="absolute -left-5 -top-5 h-28 w-28 rounded-tl-[40px] border-l border-t border-[#86c8c8]" />
        <div className="relative aspect-[0.9] overflow-hidden rounded-[28px] bg-[#dceeed]">
          <Image src="/doctor-portrait.png" alt="Dr. André Almeida" fill className="object-cover object-center grayscale-[15%]" />
        </div>
        <div className="absolute -bottom-6 -right-5 rounded-2xl bg-[#0e7983] px-6 py-5 text-white shadow-xl">
          <p className="font-serif text-4xl">15</p>
          <p className="text-xs uppercase tracking-wider text-white/75">anos de experiência</p>
        </div>
      </Reveal>
      <Reveal variant="fade-right" delay={120} className="max-w-xl">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#0e8b91]">Sobre o doutor</p>
        <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#163b45] sm:text-5xl">
          Medicina próxima, feita para a sua vida.
        </h2>
        <p className="mt-6 leading-8 text-[#637b80]">
          Sou o Dr. André Almeida, médico clínico geral. Acredito que uma boa consulta começa antes do diagnóstico:
          começa na escuta, no cuidado e na construção de uma relação de confiança.
        </p>
        <p className="mt-4 leading-8 text-[#637b80]">
          Meu propósito é acompanhar cada pessoa de forma integral, respeitando sua história e tornando as escolhas
          para a sua saúde mais simples e conscientes.
        </p>
        <a
          href="#agendamento"
          className="mt-8 inline-flex items-center gap-2 border-b border-[#0e8b91] pb-2 text-sm font-bold text-[#0e7983]"
        >
          Vamos conversar <ArrowUpRight size={16} />
        </a>
      </Reveal>
    </section>
  )
}
