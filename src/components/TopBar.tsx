"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface TopBarProps {
  onCampaignsClick?: (e: React.MouseEvent) => void;
}

const TopBar = ({ onCampaignsClick }: TopBarProps) => {
  const location = useLocation();
  
  const navItems = [
    { label: 'Campaigns', path: '/campaign' },
    { label: 'Settings', path: '/settings' },
  ];

  return (
    <header className="h-16 bg-[#16335A] border-b border-white/10 sticky top-0 z-50 px-8 flex items-center justify-between text-white">
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold tracking-tighter text-white">Memorial Bank</h1>
        </div>

        <nav className="flex items-center h-16">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const isCampaigns = item.label === 'Campaigns';
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => isCampaigns && onCampaignsClick ? onCampaignsClick(e) : null}
                className={cn(
                  "px-8 h-full flex items-center text-sm font-black uppercase tracking-widest transition-all duration-300 border-b-2",
                  isActive 
                    ? "bg-white/5 text-white border-[#19998B]" 
                    : "text-white/60 hover:text-white border-transparent hover:bg-white/5"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-black text-white uppercase tracking-tight">Alex Marketer</p>
          <p className="text-[10px] font-black text-[#19998B] uppercase tracking-widest">Marketing Lead</p>
        </div>
        <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white font-black text-xs border-2 border-white/20">
          AM
        </div>
      </div>
    </header>
  );
};

export default TopBar;