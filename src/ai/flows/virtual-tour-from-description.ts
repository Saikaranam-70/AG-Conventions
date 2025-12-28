'use server';
/**
 * @fileOverview Generates a virtual tour of a convention hall from a description.
 *
 * - generateVirtualTour - A function that generates the virtual tour.
 * - VirtualTourInput - The input type for the generateVirtualTour function.
 * - VirtualTourOutput - The return type for the generateVirtualTour function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VirtualTourInputSchema = z.object({
  hallDescription: z
    .string()
    .describe('The detailed description of the convention hall.'),
});
export type VirtualTourInput = z.infer<typeof VirtualTourInputSchema>;

const VirtualTourOutputSchema = z.object({
  virtualTourImage: z
    .string()
    .describe(
      'A photo of the convention hall, generated based on the description provided, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.'
    ),
});
export type VirtualTourOutput = z.infer<typeof VirtualTourOutputSchema>;

export async function generateVirtualTour(
  input: VirtualTourInput
): Promise<VirtualTourOutput> {
  return virtualTourFlow(input);
}

const virtualTourFlow = ai.defineFlow(
  {
    name: 'virtualTourFlow',
    inputSchema: VirtualTourInputSchema,
    outputSchema: VirtualTourOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: `A photorealistic, high-quality image of the interior of a convention center event: ${input.hallDescription}`,
    });

    if (!media?.url) {
      throw new Error('Image generation failed.');
    }

    return {virtualTourImage: media.url};
  }
);
