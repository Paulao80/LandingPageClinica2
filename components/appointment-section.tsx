import { ArrowUpRight, Clock3, Phone } from 'lucide-react'

import { Reveal } from '@/components/reveal'

export function AppointmentSection() {
  return (
    <section id="agendamento" className="px-6 pb-24 lg:px-10 lg:pb-32">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[32px] bg-[#163b45] lg:grid-cols-[1fr_0.85fr]">
        <Reveal variant="fade-left" className="relative p-9 sm:p-14 lg:p-16">
          <div className="absolute -right-16 -top-24 size-64 rounded-full border-[45px] border-white/5" />
          <p className="relative mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#8ed0ce]">
            Agende sua consulta
          </p>
          <h2 className="relative max-w-md font-serif text-4xl leading-tight text-white sm:text-5xl">
            Um primeiro passo para cuidar de você.
          </h2>
          <p className="relative mt-6 max-w-md leading-7 text-white/65">
            Preencha o formulário e nossa equipe entrará em contato para encontrar o melhor horário.
          </p>
          <div className="relative mt-9 flex flex-wrap gap-5 text-sm text-white/75">
            <span className="flex items-center gap-2">
              <Phone size={16} className="text-[#8ed0ce]" /> (11) 3456-7890
            </span>
            <span className="flex items-center gap-2">
              <Clock3 size={16} className="text-[#8ed0ce]" /> Seg a sex, 8h–18h
            </span>
          </div>
        </Reveal>
        <Reveal
          as="form"
          variant="fade-right"
          delay={120}
          className="bg-white p-9 sm:p-14 lg:p-12"
        >
          <label className="mb-5 block text-sm font-semibold text-[#365961]">
            Como podemos chamar você?
            <input
              required
              type="text"
              placeholder="Seu nome"
              className="mt-2 w-full rounded-xl border border-[#dce8e8] bg-[#fbfdfd] px-4 py-3.5 text-sm outline-none transition focus:border-[#0e8b91] focus:ring-2 focus:ring-[#0e8b91]/15"
            />
          </label>
          <label className="mb-5 block text-sm font-semibold text-[#365961]">
            Seu melhor telefone
            <input
              required
              type="tel"
              placeholder="(00) 00000-0000"
              className="mt-2 w-full rounded-xl border border-[#dce8e8] bg-[#fbfdfd] px-4 py-3.5 text-sm outline-none transition focus:border-[#0e8b91] focus:ring-2 focus:ring-[#0e8b91]/15"
            />
          </label>
          <label className="mb-6 block text-sm font-semibold text-[#365961]">
            O que você precisa?
            <select className="mt-2 w-full rounded-xl border border-[#dce8e8] bg-[#fbfdfd] px-4 py-3.5 text-sm text-[#6a8287] outline-none focus:border-[#0e8b91]">
              <option>Consulta clínica geral</option>
              <option>Check-up preventivo</option>
              <option>Telemedicina</option>
            </select>
          </label>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0e7983] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#0a6972]"
          >
            Solicitar agendamento <ArrowUpRight size={17} />
          </button>
        </Reveal>
      </div>
    </section>
  )
}
