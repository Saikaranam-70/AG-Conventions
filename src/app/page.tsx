import { AppHeader } from '@/components/app/header';
import { Hero } from '@/components/app/hero';
import { HallShowcase } from '@/components/app/hall-showcase';
import { VirtualTour } from '@/components/app/virtual-tour';
import { BookingSection } from '@/components/app/booking-section';
import { Testimonials } from '@/components/app/testimonials';
import { Inquiry } from '@/components/app/inquiry';
import { AppFooter } from '@/components/app/footer';
import { Stats } from '@/components/app/stats';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-1">
        <Hero />
        <Stats />
        <HallShowcase />
        <VirtualTour />
        <Testimonials />
        <BookingSection />
        <Inquiry />
      </main>
      <AppFooter />
    </div>
  );
}
