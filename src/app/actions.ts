'use server';
import { generateVirtualTour } from '@/ai/flows/virtual-tour-from-description';
import { z } from 'zod';

const schema = z.object({
  description: z.string().min(10, { message: 'Description must be at least 10 characters long.' }),
});

export type FormState = {
  message: string;
  imageData: string | null;
  fieldErrors?: Record<string, string[] | undefined>;
};

export async function generateTourAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = schema.safeParse({
    description: formData.get('description'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Please fix the errors below.',
      imageData: null,
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generateVirtualTour({ hallDescription: validatedFields.data.description });
    if (result.virtualTourImage) {
      return {
        message: 'Virtual tour generated successfully!',
        imageData: result.virtualTourImage,
      };
    } else {
      return { message: 'Failed to generate virtual tour image.', imageData: null };
    }
  } catch (error) {
    console.error(error);
    return { message: 'An unexpected error occurred.', imageData: null };
  }
}
