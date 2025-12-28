import Image from "next/image";
import { AppHeader } from "@/components/app/header";
import { AppFooter } from "@/components/app/footer";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Award, Building, Calendar, Users } from "lucide-react";

const aboutImage = PlaceHolderImages.find(p => p.id === 'hall-rani');
const missionImage = PlaceHolderImages.find(p => p.id === 'hall-samrat');

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-secondary">
          {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              fill
              className="object-cover"
              data-ai-hint={aboutImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline">About AG Conventions</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl">Pioneering Memorable Events with Elegance and Excellence</p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Story</h2>
                <p className="text-muted-foreground">
                  Founded in 2010, Bharat Convention Center was born from a vision to create a world-class event destination in the heart of India. We set out to build more than just a venue; we aimed to create a landmark of architectural brilliance and unparalleled service.
                </p>
                <p className="text-muted-foreground">
                  Over the years, we have grown into one of the most prestigious convention centers in the nation, known for our commitment to excellence, innovation, and creating truly unforgettable experiences for our clients and their guests.
                </p>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                {missionImage && (
                  <Image
                    src={missionImage.imageUrl}
                    alt={missionImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={missionImage.imageHint}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 text-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-headline">Our Mission</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  To provide an exceptional and inspiring environment for every event, combining state-of-the-art facilities with a dedicated team of professionals who are passionate about bringing our clients' visions to life.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-headline">Our Vision</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  To be the undisputed leader in the events industry, continuously setting new standards for quality, creativity, and customer satisfaction, and to be a catalyst for connection and celebration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Team */}
        <section className="py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-12">Meet Our Leadership</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Add team members here */}
              <div className="text-center">
                <div className="relative h-32 w-32 rounded-full mx-auto mb-4 overflow-hidden bg-muted">
                   <Image src="https://picsum.photos/seed/tm1/200/200" alt="Team member 1" fill data-ai-hint="portrait man" />
                </div>
                <h4 className="font-bold">Rohan Verma</h4>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
              </div>
              <div className="text-center">
                 <div className="relative h-32 w-32 rounded-full mx-auto mb-4 overflow-hidden bg-muted">
                   <Image src="https://picsum.photos/seed/tw1/200/200" alt="Team member 2" fill data-ai-hint="portrait woman"/>
                </div>
                <h4 className="font-bold">Priya Sharma</h4>
                <p className="text-sm text-muted-foreground">Director of Events</p>
              </div>
               <div className="text-center">
                 <div className="relative h-32 w-32 rounded-full mx-auto mb-4 overflow-hidden bg-muted">
                   <Image src="https://picsum.photos/seed/tm2/200/200" alt="Team member 3" fill data-ai-hint="portrait man" />
                </div>
                <h4 className="font-bold">Sameer Khan</h4>
                <p className="text-sm text-muted-foreground">Head of Operations</p>
              </div>
               <div className="text-center">
                 <div className="relative h-32 w-32 rounded-full mx-auto mb-4 overflow-hidden bg-muted">
                   <Image src="https://picsum.photos/seed/tw2/200/200" alt="Team member 4" fill data-ai-hint="portrait woman" />
                </div>
                <h4 className="font-bold">Anika Desai</h4>
                <p className="text-sm text-muted-foreground">Chief Marketing Officer</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <AppFooter />
    </div>
  );
}
