"use client";

import React from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, ShieldCheck, TrendingUp } from 'lucide-react';

const InstagramPreview = () => {
  return (
    <div className="w-full max-w-[450px] mx-auto bg-white border border-slate-200 rounded-md overflow-hidden shadow-2xl">
      <div className="p-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#19998B] via-[#16335A] to-indigo-600 p-[2px]">
            <div className="w-full h-full rounded-full bg-white p-[2px]">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white">
                <ShieldCheck size={18} />
              </div>
            </div>
          </div>
          <div>
            <p className="text-base font-black text-slate-900">memorizebank</p>
            <p className="text-[12px] text-slate-500 font-bold">Sponsored</p>
          </div>
        </div>
        <button className="p-2 hover:bg-slate-50 rounded-full transition-colors">
          <MoreHorizontal size={24} className="text-slate-400" />
        </button>
      </div>

      <div className="relative aspect-square bg-slate-900 flex items-center justify-center overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-[#19998B]/20 to-[#16335A]/20" />
        
        {/* Card Visual */}
        <div className="relative w-72 aspect-[1.58/1] bg-gradient-to-br from-slate-800 to-slate-950 rounded-md shadow-2xl p-8 text-white flex flex-col justify-between border border-white/10 transform -rotate-6 group-hover:rotate-0 transition-transform duration-700">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-[#19998B]" />
              <span className="font-black text-sm tracking-tighter">MEMORIZE</span>
            </div>
            <div className="w-10 h-8 bg-amber-400/20 rounded-sm border border-amber-400/30" />
          </div>
          <div className="flex justify-between items-end">
            <p className="text-[10px] font-mono tracking-widest opacity-60">VOYAGE STUDENT</p>
            <TrendingUp size={20} className="text-[#19998B]" />
          </div>
        </div>

        <div className="absolute bottom-8 left-8 right-8">
          <div className="bg-white/90 backdrop-blur-md border border-white/20 rounded-md p-5 text-[#16335A]">
            <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-60">Credit Score Lift</p>
            <p className="text-3xl font-black">+45 Points</p>
            <p className="text-[11px] opacity-60">Average lift after 6 months of use*</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Heart size={30} className="text-slate-900 hover:text-red-500 cursor-pointer transition-colors" />
            <MessageCircle size={30} className="text-slate-900 hover:text-slate-500 cursor-pointer transition-colors" />
            <Send size={30} className="text-slate-900 hover:text-[#19998B] cursor-pointer transition-colors" />
          </div>
          <Bookmark size={30} className="text-slate-900 hover:text-[#19998B] cursor-pointer transition-colors" />
        </div>
        
        <div className="space-y-3">
          <p className="text-base font-black text-slate-900">12,402 likes</p>
          
          <div className="text-base leading-relaxed">
            <span className="font-black mr-2">memorizebank</span>
            Stop waiting for credit history to happen. Start building it yourself. 🚀 The Voyage Card is designed for students who want to start their financial journey on the right foot. No annual fee, no credit history required.
            <div className="mt-3 text-[#16335A] font-bold">
              #studentlife #creditscore #financialfreedom #memorizebank #voyagecard
            </div>
          </div>
          
          <button className="text-sm text-slate-400 font-bold hover:text-slate-600 transition-colors">
            View all 128 comments
          </button>
          
          <p className="text-[11px] text-slate-400 font-black uppercase tracking-widest pt-1">Just now</p>
        </div>
      </div>
    </div>
  );
};

export default InstagramPreview;