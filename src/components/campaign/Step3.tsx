"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Send, 
  Code, 
  Eye, 
  Sparkles, 
  Mail,
  Instagram,
  ArrowLeft,
  Check,
  Globe,
  FileText,
  Smartphone,
  Monitor,
  Search,
  RefreshCw,
  Copy,
  MoreVertical,
  ShieldAlert
} from 'lucide-react';
import { cn } from '@/lib/utils';
import EmailPreview from './previews/EmailPreview';
import InstagramPreview from './previews/InstagramPreview';
import BlogPreview from './previews/BlogPreview';
import LandingPagePreview from './previews/LandingPagePreview';
import { showSuccess } from '@/utils/toast';

const Step3 = ({ onNext }: { onNext: () => void }) => {
  const [selectedAssetId, setSelectedAssetId] = useState<number | null>(null);
  const [finalizedAssets, setFinalizedAssets] = useState<number[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [viewMode, setViewMode] = useState<'preview' | 'source'>('preview');
  const [removeCreditHistory, setRemoveCreditHistory] = useState(false);
  
  const assets = [
    { id: 1, type: 'Email Campaign', name: 'Welcome Voyage', icon: Mail, desc: 'Introduction to the Voyage card and its core benefits.', color: 'text-[#16335A] bg-[#B3BDCC]/20' },
    { id: 2, type: 'Instagram Post', name: 'Credit Score 101', icon: Instagram, desc: 'Educational carousel on building credit history.', color: 'text-[#19998B] bg-[#C3E0DB]/20' },
    { id: 3, type: 'Blog Article', name: 'Student Finance Guide', icon: FileText, desc: 'Deep dive into managing your first credit card.', color: 'text-[#16335A] bg-[#B3BDCC]/20' },
    { id: 4, type: 'Landing Page', name: 'Voyage Application', icon: Globe, desc: 'High-conversion application page for students.', color: 'text-[#19998B] bg-[#C3E0DB]/20' },
  ];

  const [messages, setMessages] = useState([
    { role: 'system', content: "I've generated the initial draft for the 'Welcome Voyage' email. I focused on the 'Financial Co-Pilot' narrative we established in Step 1. How does it look?" },
    { role: 'user', content: "Can we emphasize the 'No Credit History Required' part more? That's our biggest selling point for students." },
    { role: 'system', content: "Great point. I've moved that to the sub-headline and added a specific section explaining why Memorial Bank is different from traditional lenders." },
  ]);

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    const newMessages = [...messages, { role: 'user', content: chatInput }];
    setMessages(newMessages);
    if (chatInput.toLowerCase().includes('remove') && chatInput.toLowerCase().includes('length of credit history')) {
      setRemoveCreditHistory(true);
      setTimeout(() => {
        setMessages([...newMessages, { role: 'system', content: "Understood. I've removed the 'Length of Credit History' section from the blog article to keep it more focused on immediate actions." }]);
        showSuccess("Blog content updated!");
      }, 1000);
    }
    setChatInput('');
  };

  const handleFinalize = (id: number) => {
    if (finalizedAssets.includes(id)) {
      setFinalizedAssets(finalizedAssets.filter(aid => aid !== id));
    } else {
      setFinalizedAssets([...finalizedAssets, id]);
    }
    setSelectedAssetId(null);
  };

  const handleApproveAll = () => {
    setFinalizedAssets(assets.map(a => a.id));
    showSuccess("All assets approved for validation.");
  };

  const handleBringSpecialist = () => {
    showSuccess("Specialist notified. They will join the studio shortly.");
  };

  const selectedAsset = assets.find(a => a.id === selectedAssetId);

  const renderPreview = (asset: any) => {
    if (!asset) return null;
    switch (asset.type) {
      case 'Email Campaign': return <EmailPreview />;
      case 'Instagram Post': return <InstagramPreview />;
      case 'Blog Article': return <BlogPreview hideCreditHistory={removeCreditHistory} />;
      case 'Landing Page': return <LandingPagePreview />;
      default: return <div className="p-20 text-center text-[#4D4D4D] font-black uppercase tracking-widest">Preview Unavailable</div>;
    }
  };

  if (selectedAssetId === null) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full">
        <div className="bg-white border border-[#E8E8E8] rounded-md overflow-hidden shadow-sm">
          <div className="bg-[#F9F9F9] px-10 py-6 border-b border-[#E8E8E8] flex items-center justify-between">
            <div>
              <h3 className="text-base font-black text-[#16335A] tracking-widest uppercase">Production Studio</h3>
              <p className="text-[10px] font-black text-[#4D4D4D] uppercase tracking-[0.2em] mt-0.5">AI-Assisted Content Generation</p>
            </div>
            <Button 
              onClick={handleApproveAll}
              size="sm"
              className="bg-[#19998B] hover:bg-[#16335A] text-white rounded-md h-10 px-8 font-black text-[10px] uppercase tracking-widest"
            >
              Approve All Assets
            </Button>
          </div>

          <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {assets.map((asset) => {
                const isFinalized = finalizedAssets.includes(asset.id);
                return (
                  <Card 
                    key={asset.id} 
                    className={cn(
                      "border border-[#E8E8E8] bg-white rounded-md overflow-hidden group hover:border-[#19998B] transition-all shadow-none relative",
                      isFinalized && "border-[#19998B] ring-1 ring-[#19998B]"
                    )}
                  >
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div className={cn("w-12 h-12 rounded-md flex items-center justify-center border border-[#E8E8E8] relative", asset.color)}>
                          <asset.icon size={24} />
                          {isFinalized && (
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#19998B] rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                              <Check size={12} />
                            </div>
                          )}
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-[#B3BDCC] hover:text-[#000000]">
                              <MoreVertical size={16} />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="rounded-md border-[#E8E8E8]">
                            <DropdownMenuItem onClick={() => handleFinalize(asset.id)} className="font-black text-[10px] uppercase tracking-widest">
                              {isFinalized ? 'Unapprove' : 'Approve'}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleBringSpecialist} className="font-black text-[10px] uppercase tracking-widest text-[#EA1313]">
                              Escalate
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <h4 className="font-black text-[#000000] text-base mb-1.5">{asset.name}</h4>
                      <p className="text-[10px] font-black text-[#4D4D4D] uppercase tracking-widest mb-4">{asset.type}</p>
                      <p className="text-sm text-[#4D4D4D] leading-relaxed mb-6 line-clamp-2 font-medium">{asset.desc}</p>
                      <Button 
                        onClick={() => setSelectedAssetId(asset.id)}
                        size="sm"
                        className="w-full bg-[#16335A] hover:bg-[#000000] text-white rounded-none h-9 font-black text-[10px] uppercase tracking-widest"
                      >
                        Open Studio
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[60] bg-white flex flex-col animate-in fade-in slide-in-from-right-4 duration-500">
      <header className="h-16 border-b border-[#E8E8E8] px-8 flex items-center justify-between bg-white shrink-0">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setSelectedAssetId(null)}
            className="p-2 hover:bg-[#F9F9F9] rounded-md text-[#4D4D4D] hover:text-[#000000] transition-all"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="h-6 w-[1px] bg-[#E8E8E8]" />
          <div className="flex items-center gap-4">
            <div className={cn("w-9 h-9 rounded-md flex items-center justify-center border border-[#E8E8E8]", selectedAsset?.color)}>
              {selectedAsset && <selectedAsset.icon size={18} />}
            </div>
            <div>
              <h3 className="font-black text-[#000000] text-sm tracking-tight uppercase">{selectedAsset?.name}</h3>
              <p className="text-[10px] font-black text-[#19998B] uppercase tracking-widest">Memorial AI Studio</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            onClick={handleBringSpecialist}
            variant="outline"
            size="sm"
            className="rounded-md h-9 px-4 font-black text-[10px] uppercase tracking-widest text-[#EA1313] border-[#EA1313] hover:bg-[#FCF0E9]"
          >
            <ShieldAlert size={14} className="mr-2" /> Escalate to Specialist
          </Button>
          <Button 
            onClick={() => handleFinalize(selectedAssetId)}
            size="sm"
            className="bg-[#19998B] hover:bg-[#16335A] text-white rounded-none h-9 px-6 font-black text-[10px] uppercase tracking-widest"
          >
            Finalize Asset
          </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 bg-[#F9F9F9] flex flex-col overflow-hidden">
          <div className="h-14 px-8 border-b border-[#E8E8E8] bg-white/80 backdrop-blur-md flex items-center justify-end shrink-0 gap-6">
            <div className="flex items-center gap-1 bg-[#F9F9F9] p-1 rounded-md border border-[#E8E8E8]">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setViewMode('preview')}
                className={cn("h-8 px-4 rounded-sm font-black text-[10px] uppercase tracking-widest", viewMode === 'preview' ? "bg-[#19998B] text-white shadow-sm" : "text-[#4D4D4D]")}
              >
                <Eye size={14} className="mr-2" /> Preview
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setViewMode('source')}
                className={cn("h-8 px-4 rounded-sm font-black text-[10px] uppercase tracking-widest", viewMode === 'source' ? "bg-[#19998B] text-white shadow-sm" : "text-[#4D4D4D]")}
              >
                <Code size={14} className="mr-2" /> Source
              </Button>
            </div>
            <div className="flex items-center gap-1 bg-[#F9F9F9] p-1 rounded-md border border-[#E8E8E8]">
              <button 
                onClick={() => setPreviewDevice('desktop')}
                className={cn("p-1.5 rounded-sm transition-all", previewDevice === 'desktop' ? "bg-[#19998B] text-white shadow-sm" : "text-[#4D4D4D]")}
              >
                <Monitor size={16} />
              </button>
              <button 
                onClick={() => setPreviewDevice('mobile')}
                className={cn("p-1.5 rounded-sm transition-all", previewDevice === 'mobile' ? "bg-[#19998B] text-white shadow-sm" : "text-[#4D4D4D]")}
              >
                <Smartphone size={16} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-hidden flex flex-col items-center justify-center">
            {viewMode === 'preview' ? (
              <div className={cn(
                "transition-all duration-500 flex justify-center items-center w-full h-full",
                previewDevice === 'mobile' ? "p-12" : "p-0"
              )}>
                {previewDevice === 'mobile' ? (
                  <div className="relative w-[420px] h-[840px] bg-[#000000] rounded-[50px] ring-[12px] ring-[#000000] shadow-2xl overflow-hidden border-[6px] border-[#16335A]/20">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#000000] rounded-b-2xl z-20" />
                    <div className="w-full h-full bg-white overflow-auto scrollbar-hide">
                      {renderPreview(selectedAsset)}
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-white overflow-auto">
                    {renderPreview(selectedAsset)}
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full h-full bg-[#010309] flex flex-col overflow-hidden">
                <div className="h-12 bg-[#16335A]/20 border-b border-white/5 flex items-center px-8 justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#EA1313]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#D16400]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#19998B]" />
                    </div>
                    <div className="text-[10px] font-black text-[#B3BDCC] uppercase tracking-widest">
                      {selectedAsset?.name.toLowerCase().replace(/\s+/g, '-')}.tsx
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-[#B3BDCC] hover:text-white h-8 px-3 rounded-md text-[10px] uppercase tracking-widest">
                    <Copy size={14} className="mr-2" /> Copy Code
                  </Button>
                </div>
                <ScrollArea className="flex-1">
                  <div className="p-10 font-mono text-sm leading-relaxed">
                    <pre className="text-[#B3BDCC]">
                      <span className="text-[#19998B]">import</span> React <span className="text-[#19998B]">from</span> <span className="text-[#E4F1CD]">'react'</span>;{"\n"}
                      <span className="text-[#19998B]">import</span> {"{ Button }"} <span className="text-[#19998B]">from</span> <span className="text-[#E4F1CD]">{'@/components/ui/button'}</span>;{"\n"}
                      {"\n"}
                      <span className="text-[#19998B]">const</span> <span className="text-[#19998B]">CampaignAsset</span> = () <span className="text-[#19998B]">{"=>"}</span> {"{"}{"\n"}
                      {"  "}<span className="text-[#19998B]">return</span> ({"\n"}
                      {"    "}<span className="text-[#19998B]">{"<div"}</span> <span className="text-[#19998B]">className</span>=<span className="text-[#E4F1CD]">{"\"min-h-screen bg-white\""}</span><span className="text-[#19998B]">{">"}</span>{"\n"}
                      {"      "}<span className="text-[#19998B]">{"<header"}</span> <span className="text-[#19998B]">className</span>=<span className="text-[#E4F1CD]">{"\"p-10 border-b\""}</span><span className="text-[#19998B]">{">"}</span>{"\n"}
                      {"        "}<span className="text-[#19998B]">{"<h1"}</span> <span className="text-[#19998B]">className</span>=<span className="text-[#E4F1CD]">{"\"text-4xl font-black\""}</span><span className="text-[#19998B]">{">"}</span>{"\n"}
                      {"          "}START YOUR VOYAGE{"\n"}
                      {"        "}<span className="text-[#19998B]">{"</h1>"}</span>{"\n"}
                      {"      "}<span className="text-[#19998B]">{"</header>"}</span>{"\n"}
                      {"    "}<span className="text-[#19998B]">{"</div>"}</span>{"\n"}
                      {"  "});{"\n"}
                      {"};"}{"\n"}
                      {"\n"}
                      <span className="text-[#19998B]">export default</span> CampaignAsset;
                    </pre>
                  </div>
                </ScrollArea>
              </div>
            )}
          </div>
        </div>

        <div className="w-[400px] border-l border-[#E8E8E8] flex flex-col bg-white shrink-0">
          <div className="p-6 border-b border-[#F9F9F9] flex items-center justify-between bg-[#F9F9F9]/50 shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#16335A] rounded-sm flex items-center justify-center text-white shadow-sm">
                <Sparkles size={20} />
              </div>
              <div>
                <span className="font-black text-[#000000] text-[11px] uppercase tracking-widest">Creative Assistant</span>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="w-1.5 h-1.5 bg-[#19998B] rounded-full animate-pulse" />
                  <p className="text-[9px] font-black text-[#4D4D4D] uppercase tracking-widest">Ready to refine</p>
                </div>
              </div>
            </div>
          </div>
          
          <ScrollArea className="flex-1 p-8">
            <div className="space-y-10">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "flex flex-col gap-3 max-w-[90%]",
                  msg.role === 'system' ? "items-start" : "items-end ml-auto"
                )}>
                  <div className={cn(
                    "p-5 rounded-md text-sm leading-relaxed shadow-sm border",
                    msg.role === 'system' 
                      ? "bg-white text-[#4D4D4D] rounded-tl-none border-[#E8E8E8]" 
                      : "bg-[#16335A] text-white rounded-tr-none font-bold border-[#16335A]"
                  )}>
                    {msg.content}
                  </div>
                  <span className="text-[9px] font-black text-[#B3BDCC] uppercase tracking-widest px-1">
                    {msg.role === 'system' ? 'Assistant' : 'You'}
                  </span>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-8 border-t border-[#E8E8E8] bg-[#F9F9F9]/50 shrink-0">
            <div className="relative group">
              <Textarea 
                placeholder="Ask for changes..."
                className="min-h-[120px] rounded-md border-[#E8E8E8] focus:ring-[#19998B] pr-14 p-5 resize-none text-sm font-medium bg-white shadow-inner transition-all"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSendMessage())}
              />
              <Button 
                onClick={handleSendMessage}
                size="icon" 
                className="absolute bottom-4 right-4 bg-[#16335A] hover:bg-[#000000] text-white rounded-md h-10 w-10 shadow-md"
              >
                <Send size={18} />
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-4">
              <button className="text-[9px] font-black text-[#4D4D4D] hover:text-[#19998B] uppercase tracking-widest flex items-center gap-2 transition-colors">
                <RefreshCw size={12} /> Regenerate
              </button>
              <div className="h-3 w-[1px] bg-[#E8E8E8]" />
              <button className="text-[9px] font-black text-[#4D4D4D] hover:text-[#19998B] uppercase tracking-widest flex items-center gap-2 transition-colors">
                <Search size={12} /> Reference Strategy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;