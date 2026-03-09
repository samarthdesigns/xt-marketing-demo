"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ShieldCheck, Mail, Instagram, Globe, AlertTriangle, AlertCircle, FileText, Eye, Smartphone, Monitor, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import EmailPreview from './previews/EmailPreview';
import InstagramPreview from './previews/InstagramPreview';
import BlogPreview from './previews/BlogPreview';
import LandingPagePreview from './previews/LandingPagePreview';

const Step4 = ({ onNext }: { onNext: () => void }) => {
  const [testingStates, setTestingStates] = useState<Record<number, 'idle' | 'running' | 'passed' | 'warning'>>({
    1: 'idle', 2: 'idle', 3: 'idle', 4: 'idle'
  });
  const [testProgress, setTestProgress] = useState<Record<number, number>>({
    1: 0, 2: 0, 3: 0, 4: 0
  });
  const [testStep, setTestStep] = useState<Record<number, string>>({
    1: '', 2: '', 3: '', 4: ''
  });
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');

  const assets = [
    { 
      id: 1, 
      name: 'Welcome Voyage Email', 
      type: 'Email Campaign', 
      icon: Mail,
      color: 'text-[#16335A] bg-[#B3BDCC]/20',
      tests: [
        { name: 'Spam Check', status: 'passed', detail: 'Score: 0.1/10' },
        { name: 'Link Validation', status: 'passed', detail: '8 links active' }
      ],
      needsTeam: false
    },
    { 
      id: 2, 
      name: 'Credit Score 101', 
      type: 'Instagram Post', 
      icon: Instagram,
      color: 'text-[#19998B] bg-[#C3E0DB]/20',
      tests: [
        { name: 'Aspect Ratio', status: 'passed', detail: '1080x1080' },
        { name: 'Contrast Check', status: 'warning', detail: 'Low contrast on text' }
      ],
      needsTeam: true,
      teamReason: 'Visual contrast on educational text requires manual adjustment.'
    },
    { 
      id: 3, 
      name: 'Student Finance Guide', 
      type: 'Blog Article', 
      icon: FileText,
      color: 'text-[#16335A] bg-[#B3BDCC]/20',
      tests: [
        { name: 'Readability', status: 'passed', detail: 'Grade 7' },
        { name: 'SEO Meta', status: 'passed', detail: 'Optimized' }
      ],
      needsTeam: false
    },
    { 
      id: 4, 
      name: 'Voyage Application', 
      type: 'Landing Page', 
      icon: Globe,
      color: 'text-[#19998B] bg-[#C3E0DB]/20',
      tests: [
        { name: 'Load Speed', status: 'passed', detail: '0.7s (LCP)' },
        { name: 'Mobile Resp.', status: 'passed', detail: '100% Score' }
      ],
      needsTeam: false
    },
  ];

  const runTest = (id: number) => {
    setTestingStates(prev => ({ ...prev, [id]: 'running' }));
    let p = 0;
    const steps = ["Initializing...", "Analyzing Deliverables...", "Simulating User Flow...", "Validating Standards...", "Complete"];
    const interval = setInterval(() => {
      p += 10;
      setTestProgress(prev => ({ ...prev, [id]: p }));
      const stepIdx = Math.min(Math.floor(p / 25), steps.length - 1);
      setTestStep(prev => ({ ...prev, [id]: steps[stepIdx] }));
      if (p >= 100) {
        clearInterval(interval);
        const asset = assets.find(a => a.id === id);
        setTestingStates(prev => ({ ...prev, [id]: asset?.needsTeam ? 'warning' : 'passed' }));
      }
    }, 150);
  };

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
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full">
      <div className="bg-white border border-[#E8E8E8] rounded-md overflow-hidden shadow-sm">
        <div className="bg-[#F9F9F9] px-10 py-6 border-b border-[#E8E8E8] flex items-center justify-between">
          <div>
            <h3 className="text-base font-black text-[#16335A] tracking-widest uppercase">Quality Assurance</h3>
            <p className="text-[10px] font-black text-[#4D4D4D] uppercase tracking-[0.2em] mt-0.5">Automated Compliance & Performance Testing</p>
          </div>
          <Button 
            onClick={() => assets.forEach(a => runTest(a.id))}
            size="sm"
            className="bg-[#16335A] hover:bg-[#000000] text-white rounded-md h-10 px-8 font-black text-[10px] uppercase tracking-widest"
          >
            Run All Simulations
          </Button>
        </div>

        <div className="p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assets.map((asset) => (
              <Card key={asset.id} className="border border-[#E8E8E8] bg-white rounded-md overflow-hidden shadow-none">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className={cn("w-12 h-12 rounded-md flex items-center justify-center border border-[#E8E8E8]", asset.color)}>
                        <asset.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-black text-[#000000] text-base">{asset.name}</h4>
                        <p className="text-[10px] font-black text-[#4D4D4D] uppercase tracking-widest">{asset.type}</p>
                      </div>
                    </div>
                    <Badge className={cn(
                      "px-3 py-1 rounded-full font-black text-[9px] uppercase tracking-widest border",
                      testingStates[asset.id] === 'passed' ? "bg-[#E4F1CD] text-[#1A2306] border-[#A7CF48]/20" : 
                      testingStates[asset.id] === 'warning' ? "bg-[#FCF0E9] text-[#230B00] border-[#D16400]/20" :
                      testingStates[asset.id] === 'running' ? "bg-[#B3BDCC]/20 text-[#16335A] border-[#16335A]/20" :
                      "bg-[#F9F9F9] text-[#4D4D4D] border-[#E8E8E8]"
                    )}>
                      {testingStates[asset.id]}
                    </Badge>
                  </div>

                  {testingStates[asset.id] === 'running' ? (
                    <div className="space-y-4 mb-8 p-6 bg-[#F9F9F9] rounded-md border border-[#E8E8E8]">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-[#4D4D4D]">
                        <span>{testStep[asset.id]}</span>
                        <span>{testProgress[asset.id]}%</span>
                      </div>
                      <Progress value={testProgress[asset.id]} className="h-2 bg-white border border-[#E8E8E8]" />
                    </div>
                  ) : testingStates[asset.id] !== 'idle' ? (
                    <div className="space-y-3 mb-8">
                      {asset.tests.map((test, i) => (
                        <div key={i} className="flex items-center justify-between text-sm p-4 bg-[#F9F9F9]/50 rounded-md border border-[#E8E8E8]">
                          <div className="flex items-center gap-3">
                            <ShieldCheck size={18} className={cn(test.status === 'passed' ? "text-[#19998B]" : "text-[#EA1313]")} />
                            <span className="font-bold text-[#000000]">{test.name}</span>
                          </div>
                          <span className="text-[#4D4D4D] font-medium">{test.detail}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="h-[120px] mb-8 flex items-center justify-center border border-dashed border-[#E8E8E8] rounded-md bg-[#F9F9F9]/30">
                      <p className="text-[10px] font-black text-[#B3BDCC] uppercase tracking-widest">Run simulation to see results</p>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <Button 
                      onClick={() => runTest(asset.id)}
                      disabled={testingStates[asset.id] === 'running'}
                      size="sm"
                      className={cn(
                        "flex-1 rounded-md h-11 font-black text-[10px] uppercase tracking-widest transition-all",
                        testingStates[asset.id] === 'idle' 
                          ? "bg-[#16335A] hover:bg-[#000000] text-white" 
                          : "bg-white hover:bg-[#F9F9F9] text-[#000000] border border-[#E8E8E8]"
                      )}
                    >
                      {testingStates[asset.id] === 'idle' ? "Run Test" : "Re-run"}
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="flex-1 text-[#16335A] hover:bg-[#F9F9F9] rounded-md font-black text-[10px] uppercase tracking-widest h-11 border border-[#E8E8E8]">
                          <Eye size={16} className="mr-2" /> Preview
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-none w-screen h-screen p-0 border-none bg-[#F9F9F9] flex flex-col overflow-hidden">
                        <div className="h-16 bg-white border-b border-[#E8E8E8] px-8 flex items-center justify-between shrink-0">
                          <div className="flex items-center gap-5">
                            <div className={cn("w-10 h-10 rounded-md flex items-center justify-center border border-[#E8E8E8]", asset.color)}>
                              <asset.icon size={20} />
                            </div>
                            <div>
                              <h3 className="font-black text-[#000000] text-sm tracking-tight uppercase">{asset.name}</h3>
                              <p className="text-[10px] font-black text-[#16335A] uppercase tracking-widest">Full Screen Preview</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 bg-[#F9F9F9] p-1 rounded-md border border-[#E8E8E8]">
                              <button 
                                onClick={() => setPreviewDevice('desktop')}
                                className={cn("p-1.5 rounded-sm transition-all", previewDevice === 'desktop' ? "bg-[#19998B] text-white shadow-sm" : "text-[#4D4D4D]")}
                              >
                                <Monitor size={18} />
                              </button>
                              <button 
                                onClick={() => setPreviewDevice('mobile')}
                                className={cn("p-1.5 rounded-sm transition-all", previewDevice === 'mobile' ? "bg-[#19998B] text-white shadow-sm" : "text-[#4D4D4D]")}
                              >
                                <Smartphone size={18} />
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
                            <div className="relative w-[420px] h-[840px] bg-[#000000] rounded-[50px] ring-[12px] ring-[#000000] shadow-2xl overflow-hidden border-[6px] border-[#16335A]/20 my-10">
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
                  
                  {testingStates[asset.id] === 'warning' && (
                    <div className="mt-6 p-4 bg-[#FCF0E9] border border-[#EA1313]/10 rounded-md flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <AlertCircle className="text-[#EA1313]" size={18} />
                        <p className="text-[11px] font-bold text-[#230B00]">{asset.teamReason}</p>
                      </div>
                      <Button size="sm" className="bg-[#EA1313] hover:bg-[#230B00] text-white rounded-md font-black text-[9px] h-8 px-4 uppercase tracking-widest">
                        Notify Team
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;