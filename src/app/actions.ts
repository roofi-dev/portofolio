
'use server';

import { 
  personalizeITGuidance, 
  type PersonalizeITGuidanceInput,
  type PersonalizeITGuidanceOutput 
} from "@/ai/flows/personalize-it-guidance";
import { z } from "zod";

const PersonalizeITGuidanceInputSchema = z.object({
  userInteractions: z.string().min(10, "Please describe your past interactions in more detail."),
  expressedNeeds: z.string().min(10, "Please describe your current problem in more detail."),
});


export async function getPersonalizedGuidance(input: PersonalizeITGuidanceInput): Promise<{ success: boolean; data: PersonalizeITGuidanceOutput | null, error?: string }> {
  const validation = PersonalizeITGuidanceInputSchema.safeParse(input);
  if (!validation.success) {
    return { success: false, data: null, error: validation.error.errors.map(e => e.message).join(', ') };
  }
  
  try {
    const output = await personalizeITGuidance(input);
    return { success: true, data: output };
  } catch (error) {
    console.error("Error in getPersonalizedGuidance:", error);
    return { success: false, data: null, error: "Failed to get personalized guidance due to a server error. Please try again later." };
  }
}
