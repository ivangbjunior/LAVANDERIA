import React, { useState } from 'react';
import { MessageCircle, Send, Loader2, Sparkles } from 'lucide-react';
import { askObjectionHandler } from '../services/geminiService';
import { ChatMessage, MessageRole } from '../types';

export const GeminiAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: MessageRole.MODEL, text: "Olá! Sou o assistente virtual da All Laundry Lavanderia Express. Algum morador fez uma pergunta difícil? Digite aqui que eu ajudo você a responder com dados e argumentos." }
  ]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: MessageRole.USER, text: userText }]);
    setLoading(true);

    try {
      const responseText = await askObjectionHandler(userText);
      setMessages(prev => [...prev, { role: MessageRole.MODEL, text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: MessageRole.MODEL, text: "Erro ao conectar." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col h-[500px]">
      <div className="bg-brand-900 p-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-yellow-400" />
        <h3 className="text-white font-semibold">Assistente de Assembleia (IA)</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
              msg.role === MessageRole.USER 
                ? 'bg-brand-600 text-white rounded-br-none' 
                : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
              <Loader2 className="w-5 h-5 animate-spin text-brand-600" />
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ex: Um morador disse que vai gastar muita luz..."
          className="flex-1 px-4 py-2 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
        />
        <button 
          onClick={handleSend}
          disabled={loading || !input.trim()}
          className="bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white p-2 rounded-full transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};