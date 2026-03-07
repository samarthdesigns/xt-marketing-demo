"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { 
  CheckCircle2, 
  Mail, 
  Instagram, 
  FileText, 
  Globe, 
  AlertCircle,
  Eye,
  Monitor,
  Smartphone,
  X,
  Send,
  RefreshCw,
  Search,
  Sparkles,
  Check
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { showSuccess } from '@/utils/toast';
import EmailPreview from './previews/EmailPreview';
import InstagramPreview from './previews/InstagramPreview';
import BlogPreview from './previews/BlogPreview';
import LandingPagePreview from './previews/LandingPagePreview';

const Step5 = () => {
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [chatInput, setChatInput] = useState('');
  const [deckSections, setDeckSections] = useState([
    { id: 'summary', title: 'EXECUTIVE SUMMARY', content: 'The Voyage Student Credit Card is positioned to disrupt the entry-level financial market by solving the "No Credit History" paradox for Gen Z students.', visible: true },
    { id: 'market', title: 'MARKET ANALYSIS', content: 'Our research indicates a 35% increase in "financial anxiety" among Gen Z. Traditional banks focus on credit limits; Voyage focuses on credit literacy.', visible: true },
    { id: 'audience', title: 'TARGET AUDIENCE', content: '"The Future Builder": 18-22 year old college students with zero credit history but high future earning potential.', visible: true },
    { id: 'narrative', title: 'CORE NARRATIVE', content: '"Your Financial Co-Pilot": Moving away from predatory lending toward an educational, empowering partnership.', visible: true }
  ]);

  const [messages, setMessages] = useState([
    { role: 'system', content: "I've reviewed the strategy deck. Everything is aligned with the 'Financial Co-Pilot' narrative. You can ask me to add or remove sections." }
  ]);

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    const newMessages = [...messages, { role: 'user', content: chatInput }];
    setMessages(newMessages);
    
    const input = chatInput.toLowerCase();
    if (input.includes('remove') && input.includes('market')) {
      setDeckSections(prev => prev.map(s => s.id === 'market' ? { ...s, visible: false } : s));
      setMessages([...newMessages, { role: 'system', content: "Understood. I've removed the Market Analysis section from the deck." }]);
      showSuccess("Strategy deck updated.");
    } else if (input.includes('add') && input.includes('risk')) {
      const newSection = { id: 'risk', title: 'RISK MITIGATION', content: 'Implementing tiered credit limits and mandatory financial literacy modules to ensure responsible usage.', visible: true };
      setDeckSections(prev => [...prev, newSection]);
      setMessages([...newMessages, { role: 'system', content: "I've added a Risk Mitigation section to the strategy deck." }]);
      showSuccess("Strategy deck updated.");
    } else {
      setMessages([...newMessages, { role: 'system', content: "I can help you modify the strategy deck. Try asking to 'remove market analysis' or 'add risk mitigation section'." }]);
    }
    setChatInput('');
  };

  const handleShare = () => {
    showSuccess("Review link copied to clipboard!");
  };

  const assets = [
    { id: 1, name: 'Welcome Voyage Email', type: 'Email Campaign', icon: Mail, detail: 'Optimized for 45k subscribers. Focuses on the "No Credit History" value prop.', color: 'text-[#16335A] bg-[#B3BDCC]/20' },
    { id: 2, name: 'Credit Score 101', type: 'Instagram Post', icon: Instagram, detail: '1080x1080 Carousel. Educational content with high-contrast visuals.', color: 'text-[#19998B] bg-[#C3E0DB]/20' },
    { id: 3, name: 'Student Finance Guide', type: 'Blog Article', icon: FileText, detail: 'SEO Optimized Article. 1,200 words covering credit building basics.', color: 'text-[#16335A] bg-[#B3BDCC]/20' },
    { id: 4, name: 'Voyage Application', type: 'Landing Page', icon: Globe, detail: 'High-conversion checkout. Mobile-first design with 0.7s load time.', color: 'text-[#19998B] bg-[#C3E0DB]/20' }
  ];

  const renderPreview = (asset: any) => {
    if (!asset) return null;
    switch (asset.type) {
      case 'Email Campaign': return <EmailPreview />;
      case 'Instagram Post': return <InstagramPreview />;
      case 'Blog Article': return <BlogPreview />;
      case 'Landing Page': return <LandingPagePreview />;
      default: return <div className="p-20 text-center text-[#4D4D4D] font-black uppercase tracking-widest">Preview Unavailable</div>;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500 w-full">
      <div className="text-left space-y-1">
        <h3 className="text-2xl font-black text-[#000000] tracking-tight uppercase">Campaign Readiness Report</h3>
        <p className="text-sm font-medium text-[#4D4D4D]">All production and validation cycles for Voyage Credit Card completed.</p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <Card className="border border-[#E8E8E8] bg-white rounded-md overflow-hidden shadow-sm">
          <CardContent className="p-10">
            <div className="flex items-center justify-between mb-10 pb-8 border-b border-[#E8E8E8]">
              <div>
                <h4 className="text-xl font-black text-[#000000] uppercase tracking-tight">Voyage Student Launch</h4>
                <p className="text-[10px] font-black text-[#4D4D4D] uppercase tracking-widest mt-1">Memorize Bank • Q3 2024</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#FCF0E9] px-4 py-2 rounded-sm border border-[#EA1313]/10 flex items-center gap-3">
                  <AlertCircle size={14} className="text-[#EA1313]" />
                  <p className="text-[10px] font-black text-[#EA1313] uppercase tracking-widest">Awaiting Manager Approval</p>
                  <button 
                    onClick={() => showSuccess("Approval request sent to manager.")}
                    className="ml-2 text-[9px] font-black text-white bg-[#EA1313] px-3 py-1 rounded-sm uppercase tracking-widest hover:bg-[#230B00] transition-colors"
                  >
                    Request
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: 'Strategy', value: 'Financial Co-Pilot', color: 'text-[#16335A]' },
                { label: 'Assets', value: '4 Deliverables', color: 'text-[#19998B]' },
                { label: 'QA Status', value: '100% Passed', color: 'text-[#19998B]' },
                { label: 'Forecast', value: '4.8% Conv.', color: 'text-[#16335A]' }
              ].map((stat, i) => (
                <div key={i} className="p-5 bg-[#F9F9F9] rounded-sm border border-[#E8E8E8] space-y-1">
                  <p className={cn("font-black text-[9px] uppercase tracking-widest opacity-70", stat.color)}>{stat.label}</p>
                  <p className="text-base font-black text-[#000000]">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6 mb-10">
              <h5 className="font-black text-[#000000] text-base uppercase tracking-tight">Asset Showcase</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {assets.map((asset, i) => (
                  <div key={i} className="bg-white border border-[#E8E8E8] rounded-md overflow-hidden p-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={cn("w-10 h-10 rounded-sm flex items-center justify-center border border-[#E8E8E8] relative", asset.color)}>
                          <asset.icon size={20} />
                          <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#19998B] rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                            <Check size={8} />
                          </div>
                        </div>
                        <div>
                          <h6 className="font-black text-[#000000] text-sm">{asset.name}</h6>
                          <p className="text-[9px] font-black text-[#4D4D4D] uppercase tracking-widest">{asset.type}</p>
                        </div>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-[#16335A] hover:bg-[#F9F9F9] rounded-md font-black text-[9px] uppercase tracking-widest h-8 border border-[#E8E8E8]">
                            <Eye size={14} className="mr-2" /> Preview
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-none w-screen h-screen p-0 border-none bg-[#F9F9F9] flex flex-col overflow-hidden">
                          <div className="h-16 bg-white border-b border-[#E8E8E8] px-10 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-6">
                              <div>
                                <h3 className="font-black text-[#000000] text-lg tracking-tight">{asset.name}</h3>
                                <p className="text-[10px] font-black text-[#16335A] uppercase tracking-widest">Final Asset Preview</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-6">
                              <div className="flex items-center gap-1 bg-[#F9F9F9] p-1 rounded-sm border border-[#E8E8E8]">
                                <button 
                                  onClick={() => setPreviewDevice('desktop')}
                                  className={cn("p-2 rounded-sm transition-all", previewDevice === 'desktop' ? "bg-[#19998B] text-white shadow-sm" : "text-[#4D4D4D]")}
                                >
                                  <Monitor size={20} />
                                </button>
                                <button 
                                  onClick={() => setPreviewDevice('mobile')}
                                  className={cn("p-2 rounded-sm transition-all", previewDevice === 'mobile' ? "bg-[#19998B] text-white shadow-sm" : "text-[#4D4D4D]")}
                                >
                                  <Smartphone size={20} />
                                </button>
                              </div>
                              <div className="h-8 w-[1px] bg-[#E8E8E8] mx-2" />
                              <DialogTrigger asChild>
                                <button className="p-2 bg-[#16335A] text-white hover:bg-[#000000] rounded-sm transition-all">
                                  <X size={24} />
                                </button>
                              </DialogTrigger>
                            </div>
                          </div>
                          <div className="flex-1 overflow-hidden flex items-center justify-center">
                            {previewDevice === 'mobile' ? (
                              <div className="relative w-[420px] h-[840px] bg-[#000000] rounded-[50px] ring-[12px] ring-[#000000] shadow-2xl overflow-hidden border-[6px] border-[#16335A]/20 my-12">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#000000] rounded-b-2xl z-20" />
                                <div className="w-full h-full bg-white overflow-auto scrollbar-hide">
                                  {renderPreview(asset)}
                                </div>
                              </div>
                            ) : (
                              <div className="w-full h-full bg-white overflow-auto">
                                {renderPreview(asset)}
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <p className="text-xs text-[#4D4D4D] font-medium leading-relaxed">{asset.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-[#E8E8E8]">
              <Button onClick={handleShare} className="flex-1 bg-[#16335A] hover:bg-[#010309] text-white rounded-none h-14 font-black text-sm uppercase tracking-widest border border-[#010309] shadow-lg">
                Share Review Link
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex-1 rounded-none h-14 border-[#E8E8E8] text-[#000000] hover:bg-[#F9F9F9] font-black text-sm uppercase tracking-widest">
                    View Strategy Deck
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-none w-screen h-screen p-0 border-none bg-[#F9F9F9] flex flex-col overflow-hidden">
                  <div className="h-16 bg-[#16335A] border-b border-[#010309] px-10 flex items-center justify-between shrink-0 text-white">
                    <div>
                      <h3 className="font-black text-white text-lg tracking-tight uppercase">Voyage Strategy Deck</h3>
                      <p className="text-[11px] font-black text-[#B3BDCC] uppercase tracking-widest">Confidential • Memorize Bank Q3 2024</p>
                    </div>
                    <DialogTrigger asChild>
                      <button className="p-2 bg-white text-[#16335A] hover:bg-[#F9F9F9] rounded-sm transition-all">
                        <X size={24} />
                      </button>
                    </DialogTrigger>
                  </div>
                  
                  <div className="flex-1 flex overflow-hidden">
                    <ScrollArea className="flex-1 bg-white">
                      <div className="max-w-5xl mx-auto py-24 px-16 space-y-40">
                        {deckSections.filter(s => s.visible).map((section, idx) => (
                          <section key={section.id} className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="space-y-6">
                              <Badge className="bg-[#B3BDCC]/20 text-[#16335A] border border-[#16335A]/20 px-5 py-2 rounded-full font-black text-[11px] uppercase tracking-widest">Page 0{idx + 1}</Badge>
                              <h2 className="text-7xl font-black text-[#000000] tracking-tighter leading-none uppercase">{section.title}</h2>
                              <p className="text-3xl text-[#4D4D4D] font-medium max-w-4xl">{section.content}</p>
                            </div>
                            
                            {section.id === 'summary' && (
                              <div className="grid grid-cols-3 gap-10">
                                <div className="p-10 bg-[#F9F9F9] rounded-md border border-[#E8E8E8] space-y-6">
                                  <h4 className="text-2xl font-black text-[#000000]">Primary Objective</h4>
                                  <p className="text-lg text-[#4D4D4D] leading-relaxed font-medium">Acquire 5,000 active student cardholders within the first 90 days of launch across 50 target university campuses.</p>
                                </div>
                                <div className="p-10 bg-[#F9F9F9] rounded-md border border-[#E8E8E8] space-y-6">
                                  <h4 className="text-2xl font-black text-[#000000]">Target Audience</h4>
                                  <p className="text-lg text-[#4D4D4D] leading-relaxed font-medium">"The Future Builder": 18-22 year old college students with zero credit history but high future earning potential.</p>
                                </div>
                                <div className="p-10 bg-[#F9F9F9] rounded-md border border-[#E8E8E8] space-y-6">
                                  <h4 className="text-2xl font-black text-[#000000]">Core Narrative</h4>
                                  <p className="text-lg text-[#4D4D4D] leading-relaxed font-medium">"Your Financial Co-Pilot": Moving away from predatory lending toward an educational, empowering partnership.</p>
                                </div>
                              </div>
                            )}

                            {section.id === 'market' && (
                              <div className="grid grid-cols-12 gap-16">
                                <div className="col-span-7 space-y-10">
                                  <div className="p-12 bg-[#16335A] rounded-lg text-white space-y-8 shadow-2xl">
                                    <h4 className="text-3xl font-black">Competitive Landscape</h4>
                                    <div className="space-y-8">
                                      <div className="flex items-center justify-between pb-6 border-b border-white/10">
                                        <span className="font-bold text-xl text-[#B3BDCC]">Chase Freedom Student</span>
                                        <span className="font-black text-xl text-[#EA1313]">High Barrier</span>
                                      </div>
                                      <div className="flex items-center justify-between pb-6 border-b border-white/10">
                                        <span className="font-bold text-xl text-[#B3BDCC]">Deserve EDU</span>
                                        <span className="font-black text-xl text-[#D16400]">Limited Rewards</span>
                                      </div>
                                      <div className="flex items-center justify-between">
                                        <span className="font-black text-xl text-[#B3BDCC]">Voyage (Memorize)</span>
                                        <span className="font-black text-xl text-[#19998B]">Zero Barrier + Education</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-span-5 space-y-10">
                                  <div className="p-10 bg-[#B3BDCC]/20 rounded-md border border-[#16335A]/20 space-y-8">
                                    <h4 className="text-2xl font-black text-[#16335A]">Market Opportunity</h4>
                                    <div className="space-y-6">
                                      <div className="flex items-end gap-3">
                                        <div className="w-full h-16 bg-[#B3BDCC] rounded-sm" />
                                        <span className="text-sm font-black text-[#16335A]">2022</span>
                                      </div>
                                      <div className="flex items-end gap-3">
                                        <div className="w-full h-32 bg-[#16335A]/60 rounded-sm" />
                                        <span className="text-sm font-black text-[#16335A]">2023</span>
                                      </div>
                                      <div className="flex items-end gap-3">
                                        <div className="w-full h-56 bg-[#16335A] rounded-sm" />
                                        <span className="text-sm font-black text-[#16335A]">2024 (EST)</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </section>
                        ))}
                      </div>
                    </ScrollArea>

                    <div className="w-[400px] border-l border-[#E8E8E8] flex flex-col bg-white shrink-0">
                      <div className="p-6 border-b border-[#F9F9F9] flex items-center gap-4 bg-[#F9F9F9]/50 shrink-0">
                        <div className="w-10 h-10 bg-[#16335A] rounded-sm flex items-center justify-center text-white shadow-sm">
                          <Sparkles size={20} />
                        </div>
                        <div>
                          <span className="font-black text-[#000000] text-[11px] uppercase tracking-widest">Readiness Assistant</span>
                          <div className="flex items-center gap-2 mt-0.5">
                            <div className="w-1.5 h-1.5 bg-[#19998B] rounded-full animate-pulse" />
                            <p className="text-[9px] font-black text-[#4D4D4D] uppercase tracking-widest">Analyzing Strategy</p>
                          </div>
                        </div>
                      </div>
                      
                      <ScrollArea className="flex-1 p-6">
                        <div className="space-y-8">
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

                      <div className="p-6 border-t border-[#E8E8E8] bg-[#F9F9F9]/50 shrink-0">
                        <div className="relative group">
                          <Textarea 
                            placeholder="Ask about strategy..."
                            className="min-h-[100px] rounded-md border-[#E8E8E8] focus:ring-[#19998B] pr-14 p-5 resize-none text-sm font-medium bg-white shadow-inner transition-all"
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSendMessage())}
                          />
                          <Button 
                            onClick={handleSendMessage}
                            size="icon" 
                            className="absolute bottom-4 right-4 bg-[#16335A] hover:bg-[#000000] text-white rounded-sm h-10 w-10 shadow-md"
                          >
                            <Send size={18} />
                          </Button>
                        </div>
                        <div className="flex items-center gap-6 mt-4">
                          <button className="text-[9px] font-black text-[#4D4D4D] hover:text-[#19998B] uppercase tracking-widest flex items-center gap-2 transition-colors">
                            <RefreshCw size={12} /> Re-analyze
                          </button>
                          <div className="h-3 w-[1px] bg-[#E8E8E8] mx-2" />
                          <button className="text-[9px] font-black text-[#4D4D4D] hover:text-[#19998B] uppercase tracking-widest flex items-center gap-2 transition-colors">
                            <Search size={12} /> View Logs
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Step5;