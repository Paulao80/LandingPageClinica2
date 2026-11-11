import { Check } from 'lucide-react'

const highlights = [
  'Atendimento humanizado',
  'CRM 123456 / RQE 78910',
  'Telemedicina disponível',
  'Convênios e particular',
]

export function TrustBarSection() {
  return (
    <section className="border-b border-[#e0ecec] bg-white py-7">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-5 px-6 text-sm text-[#6a8287] lg:justify-between lg:px-10">
        {highlights.map((item) => (
          <span key={item} className="flex items-center gap-2">
            <Check size={17} className="text-[#0e8b91]" /> {item}
          </span>
        ))}
      </div>
    </section>
  )
}
