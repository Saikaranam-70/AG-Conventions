import Image from 'next/image';
import { AppHeader } from '@/components/app/header';
import { AppFooter } from '@/components/app/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('hall-'));

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-center mb-4">
              Our Gallery
            </h1>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Explore the stunning and versatile spaces at Bharat Convention Center. From grand conferences to intimate gatherings, see how our venues can be transformed to create your perfect event.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div key={image.id} className={`relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  );
}
