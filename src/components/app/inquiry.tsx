import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Inquiry() {
  return (
    <section id="inquiry" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Stay Updated
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join our newsletter for exclusive offers, event ideas, and news from Bharat Convention Center.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 text-center sm:text-left"
              aria-label="Email for newsletter"
            />
            <Button type="submit" size="lg">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
