'use client';
import { useActionState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { generateTourAction, type FormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

const initialState: FormState = {
  message: '',
  imageData: null,
};

export function VirtualTour() {
  const [state, formAction, isPending] = useActionState(generateTourAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.imageData && !state.fieldErrors) {
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: state.message,
      });
    }
    if (state.imageData) {
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <section id="virtual-tour" className="py-12 md:py-20 bg-background/70">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Visualize Your Event
            </h2>
            <p className="text-muted-foreground text-lg">
              Not sure how your event will look in our space? Describe your vision, and our AI will generate a photorealistic preview. Try "a wedding reception with round tables, white floral centerpieces, and purple uplighting."
            </p>
            <Card>
              <form ref={formRef} action={formAction}>
                <CardHeader>
                  <CardTitle>AI Virtual Tour Generator</CardTitle>
                  <CardDescription>Describe your event setup below.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid w-full gap-2">
                    <Label htmlFor="description">Event Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="e.g., A corporate keynote with a large stage and theatre-style seating for 500 people."
                      rows={4}
                      required
                    />
                    {state.fieldErrors?.description && (
                      <p className="text-sm text-destructive">{state.fieldErrors.description.join(', ')}</p>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                   <Button type="submit" size="lg" className="w-full" disabled={isPending}>
                        <Wand2 className="mr-2 h-4 w-4" />
                        {isPending ? "Generating..." : "Generate Tour"}
                    </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
          <div className="aspect-video relative rounded-lg overflow-hidden border-4 border-primary/20 shadow-2xl bg-muted flex items-center justify-center">
            {isPending && <Skeleton className="h-full w-full" />}
            {!isPending && state.imageData ? (
              <Image
                src={state.imageData}
                alt="AI-generated virtual tour of an event"
                fill
                className="object-cover transition-opacity duration-500"
              />
            ) : (
                !isPending && (
                <div className="text-center text-muted-foreground p-8">
                  <Wand2 className="mx-auto h-12 w-12 mb-4" />
                  <p className="font-semibold">Your virtual tour will appear here.</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
