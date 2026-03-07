"use client";

import React from 'react';
import { ShieldCheck, ChevronRight, Instagram, Twitter, Facebook, CreditCard, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EmailPreview = () => {
  return (
    <div className="w-full min-h-full bg-slate-100 flex flex-col items-center py-4 md:py-12 px-2 md:px-4">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-xl md:rounded-3xl overflow-hidden border border-slate-200">
        <div className="bg-slate-50 px-4 md:px-8 py-2 md:py-3 border-b border-slate-100 flex justify-between items-center">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Campaign Preview</span>
          <a href="#" className="text-[10px] font-bold text-blue-600 hover:underline uppercase tracking-widest">View in Browser</a>
        </div>
        
        {/* Updated Header: Light background with high contrast text */}
        <div className="bg-white p-8 md:p-20 text-center border-b border-slate-100">
          <div className="w-12 h-12 md:w-20 md:h-20 bg-blue-600 rounded-lg md:rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-10 border border-blue-500 shadow-lg">
            <ShieldCheck size={24} className="text-white md:hidden" />
            <ShieldCheck size={40} className="text-white hidden md:block" />
          </div>
          <h1 className="text-2xl md:text-5xl font-black tracking-tighter uppercase leading-none text-[#16335A]">Start Your Voyage</h1>
          <div className="h-1 md:h-1.5 w-10 md:w-20 bg-[#19998B] mx-auto mt-4 md:mt-8 mb-2 md:mb-4" />
          <p className="text-[10px] md:text-sm font-black text-[#19998B] uppercase tracking-widest">The Student Credit Card Built for You</p>
        </div>
        
        <div className="p-6 md:p-16 space-y-8 md:space-y-16">
          <div className="bg-slate-50 rounded-xl md:rounded-[40px] p-6 md:p-12 border border-slate-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 md:w-24 md:h-24 bg-white rounded-lg md:rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-4 md:mb-8 border border-slate-100">
              <CreditCard size={28} className="md:hidden" />
              <CreditCard size={48} className="hidden md:block" />
            </div>
            <h2 className="text-xl md:text-4xl font-black text-slate-900 leading-tight">Build Credit While You Study</h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-xl font-medium mt-4 md:mt-8">
              Most banks want you to have credit before they give you a card. At Memorize, we think that's backwards. The Voyage Card is designed to help you build your score from zero.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
            <div className="space-y-2 md:space-y-4">
              <div className="flex items-center gap-3 text-blue-600">
                <GraduationCap size={16} className="md:hidden" />
                <GraduationCap size={22} className="hidden md:block" />
                <p className="font-black text-[10px] md:text-xs uppercase tracking-widest">Education</p>
              </div>
              <p className="text-base md:text-2xl font-bold text-slate-900">Free Credit Monitoring</p>
              <p className="text-xs md:text-base text-slate-500 leading-relaxed">Track your score in real-time within the Memorize app.</p>
            </div>
            <div className="space-y-2 md:space-y-4">
              <div className="flex items-center gap-3 text-blue-600">
                <CreditCard size={16} className="md:hidden" />
                <CreditCard size={22} className="hidden md:block" />
                <p className="font-black text-[10px] md:text-xs uppercase tracking-widest">Rewards</p>
              </div>
              <p className="text-base md:text-2xl font-bold text-slate-900">1% Cashback</p>
              <p className="text-xs md:text-base text-slate-500 leading-relaxed">Earn on dining, textbooks, and campus essentials.</p>
            </div>
          </div>

          <div className="pt-4 md:pt-8">
            <Button className="w-full bg-[#16335A] hover:bg-[#000000] text-white h-14 md:h-20 rounded-lg md:rounded-2xl font-black text-base md:text-2xl shadow-xl transition-all hover:scale-[1.02]">
              Apply Now <ChevronRight className="ml-2 md:ml-3 h-5 w-5 md:h-7 md:w-7" />
            </Button>
          </div>
          
          <div className="pt-8 md:pt-16 border-t border-slate-100 text-center space-y-6 md:space-y-10">
            <div className="flex justify-center gap-6 md:gap-10 text-slate-400">
              <Instagram size={20} className="hover:text-blue-600 cursor-pointer transition-colors" />
              <Twitter size={20} className="hover:text-blue-600 cursor-pointer transition-colors" />
              <Facebook size={20} className="hover:text-blue-600 cursor-pointer transition-colors" />
            </div>
            <div className="space-y-2 md:space-y-3">
              <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-widest">Memorize Bank N.A.</p>
              <p className="text-[10px] md:text-xs text-slate-400 font-medium">Member FDIC • Equal Housing Lender</p>
              <p className="text-[10px] md:text-xs text-slate-400 font-medium mt-4 md:mt-8">
                <a href="#" className="underline">Unsubscribe</a> from this list.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPreview;