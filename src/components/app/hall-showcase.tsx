import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { halls } from '@/lib/data';
import type { Hall } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Users, IndianRupee } from 'lucide-react';

export function HallShowcase() {
  return (
    <section id="halls" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-10">
          Our Premier Venues
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {halls.map((hall: Hall) => (
            <HallCard key={hall.id} hall={hall} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HallCard({ hall }: { hall: Hall }) {
  const hallImage = PlaceHolderImages.find(p => p.id === hall.imageId);

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-primary bg-card">
      <CardHeader className="p-0">
        {hallImage && (
          <div className="aspect-video relative">
            <Image
              src={hallImage.imageUrl}
              alt={hallImage.description}
              fill
              className="object-cover"
              data-ai-hint={hallImage.imageHint}
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="font-headline text-2xl mb-2">{hall.name}</CardTitle>
        <CardDescription>{hall.description}</CardDescription>
        <div className="mt-4 flex flex-wrap gap-4 items-center">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>Up to {hall.capacity} guests</span>
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2">
            <IndianRupee className="h-4 w-4" />
            <span>Starts at {hall.price.toLocaleString('en-IN')}</span>
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
