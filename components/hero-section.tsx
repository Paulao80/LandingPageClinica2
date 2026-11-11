import Image from 'next/image'
import { ArrowUpRight, Clock3 } from 'lucide-react'

import { Reveal } from '@/components/reveal'

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[760px] bg-[#eaf6f7] pt-32 lg:min-h-[780px] lg:pt-40">
      <div className="pointer-events-none absolute -right-32 -top-32 size-[560px] rounded-full border-[70px] border-white/35" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_0.86fr] lg:px-10">
        <Reveal variant="fade-left" className="relative z-10 max-w-xl pb-10 lg:pb-24">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#0e8b91]">
            <span className="h-px w-9 bg-[#0e8b91]" /> Cuidado que acolhe
          </p>
          <h1 className="font-serif text-5xl font-medium leading-[1.04] tracking-[-0.035em] text-[#163b45] sm:text-6xl lg:text-[78px]">
            Sua saúde em boas mãos.
          </h1>
          <p className="mt-7 max-w-md text-lg leading-8 text-[#557078]">
            Medicina com tempo, escuta e um olhar completo para você. Porque cuidar também é criar confiança.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#agendamento"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0e7983] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-[#0e7983]/20 transition-transform hover:-translate-y-1"
            >
              Marcar uma consulta <ArrowUpRight size={17} />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded-full border border-[#bfd8da] px-7 py-4 text-sm font-semibold text-[#34616a] transition-colors hover:bg-white"
            >
              Conheça o consultório
            </a>
          </div>
          <div className="mt-12 flex items-center gap-5 border-t border-[#cce3e4] pt-6 text-sm text-[#557078]">
            <span className="flex -space-x-2">
              <span className="size-9 rounded-full border-2 border-[#eaf6f7] bg-[#f4c7ad]" />
              <span className="size-9 rounded-full border-2 border-[#eaf6f7] bg-[#bea991]" />
              <span className="size-9 rounded-full border-2 border-[#eaf6f7] bg-[#7c9e91]" />
            </span>
            <span>
              <strong className="text-[#163b45]">+2.000 pacientes</strong>
              <br />
              cuidando da saúde com tranquilidade
            </span>
          </div>
        </Reveal>
        <Reveal
          variant="fade-right"
          delay={120}
          className="relative mx-auto w-full max-w-[490px] self-end lg:mr-4"
        >
          <div className="absolute -bottom-7 -left-7 z-10 rounded-2xl bg-white p-5 shadow-xl shadow-[#2c6970]/10">
            <div className="mb-2 flex items-center gap-2 text-[#0e8b91]">
              <Clock3 size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">Atendimento</span>
            </div>
            <p className="font-serif text-xl text-[#163b45]">Com hora marcada</p>
          </div>
          <div className="relative aspect-[0.82] overflow-hidden rounded-t-[220px] rounded-b-3xl bg-[#cde8e8] shadow-2xl shadow-[#2a6870]/15">
            <Image
              src="/doctor-portrait.png"
              alt="Dr. André Almeida em seu consultório"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="absolute -right-9 top-20 size-24 rounded-full border border-white/80 bg-white/30" />
        </Reveal>
      </div>
    </section>
  )
}
