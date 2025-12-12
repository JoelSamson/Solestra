import { GoogleGenAI, Type, Schema } from "@google/genai";
import { GeneratedIdea } from "../types";

// Initialize Gemini
// Note: In a real production app, ensure your API key is secured.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const modelId = 'gemini-2.5-flash';

const ideaSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    headline: {
      type: Type.STRING,
      description: "A catchy, high-impact marketing headline.",
    },
    strategy: {
      type: Type.STRING,
      description: "A brief strategic insight or actionable tip (max 2 sentences).",
    },
    tags: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "3 keywords related to the strategy.",
    }
  },
  required: ["headline", "strategy", "tags"],
};

export const generateMarketingInsight = async (businessName: string, industry: string): Promise<GeneratedIdea> => {
  if (!process.env.API_KEY) {
    // Fallback if no key is present to prevent crash in demo mode
    return {
      headline: "Ignite Your Brand's Solar Flare",
      strategy: "Harness the power of radiant storytelling to eclipse the competition.",
      tags: ["Radiance", "Impact", "Energy"]
    };
  }

  try {
    const prompt = `Generate a creative marketing concept for a business named "${businessName}" in the "${industry}" industry. Be bold, modern, and professional.`;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: ideaSchema,
        systemInstruction: "You are the creative director of Solestra, a marketing agency inspired by the power of the sun and stars. Your tone is energetic, brilliant, and sophisticated. Use solar or space metaphors where appropriate.",
        temperature: 0.8,
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    return JSON.parse(text) as GeneratedIdea;
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback on error
    return {
      headline: `Illuminate ${businessName} Today`,
      strategy: "Focus on high-visibility channels to burn bright in your local market.",
      tags: ["Visibility", "Growth", "Shine"]
    };
  }
};