import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer id="contato" className="border-t border-[#e0ecec] bg-white px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-[#d9f1f2]">
            <Image src="/medical-heart.png" alt="" width={26} height={26} className="size-[26px] object-contain" />
          </span>
          <span className="font-serif text-lg font-semibold">
            Dr. André<span className="text-[#0e8b91]">.</span>
          </span>
        </div>
        <p className="text-sm text-[#83999d]">Rua das Acácias, 120 · Jardins, São Paulo — SP</p>
        <p className="text-xs text-[#a0b2b5]">© 2024 Dr. André Almeida</p>
      </div>
    </footer>
  )
}
