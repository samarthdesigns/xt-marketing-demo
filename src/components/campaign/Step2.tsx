"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter,
  DialogTrigger
} from "@/components/ui/dialog";
import { Mail, Instagram, FileText, Globe, Plus, Trash2, Sparkles, ChevronRight, History, TrendingUp, Target, Users, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { showSuccess } from '@/utils/toast';

const Step2 = ({ onNext }: { onNext: () => void }) => {
  const [selectedAsset, setSelectedAsset] = useState<any>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [assets, setAssets] = useState([
    { id: 1, type: 'Email Campaign', name: 'Welcome Voyage', icon: Mail, desc: 'Introduction to the Voyage card and its core benefits.', color: 'text-[#16335A] bg-[#B3BDCC]/20' },
    { id: 2, type: 'Instagram Post', name: 'Credit Score 101', icon: Instagram, desc: 'Educational carousel on building credit history.', color: 'text-[#19998B] bg-[#C3E0DB]/20' },
    { id: 3, type: 'Blog Article', name: 'Student Finance Guide', icon: FileText, desc: 'Deep dive into managing your first credit card.', color: 'text-[#16335A] bg-[#B3BDCC]/20' },
    { id: 4, type: 'Landing Page', name: 'Voyage Application', icon: Globe, desc: 'High-conversion application page for students.', color: 'text-[#19998B] bg-[#C3E0DB]/20' },
  ]);

  const previousCampaigns = [
    { name: 'Summer Savings', campaign: 'Q2 Retail Push', performance: '4.2% CTR', reach: '120k', thumb: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=200&fit=crop' },
    { name: 'Back to School', campaign: 'Student 2023', performance: '6.8% Conv.', reach: '85k', thumb: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=200&h=200&fit=crop' },
  ];

  const handleAddAsset = () => {
    setIsAdding(false);
    showSuccess("New deliverable added to architecture.");
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full">
      <div className="bg-white border border-[#E8E8E8] rounded-md overflow-hidden shadow-sm">
        <div className="bg-[#F9F9F9] px-10 py-6 border-b border-[#E8E8E8] flex items-center justify-between">
          <div>
            <h3 className="text-base font-black text-[#16335A] tracking-widest uppercase">Asset Architecture</h3>
            <p className="text-[10px] font-black text-[#4D4D4D] uppercase tracking-[0.2em] mt-0.5">Deliverable Mapping & Strategy</p>
          </div>
          <div className="bg-white px-5 py-2 rounded-sm border border-[#E8E8E8]">
            <p className="text-[10px] font-black text-[#19998B] uppercase tracking-widest">Strategy Approved</p>
          </div>
        </div>

        <div className="p-10 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assets.map((asset) => (
              <Card 
                key={asset.id} 
                onClick={() => setSelectedAsset(asset)}
                className="border border-[#E8E8E8] bg-white rounded-md overflow-hidden group hover:border-[#19998B] transition-all cursor-pointer shadow-none"
              >
                <CardContent className="p-8">
                  <div className={cn("w-12 h-12 rounded-sm flex items-center justify-center mb-6 border border-[#E8E8E8]", asset.color)}>
                    <asset.icon size={24} />
                  </div>
                  <h4 className="font-black text-[#000000] text-base mb-1.5">{asset.name}</h4>
                  <p className="text-[10px] font-black text-[#4D4D4D] uppercase tracking-widest mb-4">{asset.type}</p>
                  <p className="text-sm text-[#4D4D4D] leading-relaxed mb-6 line-clamp-2 font-medium">{asset.desc}</p>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-[#F9F9F9] text-[#4D4D4D] border border-[#E8E8E8] text-[9px] px-3 py-1 rounded-sm font-black uppercase tracking-widest">Suggested</Badge>
                    <ChevronRight size={18} className="text-[#E8E8E8] group-hover:text-[#19998B] transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
            <button 
              onClick={() => setIsAdding(true)}
              className="border border-dashed border-[#E8E8E8] rounded-md flex flex-col items-center justify-center p-8 hover:border-[#16335A] hover:bg-[#F9F9F9] transition-all group"
            >
              <div className="w-12 h-12 rounded-sm bg-[#F9F9F9] flex items-center justify-center text-[#B3BDCC] group-hover:text-[#16335A] mb-3 transition-colors">
                <Plus size={24} />
              </div>
              <p className="text-[11px] font-black text-[#4D4D4D] uppercase tracking-widest">Add Deliverable</p>
            </button>
          </div>

          <div className="flex justify-center pt-6">
            <Button 
              onClick={onNext}
              className="bg-[#19998B] hover:bg-[#16335A] text-white rounded-none h-12 px-12 font-black text-xs uppercase tracking-widest shadow-xl transition-all hover:scale-105"
            >
              Continue to Production
            </Button>
          </div>
        </div>
      </div>

      {/* Asset Detail Dialog */}
      <Dialog open={!!selectedAsset} onOpenChange={() => setSelectedAsset(null)}>
        <DialogContent className="max-w-3xl p-0 border-none bg-white overflow-hidden rounded-md">
          <div className="flex flex-col">
            <div className="p-10 border-b border-[#E8E8E8] bg-[#F9F9F9] flex justify-between items-start">
              <div className="flex items-center gap-6">
                <div className={cn("w-14 h-14 rounded-sm flex items-center justify-center border border-[#E8E8E8]", selectedAsset?.color)}>
                  {selectedAsset && <selectedAsset.icon size={28} />}
                </div>
                <div>
                  <DialogTitle className="text-2xl font-black text-[#000000] uppercase tracking-tight">{selectedAsset?.name}</DialogTitle>
                  <DialogDescription className="text-[11px] font-black text-[#19998B] uppercase tracking-widest">
                    {selectedAsset?.type} • Memorial Bank Asset v1.0
                  </DialogDescription>
                </div>
              </div>
              <button onClick={() => setSelectedAsset(null)} className="p-2 bg-[#16335A] text-white hover:bg-[#000000] rounded-sm transition-all">
                <X size={24} />
              </button>
            </div>

            <div className="p-10 space-y-12 max-h-[60vh] overflow-y-auto">
              <div className="space-y-6">
                <h5 className="text-[11px] font-black text-[#4D4D4D] uppercase tracking-widest flex items-center gap-2">
                  <Sparkles size={14} /> Strategic Intent
                </h5>
                <p className="text-lg text-[#000000] leading-relaxed font-medium">
                  {selectedAsset?.desc} This asset is designed to capture the attention of students during their peak financial planning periods. We will focus on high-contrast visuals and clear, jargon-free language to build trust.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-5 bg-[#F9F9F9] rounded-sm border border-[#E8E8E8]">
                    <p className="text-[10px] font-black text-[#4D4D4D] uppercase tracking-widest mb-1">Target CTR</p>
                    <p className="text-xl font-black text-[#16335A]">3.5% - 4.8%</p>
                  </div>
                  <div className="p-5 bg-[#F9F9F9] rounded-sm border border-[#E8E8E8]">
                    <p className="text-[10px] font-black text-[#4D4D4D] uppercase tracking-widest mb-1">Primary KPI</p>
                    <p className="text-xl font-black text-[#19998B]">Conversion</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h5 className="text-[11px] font-black text-[#4D4D4D] uppercase tracking-widest flex items-center gap-2">
                  <History size={14} /> Similar Campaigns
                </h5>
                <div className="space-y-4">
                  {previousCampaigns.map((camp, i) => (
                    <div key={i} className="group cursor-pointer bg-white border border-[#E8E8E8] rounded-sm p-5 flex gap-5 hover:border-[#19998B] transition-all">
                      <div className="w-24 h-24 rounded-sm overflow-hidden border border-[#E8E8E8] shrink-0">
                        <img src={camp.thumb} alt={camp.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-base font-black text-[#000000]">{camp.name}</p>
                            <p className="text-[10px] font-black text-[#19998B] uppercase tracking-widest">{camp.campaign}</p>
                          </div>
                          <Badge className="bg-[#E4F1CD] text-[#1A2306] border border-[#A7CF48]/20 text-[9px] px-2 py-0.5 rounded-sm font-black uppercase tracking-widest">Top Performer</Badge>
                        </div>
                        <div className="flex gap-6 pt-2">
                          <div className="flex items-center gap-1.5">
                            <TrendingUp size={12} className="text-[#19998B]" />
                            <span className="text-[11px] font-bold text-[#4D4D4D]">{camp.performance}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users size={12} className="text-[#16335A]" />
                            <span className="text-[11px] font-bold text-[#4D4D4D]">{camp.reach} Reach</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-10 border-t border-[#E8E8E8] bg-[#F9F9F9]">
              <Button onClick={() => setSelectedAsset(null)} className="w-full bg-[#16335A] hover:bg-[#000000] text-white rounded-none h-14 font-black text-sm uppercase tracking-widest shadow-lg">
                Close Strategy View
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Deliverable Dialog */}
      <Dialog open={isAdding} onOpenChange={setIsAdding}>
        <DialogContent className="max-w-2xl p-0 border-none bg-white overflow-hidden rounded-md">
          <div className="flex flex-col">
            <div className="p-10 border-b border-[#E8E8E8] bg-[#F9F9F9] flex justify-between items-start">
              <div>
                <DialogTitle className="text-2xl font-black text-[#000000] uppercase tracking-tight">Add Deliverable</DialogTitle>
                <DialogDescription className="text-[11px] font-black text-[#4D4D4D] uppercase tracking-widest">
                  Define a new asset for the Voyage campaign
                </DialogDescription>
              </div>
              <button onClick={() => setIsAdding(false)} className="p-2 bg-[#16335A] text-white hover:bg-[#000000] rounded-sm transition-all">
                <X size={24} />
              </button>
            </div>

            <div className="p-10 space-y-8">
              <div className="space-y-3">
                <Label className="text-[11px] font-black uppercase tracking-widest text-[#4D4D4D]">Asset Name</Label>
                <Input placeholder="e.g. TikTok Series" className="rounded-sm border-[#E8E8E8] h-12 text-base font-medium px-5" />
              </div>
              <div className="space-y-3">
                <Label className="text-[11px] font-black uppercase tracking-widest text-[#4D4D4D]">Asset Type</Label>
                <Input placeholder="e.g. Social Video" className="rounded-sm border-[#E8E8E8] h-12 text-base font-medium px-5" />
              </div>
              <div className="space-y-3">
                <Label className="text-[11px] font-black uppercase tracking-widest text-[#4D4D4D]">Strategic Details</Label>
                <Textarea placeholder="Describe the goal of this asset..." className="min-h-[160px] rounded-sm border-[#E8E8E8] text-base font-medium p-5" />
              </div>
            </div>

            <div className="p-10 border-t border-[#E8E8E8] bg-[#F9F9F9]">
              <Button onClick={handleAddAsset} className="w-full bg-[#19998B] hover:bg-[#16335A] text-white rounded-none h-14 font-black text-sm uppercase tracking-widest shadow-lg">
                Add to Architecture
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Step2;