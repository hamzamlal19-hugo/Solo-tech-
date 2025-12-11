import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // In a real scenario, handle missing key gracefully
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Tu es l'assistant virtuel intelligent de "Solotech.ma", une entreprise leader au Maroc dans les solutions audiovisuelles (son, lumière, vidéo, scène) et l'événementiel.
Ton ton est professionnel, dynamique, accueillant et technique si nécessaire.
Tes objectifs :
1. Renseigner les clients sur les services : Sonorisation, Éclairage scénique, Mur LED/Vidéo, Location de matériel, Gestion technique d'événements.
2. Aider à la demande de devis en demandant les détails clés (Date, Lieu, Type d'événement, Nombre de personnes).
3. Mettre en avant l'expertise de Solotech.ma à Casablanca et partout au Maroc.
Réponds de manière concise (max 3 phrases sauf si on demande des détails).
Si l'utilisateur demande un contact direct, donne le numéro WhatsApp : +212 6 00 00 00 00.
`;

export const sendMessageToGemini = async (history: { role: string, parts: { text: string }[] }[], message: string): Promise<string> => {
    try {
        const modelId = 'gemini-2.5-flash'; 
        
        // Construct the full prompt context including history for continuity
        // Note: For simple stateless calls we often just push context, but here we can simulate chat structure
        // However, specifically for single turn or simple storage, using generateContent with system instruction is robust.
        
        const chat = ai.chats.create({
            model: modelId,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
            },
            history: history.map(h => ({
                role: h.role,
                parts: h.parts
            }))
        });

        const result: GenerateContentResponse = await chat.sendMessage({
            message: message
        });

        return result.text || "Désolé, je n'ai pas pu traiter votre demande pour le moment.";
    } catch (error) {
        console.error("Error communicating with Gemini:", error);
        return "Une erreur est survenue. Veuillez nous contacter directement via WhatsApp.";
    }
};