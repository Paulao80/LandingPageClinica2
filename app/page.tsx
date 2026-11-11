import { AboutSection } from '@/components/about-section'
import { AppointmentSection } from '@/components/appointment-section'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TestimonialsSection } from '@/components/testimonials-section'
import { TrustBarSection } from '@/components/trust-bar-section'

export default function Page() {
  return (
    <main className="overflow-hidden bg-[#f8fbfc] text-[#163b45]">
      <SiteHeader />
      <HeroSection />
      <TrustBarSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <AppointmentSection />
      <SiteFooter />
    </main>
  )
}
