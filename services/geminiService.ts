import { GoogleGenAI } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é o consultor especialista da "All Laundry Lavanderia Express".
Você está auxiliando um síndico ou representante comercial durante uma ASSEMBLEIA DE CONDOMÍNIO ao vivo.

Roteiro e Fatos Chave da Apresentação Atual:
1. PROPOSTA: Implantação de lavanderia de autosserviço (Lava e Seca).
2. CUSTO PARA O CONDOMÍNIO: ZERO (Modelo de Comodato). A All Laundry paga reforma, máquinas e manutenção.
3. BENEFÍCIOS: Valorização do imóvel, economia de água/luz nas unidades, fim do barulho nos aptos.
4. PRATICIDADE: Ciclos de ~30-40 min. App avisa quando termina. Preço médio R$ 15,90 o ciclo.
5. RESPONSABILIDADES:
   - All Laundry: Máquinas, Obras, Manutenção, Insumos (sabão/amaciante), App.
   - Condomínio: Apenas ceder o espaço e pontos de água/luz.

Sua postura:
- Responda de forma curta e direta (para ser lido rápido na reunião).
- Seja educado mas firme nos dados.
- Se perguntarem sobre "quem paga a conta de água/luz da área comum", explique que a economia gerada nos apartamentos compensa, ou que pode haver um modelo de repasse, mas foque na VALORIZAÇÃO e COMODIDADE.
- Enfatize sempre: "O condomínio não tem custo de implantação".

Objetivo: Ajudar a aprovar a pauta na assembleia.
`;

export const askObjectionHandler = async (question: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    return response.text || "Desculpe, não consegui formular uma resposta rápida. Prossiga com a apresentação.";
  } catch (error) {
    console.error("Error contacting Gemini:", error);
    return "Erro de conexão. Por favor, responda baseando-se nos slides de 'Custos e Responsabilidades'.";
  }
};