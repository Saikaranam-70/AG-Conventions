import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/lib/data';
import type { Testimonial } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-20 bg-background/70">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-10">
          What Our Clients Say
        </h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial: Testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const authorImage = PlaceHolderImages.find(p => p.id === testimonial.imageId);
  const authorInitials = testimonial.author.split(' ').map(n => n[0]).join('');

  return (
    <Card className="h-full flex flex-col justify-between shadow-lg">
      <CardContent className="p-6">
        <blockquote className="italic text-lg">"{testimonial.quote}"</blockquote>
      </CardContent>
      <div className="bg-muted p-6 flex items-center gap-4 mt-auto">
        {authorImage && (
            <Avatar>
                <AvatarImage src={authorImage.imageUrl} alt={authorImage.description} data-ai-hint={authorImage.imageHint} />
                <AvatarFallback>{authorInitials}</AvatarFallback>
            </Avatar>
        )}
        <div>
          <p className="font-semibold">{testimonial.author}</p>
          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
        </div>
      </div>
    </Card>
  );
}
