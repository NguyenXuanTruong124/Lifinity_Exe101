
import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiResponse = async (prompt: string) => {
  try {
    // Generate content using the recommended model for basic text tasks.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are an educational gaming assistant for Lifinity Store. Your goal is to help parents and students find the best games to develop life skills like Communication, Problem Solving, Emotional Intelligence, Critical Thinking, and Financial Management. Answer in Vietnamese. Be friendly and helpful.",
        temperature: 0.7,
      },
    });
    // Return the text property directly from the response object.
    return response.text || "Xin lỗi, tôi không thể xử lý yêu cầu lúc này.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Đã xảy ra lỗi khi kết nối với trợ lý AI.";
  }
};

export const startChat = (systemInstruction?: string) => {
  // Create a chat session with the recommended model.
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: systemInstruction || "You are an educational gaming assistant for Lifinity Store. Help users learn about our games and skills.",
    }
  });
};