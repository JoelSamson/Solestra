import React, { useState } from 'react';
import { ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { generateMarketingInsight } from '../services/geminiService';
import { GeneratedIdea } from '../types';

const AIConsultant: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('');
  const [loading, setLoading] = useState(false);
  const [idea, setIdea] = useState<GeneratedIdea | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !industry) return;

    setLoading(true);
    setIdea(null);
    
    try {
      const result = await generateMarketingInsight(businessName, industry);
      setIdea(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-lab" className="bg-white text-black py-24 md:py-40 relative">
      <div className="max-w-[95%] mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Header */}
          <div className="reveal-on-scroll">
            <h2 className="text-6xl md:text-9xl font-['Anton'] uppercase leading-[0.85] mb-8">
              Intelligence <br/> Lab
            </h2>
            <p className="font-['Oswald'] text-xl uppercase tracking-wider max-w-md border-l-4 border-black pl-6">
              Leverage our proprietary Gemini AI models to deconstruct your market position.
            </p>
          </div>

          {/* Interface */}
          <div className="reveal-on-scroll delay-100">
            {!idea ? (
              <form onSubmit={handleSubmit} className="space-y-0">
                <div className="border-b-2 border-black group focus-within:bg-gray-50 transition-colors">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 pt-6">Business Name</label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="ENTER NAME"
                    className="w-full bg-transparent py-4 text-3xl font-['Anton'] uppercase placeholder-gray-300 outline-none"
                  />
                </div>
                <div className="border-b-2 border-black group focus-within:bg-gray-50 transition-colors">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 pt-6">Industry</label>
                  <input
                    type="text"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    placeholder="ENTER SECTOR"
                    className="w-full bg-transparent py-4 text-3xl font-['Anton'] uppercase placeholder-gray-300 outline-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading || !businessName || !industry}
                  className="w-full bg-black text-white py-8 mt-8 flex justify-between items-center px-8 hover:bg-amber-500 hover:text-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="font-['Oswald'] text-2xl uppercase tracking-widest">
                    {loading ? 'Processing...' : 'Generate Strategy'}
                  </span>
                  {loading ? <Loader2 className="animate-spin w-8 h-8" /> : <ArrowRight className="w-8 h-8" />}
                </button>
              </form>
            ) : (
              <div className="bg-black text-white p-8 md:p-12 animate-fade-in relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8">
                  <Sparkles className="w-12 h-12 text-amber-500 opacity-50" />
                </div>
                
                <div className="mb-8">
                  <span className="font-['Oswald'] text-amber-500 uppercase tracking-widest text-sm">Strategic Directive</span>
                  <h3 className="text-4xl md:text-5xl font-['Anton'] uppercase leading-none mt-2">
                    {idea.headline}
                  </h3>
                </div>

                <p className="text-gray-400 font-['Inter'] text-lg leading-relaxed mb-8 border-l border-white/20 pl-4">
                  {idea.strategy}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {idea.tags.map((tag, i) => (
                    <span key={i} className="border border-white/30 px-4 py-2 rounded-full font-['Oswald'] text-sm uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => setIdea(null)}
                  className="text-amber-500 underline font-['Oswald'] uppercase tracking-widest hover:text-white"
                >
                  Reset Analysis
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;