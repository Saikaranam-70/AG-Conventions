import { AppHeader } from "@/components/app/header";
import { AppFooter } from "@/components/app/footer";
import { HallShowcase } from "@/components/app/hall-showcase";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function VenuesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-1">
        <section className="py-12 md:py-20 bg-secondary text-center">
            <div className="container">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Venues</h1>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                    From intimate gatherings to grand celebrations, find the perfect space for any occasion.
                </p>
            </div>
        </section>
        
        <HallShowcase />

        <section className="py-16 md:py-24 border-t border-border">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to See More?</h2>
            <p className="text-muted-foreground text-lg mt-4 mb-8 max-w-2xl mx-auto">
              Explore our gallery for inspiration or contact us to schedule a personalized tour of our facilities.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/gallery">View Gallery</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Schedule a Tour</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  );
}
