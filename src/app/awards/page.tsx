import { AppHeader } from "@/components/app/header";
import { AppFooter } from "@/components/app/footer";
import { Award, Star } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const awardsImage = PlaceHolderImages.find(p => p.id === 'hall-maharaja');

const awardsList = [
    { year: 2023, title: "Best Convention Center in Asia", issuer: "International Event Awards" },
    { year: 2023, title: "Excellence in Customer Service", issuer: "National Hospitality Association" },
    { year: 2022, title: "Top Venue for Corporate Events", issuer: "Business Travel Magazine" },
    { year: 2021, title: "Most Sustainable Event Venue", issuer: "Green Earth Foundation" },
    { year: 2020, title: "Architectural Marvel Award", issuer: "Global Design Council" },
    { year: 2019, title: "Wedding Venue of the Year", issuer: "Luxe Wedding Planners" },
];

export default function AwardsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-1">
        <section className="relative h-[50vh] bg-secondary">
          {awardsImage && (
            <Image
              src={awardsImage.imageUrl}
              alt={awardsImage.description}
              fill
              className="object-cover"
              data-ai-hint={awardsImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline">A Legacy of Excellence</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl">Recognized globally for our commitment to quality and service.</p>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Accolades</h2>
                     <p className="text-muted-foreground text-lg mt-4">We are proud to be consistently recognized by industry leaders for our world-class facilities and exceptional service. These awards reflect our team's dedication to making every event a resounding success.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {awardsList.map((award, index) => (
                        <Card key={index} className="bg-secondary/50 border-primary/20">
                            <CardHeader className="flex-row items-center gap-4 space-y-0">
                                <div className="p-3 rounded-full bg-primary/10 border border-primary/30">
                                    <Award className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <CardTitle className="text-lg font-bold">{award.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{award.issuer} - <span className="font-semibold text-foreground">{award.year}</span></p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
      </main>
      <AppFooter />
    </div>
  );
}
