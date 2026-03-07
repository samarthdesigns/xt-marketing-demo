"use client";

import React from 'react';
import { ShieldCheck, Check, TrendingUp, Star, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const LandingPagePreview = () => {
  return (
    <div className="w-full min-h-full bg-white flex flex-col">
      {/* Desktop Header */}
      <nav className="hidden md:flex px-10 py-6 border-b border-slate-100 items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-3 font-black text-lg tracking-tighter">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
            <ShieldCheck size={18} />
          </div>
          MEMORIZE BANK
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-slate-900 transition-colors">Cards</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Education</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Support</a>
          </div>
          <Button variant="outline" className="rounded-full border-blue-200 text-blue-700 font-black text-[10px] uppercase tracking-widest px-6 h-9">Login</Button>
        </div>
      </nav>

      {/* Mobile Header */}
      <nav className="md:hidden px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
        <div className="font-black text-base tracking-tighter flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center text-white">
            <ShieldCheck size={14} />
          </div>
          MEMORIZE
        </div>
        <Button className="bg-blue-600 text-white rounded-full h-8 px-4 text-[10px] font-black uppercase tracking-widest">Apply</Button>
      </nav>

      {/* Desktop Layout */}
      <div className="hidden md:grid flex-1 grid-cols-2">
        <div className="bg-slate-50 p-12 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-10 left-10">
            <Badge className="bg-white text-blue-700 border-blue-200 font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">Student Exclusive</Badge>
          </div>
          <div className="relative w-full max-w-sm aspect-[1.58/1] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 rounded-[24px] shadow-2xl p-8 text-white flex flex-col justify-between overflow-hidden">
            <div className="flex justify-between items-start relative z-10">
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Voyage Card</p>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={20} className="text-blue-400" />
                  <span className="font-black text-lg tracking-tighter">MEMORIZE</span>
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <p className="text-xl font-mono tracking-[0.15em] mb-4">•••• •••• •••• 8824</p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[8px] font-black uppercase tracking-widest opacity-40 mb-1">Card Holder</p>
                  <p className="text-sm font-bold tracking-wide">ALEX M. STUDENT</p>
                </div>
                <TrendingUp size={20} className="text-blue-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-16 space-y-10">
          <div className="space-y-4">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full w-fit">Build Credit from Scratch</Badge>
            <h1 className="text-4xl font-black text-slate-900 leading-tight tracking-tight">The Voyage Credit Card</h1>
            <p className="text-slate-500 font-bold text-lg">Your first step into financial freedom starts here.</p>
          </div>
          <div className="space-y-6">
            <p className="text-slate-600 text-lg leading-relaxed font-medium">Designed specifically for students with no credit history. Build your score while earning rewards on the things you already buy.</p>
            <ul className="space-y-3">
              {['No Credit History Required', 'Real-time Credit Score Tracking', 'Automatic Credit Limit Reviews'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100"><Check size={12} /></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white h-16 rounded-2xl font-black text-xl shadow-2xl">Apply in 2 Minutes</Button>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex-1 flex flex-col">
        <div className="p-8 text-center space-y-6">
          <Badge className="bg-blue-50 text-blue-600 border-blue-100 font-black text-[9px] uppercase tracking-widest px-3 py-1 rounded-full">Student Exclusive</Badge>
          <h1 className="text-3xl font-black text-slate-900 leading-tight">The Voyage Card</h1>
          <p className="text-slate-500 font-bold text-sm px-4">Build credit from zero with the card designed for your student journey.</p>
        </div>

        <div className="px-6 mb-10">
          <div className="relative w-full aspect-[1.58/1] bg-slate-900 rounded-2xl shadow-xl p-6 text-white flex flex-col justify-between overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-blue-400" />
                <span className="font-black text-sm tracking-tighter">MEMORIZE</span>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-base font-mono tracking-widest">•••• 8824</p>
              <div className="flex justify-between items-end">
                <p className="text-[10px] font-bold opacity-60">ALEX M. STUDENT</p>
                <TrendingUp size={16} className="text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 space-y-8 pb-12">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <p className="text-lg font-black text-slate-900">$0</p>
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Annual Fee</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <p className="text-lg font-black text-slate-900">1%</p>
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Cashback</p>
            </div>
          </div>

          <div className="space-y-4">
            {['No credit history needed', 'Instant digital card', 'Real-time score tracking'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-700">
                <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center text-blue-600"><Check size={10} /></div>
                {item}
              </div>
            ))}
          </div>

          <Button className="w-full bg-slate-900 text-white h-14 rounded-xl font-black text-base shadow-lg">Apply Now</Button>
          
          <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-slate-400">
            <Star size={12} className="text-amber-400 fill-amber-400" />
            4.8/5 Student Rating
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPagePreview;