'use server';
/**
 * @fileOverview Personalized IT guidance flow.
 *
 * This flow personalizes blog content recommendations based on user interactions and needs.
 * - personalizeITGuidance - The function to call to get personalized recommendations.
 * - PersonalizeITGuidanceInput - The input type for the personalizeITGuidance function.
 * - PersonalizeITGuidanceOutput - The return type for the personalizeITGuidance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeITGuidanceInputSchema = z.object({
  userInteractions: z
    .string()
    .describe('The history of user interactions with the blog, including viewed articles and search queries.'),
  expressedNeeds: z
    .string()
    .describe('A description of the users expressed IT needs and problems.'),
});
export type PersonalizeITGuidanceInput = z.infer<typeof PersonalizeITGuidanceInputSchema>;

const PersonalizeITGuidanceOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('A list of recommended blog articles or documentation based on user data.'),
});
export type PersonalizeITGuidanceOutput = z.infer<typeof PersonalizeITGuidanceOutputSchema>;

export async function personalizeITGuidance(input: PersonalizeITGuidanceInput): Promise<PersonalizeITGuidanceOutput> {
  return personalizeITGuidanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeITGuidancePrompt',
  input: {schema: PersonalizeITGuidanceInputSchema},
  output: {schema: PersonalizeITGuidanceOutputSchema},
  prompt: `You are an expert IT support assistant. Based on the user's past interactions and current needs, recommend relevant blog articles or documentation.

User Interactions: {{{userInteractions}}}
Expressed Needs: {{{expressedNeeds}}}

Provide a list of recommended resources:`,
});

const personalizeITGuidanceFlow = ai.defineFlow(
  {
    name: 'personalizeITGuidanceFlow',
    inputSchema: PersonalizeITGuidanceInputSchema,
    outputSchema: PersonalizeITGuidanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
