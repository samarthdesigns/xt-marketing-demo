"use client";

import React from 'react';
import { Clock, ArrowRight, User, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPreviewProps {
  hideCreditHistory?: boolean;
}

const BlogPreview = ({ hideCreditHistory = false }: BlogPreviewProps) => {
  return (
    <div className="w-full min-h-full bg-white flex flex-col">
      <div className="hidden md:block">
        <div className="relative h-[400px] bg-[#16335A] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#16335A] to-[#19998B]/40" />
          <div className="relative z-10 text-center space-y-6 px-10 max-w-4xl">
            <div className="flex items-center justify-center gap-6 text-[11px] font-black text-white/80 uppercase tracking-widest mb-4">
              <span className="bg-[#19998B] text-white px-4 py-1.5 rounded-full">Financial Literacy</span>
              <span className="flex items-center gap-2"><Clock size={14} /> 8 Min Read</span>
            </div>
            <h1 className="text-5xl font-black text-white leading-tight tracking-tight uppercase">Credit Score 101: Building Your Future from Zero</h1>
          </div>
        </div>
        <div className="p-20 space-y-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-between pb-8 border-b border-[#E8E8E8]">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#F9F9F9] flex items-center justify-center text-[#B3BDCC] border border-[#E8E8E8]"><User size={24} /></div>
              <div>
                <p className="text-base font-black text-[#000000]">Sarah Finance</p>
                <p className="text-[11px] text-[#4D4D4D] font-black uppercase tracking-widest">Education Lead • Memorial Bank</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[9px] font-black text-[#B3BDCC] uppercase tracking-widest">Published</p>
              <p className="text-base font-bold text-[#000000]">June 12, 2024</p>
            </div>
          </div>
          
          <div className="space-y-10 text-[#4D4D4D] leading-relaxed text-xl font-medium">
            <p className="text-2xl text-[#000000] font-black leading-snug">Building credit as a student can feel like a "chicken and egg" problem. You need credit to get a card, but you need a card to build credit. At Memorial Bank, we've solved that paradox.</p>
            
            <p>The secret to a healthy financial future isn't just about having a card—it's about understanding how to use it. Your credit score is essentially a "trust rating" for lenders. By using a student-focused card like Voyage, you're proving that you can manage small amounts of debt responsibly.</p>
            
            <div className="bg-[#F9F9F9] p-10 rounded-[40px] border border-[#E8E8E8] space-y-8">
              <h3 className="text-2xl font-black text-[#16335A] uppercase tracking-tight">The Core Pillars of Credit Building</h3>
              <div className="space-y-6">
                <div className="flex gap-5">
                  <div className="w-8 h-8 rounded-full bg-[#19998B] flex items-center justify-center text-white shrink-0 mt-1"><CheckCircle2 size={18} /></div>
                  <div>
                    <p className="font-black text-[#000000] text-lg">Payment History (35%)</p>
                    <p className="text-base">The single most important factor. Always pay at least the minimum, but ideally the full balance, every single month. This builds a track record of reliability.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-8 h-8 rounded-full bg-[#19998B] flex items-center justify-center text-white shrink-0 mt-1"><CheckCircle2 size={18} /></div>
                  <div>
                    <p className="font-black text-[#000000] text-lg">Credit Utilization (30%)</p>
                    <p className="text-base">Try to keep your balance below 30% of your total limit. If your limit is $500, try not to carry a balance over $150. This shows you're not over-reliant on credit.</p>
                  </div>
                </div>
                {!hideCreditHistory && (
                  <div className="flex gap-5 animate-in fade-in slide-in-from-top-2 duration-500">
                    <div className="w-8 h-8 rounded-full bg-[#19998B] flex items-center justify-center text-white shrink-0 mt-1"><CheckCircle2 size={18} /></div>
                    <div>
                      <p className="font-black text-[#000000] text-lg">Length of Credit History (15%)</p>
                      <p className="text-base">The earlier you start, the better. This is why the Voyage card is designed for your first year of college. Time is your greatest asset in credit building.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <p>One of the biggest factors in your score is "Credit Utilization". Try to keep your balance below 30% of your total limit. This shows lenders you're not over-extending yourself. With the Memorial Bank app, you can track this in real-time with our "Utilization Meter".</p>
            
            <p>Remember, your credit score follows you. It affects your ability to rent an apartment, get a car loan, and even some job applications. Starting with a solid foundation today means fewer headaches tomorrow. We're here to help you every step of the way.</p>
          </div>
          
          <div className="pt-12 border-t border-[#E8E8E8] flex justify-center">
            <Button className="bg-[#16335A] hover:bg-[#000000] text-white rounded-2xl px-12 h-16 font-black text-base uppercase tracking-widest shadow-xl group">
              Apply for Voyage Card <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      <div className="md:hidden flex-1 flex flex-col">
        <div className="p-8 space-y-6">
          <div className="flex items-center gap-3 text-[10px] font-black text-[#19998B] uppercase tracking-widest">
            <span>Education</span>
            <span className="w-1.5 h-1.5 bg-[#E8E8E8] rounded-full" />
            <span>8 min read</span>
          </div>
          <h1 className="text-3xl font-black text-[#000000] leading-tight uppercase">Credit Score 101: Building from Zero</h1>
          <div className="flex items-center gap-4 pt-2">
            <div className="w-10 h-10 rounded-full bg-[#F9F9F9] flex items-center justify-center text-[#B3BDCC] border border-[#E8E8E8]"><User size={20} /></div>
            <div>
              <p className="text-sm font-black text-[#000000]">Sarah Finance</p>
              <p className="text-[10px] text-[#4D4D4D] font-black uppercase tracking-widest">Memorial Bank</p>
            </div>
          </div>
        </div>

        <div className="w-full aspect-video bg-[#16335A] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#16335A] to-[#19998B]/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white">
              <TrendingUp size={24} />
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8 text-[#4D4D4D] text-base leading-relaxed font-medium">
          <p className="text-[#000000] font-black text-lg">Building credit as a student can feel like a "chicken and egg" problem. You need credit to get a card, but you need a card to build credit.</p>
          <p>The secret is starting small and being consistent. Your credit score is essentially a "trust rating" for lenders. By using a student-focused card like Voyage, you're proving that you can manage small amounts of debt responsibly.</p>
          
          <div className="p-8 bg-[#F9F9F9] rounded-2xl border-l-4 border-[#19998B] italic">
            <p className="text-[#16335A] font-bold text-base">"The best time to start building credit was yesterday. The second best time is today."</p>
          </div>

          {!hideCreditHistory && (
            <p className="animate-in fade-in duration-500">One of the biggest factors in your score is "Credit Utilization". Try to keep your balance below 30% of your total limit. This shows lenders you're not over-extending yourself.</p>
          )}
        </div>

        <div className="p-8 mt-auto border-t border-[#E8E8E8] bg-[#F9F9F9]/50">
          <Button className="w-full bg-[#16335A] text-white h-14 rounded-xl font-black text-sm uppercase tracking-widest shadow-md">Apply for Voyage Card</Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;