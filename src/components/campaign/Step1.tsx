"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Step1 = ({ onNext }: { onNext: () => void }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasPlan, setHasPlan] = useState(false);
  
  const [blueprint, setBlueprint] = useState({
    audience: "The Future Builder: 18-22 year old college students with zero credit history. They are digitally native, value transparency, and are wary of hidden fees.",
    kpis: "Applications: 5,000 target for Q3. Approval Rate: 85%. Retention: 90% active card usage in first 90 days.",
    narrative: "We are positioning the Voyage Card as a 'Financial Co-Pilot'. The narrative focuses on 'Starting the Journey' rather than just 'Spending Money'.",
  });

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setHasPlan(true);
    }, 1500);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full">
      <div className="bg-white border border-[#E8E8E8] rounded-md overflow-hidden shadow-sm">
        <div className="bg-[#F9F9F9] px-10 py-6 border-b border-[#E8E8E8] flex items-center justify-between">
          <div>
            <h3 className="text-base font-black text-[#16335A] tracking-widest uppercase">Strategic Blueprint</h3>
            <p className="text-[10px] font-black text-[#4D4D4D] uppercase tracking-[0.2em] mt-0.5">Memorial Bank Intelligence Engine</p>
          </div>
          <div className="bg-[#FCF0E9] px-5 py-2 rounded-sm border border-[#EA1313]/10 flex items-center gap-2">
            <AlertCircle size={14} className="text-[#EA1313]" />
            <p className="text-[10px] font-black text-[#EA1313] uppercase tracking-widest">Awaiting Manager Approval</p>
          </div>
        </div>

        <div className="p-10 space-y-10">
          <div className="grid grid-cols-1 gap-10">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label className="text-[11px] font-black uppercase tracking-widest text-[#4D4D4D]">Campaign Essence</Label>
                  <Textarea 
                    placeholder="Describe the campaign..."
                    className="min-h-[140px] rounded-sm border-[#E8E8E8] focus:ring-[#19998B] p-5 text-base leading-relaxed bg-[#F9F9F9] font-medium"
                    defaultValue="Launch of the Voyage Student Credit Card. Focus on 'Credit Building from Scratch'. No annual fee, 1% cashback on study supplies and dining."
                  />
                </div>
                
                <div className="space-y-3">
                  <Label className="text-[11px] font-black uppercase tracking-widest text-[#4D4D4D]">Research Context</Label>
                  <Textarea 
                    placeholder="List data sources..."
                    className="min-h-[140px] rounded-sm border-[#E8E8E8] focus:ring-[#19998B] p-5 text-base leading-relaxed bg-[#F9F9F9] font-medium"
                    defaultValue="1. Gen Z Financial Habits Report 2024\n2. Competitor Audit: Chase Freedom Student\n3. Keyword Analysis: 'How to build credit at 18'"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <Button 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="bg-[#16335A] hover:bg-[#000000] text-white rounded-md px-12 h-12 font-black text-xs uppercase tracking-widest shadow-lg"
                >
                  {isGenerating ? "Synthesizing..." : "Generate Strategic Plan"}
                </Button>
              </div>
            </div>

            {hasPlan && (
              <div className="animate-in fade-in slide-in-from-top-4 duration-700">
                <div className="bg-[#F0F9FF] rounded-md p-12 text-[#16335A] relative overflow-hidden border-2 border-[#16335A] shadow-xl">
                  <div className="relative z-10 space-y-12">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-2xl font-black tracking-tight uppercase">Validated Strategy</h4>
                        <p className="text-[10px] font-black text-[#19998B] uppercase tracking-widest">Synthesis Complete • Ready for Architecture</p>
                      </div>
                      <Badge className="bg-white text-[#16335A] border-[#16335A]/20 font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">AI Generated</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                      <div className="space-y-3">
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#4D4D4D]">Target Audience</p>
                        <p className="text-lg font-bold leading-relaxed text-[#000000]">{blueprint.audience}</p>
                      </div>
                      <div className="space-y-3">
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#4D4D4D]">Success Metrics</p>
                        <p className="text-lg font-bold leading-relaxed text-[#000000]">{blueprint.kpis}</p>
                      </div>
                      <div className="space-y-3">
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#4D4D4D]">Core Narrative</p>
                        <p className="text-lg font-bold leading-relaxed text-[#19998B]">{blueprint.narrative}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-8 pt-8 border-t border-[#16335A]/10">
                      <button 
                        onClick={() => setHasPlan(false)}
                        className="flex items-center gap-2 text-[#4D4D4D] font-black text-[11px] uppercase tracking-widest hover:text-[#16335A] transition-all"
                      >
                        <RefreshCw size={14} /> Reset Synthesis
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;