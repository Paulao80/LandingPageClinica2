import Image from 'next/image'
import { ArrowUpRight, Menu } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Dr. André Almeida - início">
          <span className="grid size-11 place-items-center rounded-full bg-[#d9f1f2]">
            <Image src="/medical-heart.png" alt="" width={30} height={30} className="size-[30px] object-contain" />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-[#163b45]">
            Dr. André<span className="text-[#0e8b91]">.</span>
          </span>
        </a>
        <nav
          className="hidden items-center gap-8 text-sm font-medium text-[#47636a] lg:flex"
          aria-label="Navegação principal"
        >
          <a href="#sobre" className="transition-colors hover:text-[#0e8b91]">
            Sobre mim
          </a>
          <a href="#servicos" className="transition-colors hover:text-[#0e8b91]">
            Especialidades
          </a>
          <a href="#depoimentos" className="transition-colors hover:text-[#0e8b91]">
            Depoimentos
          </a>
          <a href="#contato" className="transition-colors hover:text-[#0e8b91]">
            Contato
          </a>
        </nav>
        <a
          href="#agendamento"
          className="hidden items-center gap-2 rounded-full bg-[#0e7983] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0e7983]/15 transition-transform hover:-translate-y-0.5 sm:flex"
        >
          Agendar consulta <ArrowUpRight size={16} />
        </a>
        <button className="rounded-full border border-[#d4e4e6] p-3 text-[#0e7983] sm:hidden" aria-label="Abrir menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}
