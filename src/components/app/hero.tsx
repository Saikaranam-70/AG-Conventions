'use client';

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

export function Hero() {
  const scrollToBooking = () => {
    document.getElementById('halls')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-[70vh] md:h-[95vh] flex items-center justify-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-primary-foreground px-4">
        
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-headline tracking-tight">
            Experience Grandeur. Host Unforgettable Events.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
            Welcome to Bharat Convention Center, the premier destination for world-class conferences, exhibitions, and celebrations where your vision comes to life.
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <Button onClick={scrollToBooking} size="lg" className="text-lg py-7 px-6">
              Explore Venues
            </Button>
            <Button size="lg" variant="outline" className="text-lg py-7 px-6 bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Book a Tour <ArrowRight className="ml-2 h-5 w-5"/>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
