"use client";

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import CampaignDashboard from '@/components/campaign/CampaignDashboard';
import Step1 from '@/components/campaign/Step1';
import Step2 from '@/components/campaign/Step2';
import Step3 from '@/components/campaign/Step3';
import Step4 from '@/components/campaign/Step4';
import Step5 from '@/components/campaign/Step5';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { cn } from '@/lib/utils';
import { Check, Target, Sparkles, PenTool, ShieldCheck, Rocket, ArrowRight, LayoutDashboard, ChevronRight, AlertCircle } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const CampaignManagement = () => {
  const [view, setView] = useState<'dashboard' | 'stepper'>('dashboard');
  const [currentStep, setCurrentStep] = useState(1);
  const [showSaveDialog, setShowSaveDialog] = useState(false);

  const steps = [
    { id: 1, title: 'Strategy', sub: 'Define goals & audience', icon: Target, color: 'bg-[#16335A]' },
    { id: 2, title: 'Architecture', sub: 'Map deliverables', icon: Sparkles, color: 'bg-[#19998B]' },
    { id: 3, title: 'Production', sub: 'Generate content', icon: PenTool, color: 'bg-[#16335A]' },
    { id: 4, title: 'Validation', sub: 'Compliance & QA', icon: ShieldCheck, color: 'bg-[#19998B]' },
    { id: 5, title: 'Readiness', sub: 'Final sign-off', icon: Rocket, color: 'bg-[#000000]' },
  ];

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5));
  };

  const handleCampaignsClick = (e: React.MouseEvent) => {
    if (view === 'stepper') {
      e.preventDefault();
      setShowSaveDialog(true);
    }
  };

  const handleConfirmSave = () => {
    setShowSaveDialog(false);
    setView('dashboard');
    showSuccess("Campaign draft saved successfully.");
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <TopBar onCampaignsClick={handleCampaignsClick} />
      <main className="max-w-[1400px] mx-auto px-8 py-8">
        {view === 'dashboard' ? (
          <CampaignDashboard onNewCampaign={() => setView('stepper')} />
        ) : (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowSaveDialog(true)}
                  className="p-2 hover:bg-[#E8E8E8] rounded-md text-[#4D4D4D] hover:text-[#000000]"
                >
                  <LayoutDashboard size={20} />
                </Button>
                <h1 className="text-xl font-black text-[#000000] tracking-tight uppercase">Campaign Orchestrator</h1>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="rounded-md border-[#E8E8E8] h-9 px-6 font-black text-[10px] uppercase tracking-widest text-[#4D4D4D]">Save Draft</Button>
                <Button size="sm" className="bg-[#16335A] hover:bg-[#000000] text-white rounded-md h-9 px-6 font-black text-[10px] uppercase tracking-widest">Export Plan</Button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {steps.map((step, index) => {
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;
                
                return (
                  <React.Fragment key={step.id}>
                    <button
                      onClick={() => isCompleted && setCurrentStep(step.id)}
                      disabled={!isCompleted && !isActive}
                      className={cn(
                        "flex-1 relative p-4 rounded-md border transition-all duration-300 text-left",
                        isActive 
                          ? "bg-white border-[#16335A] shadow-sm" 
                          : isCompleted 
                            ? "bg-white border-[#19998B]" 
                            : "bg-[#F9F9F9] border-[#E8E8E8] opacity-60"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-8 h-8 rounded-sm flex items-center justify-center text-white shrink-0",
                          isActive ? step.color : isCompleted ? "bg-[#19998B]" : "bg-[#B3BDCC]"
                        )}>
                          {isCompleted ? <Check size={16} /> : <step.icon size={16} />}
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-[8px] font-black uppercase tracking-widest text-[#4D4D4D]">Step 0{step.id}</p>
                          <h3 className="font-black text-[11px] text-[#000000] uppercase tracking-tight truncate">{step.title}</h3>
                          <p className="text-[9px] font-black text-[#000000] uppercase tracking-tighter truncate">{step.sub}</p>
                        </div>
                      </div>
                    </button>
                    {index < steps.length - 1 && (
                      <ChevronRight size={14} className="text-[#E8E8E8]" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            <div className="min-h-[500px] space-y-8">
              {currentStep === 1 && <Step1 onNext={handleNext} />}
              {currentStep === 2 && <Step2 onNext={handleNext} />}
              {currentStep === 3 && <Step3 onNext={handleNext} />}
              {currentStep === 4 && <Step4 onNext={handleNext} />}
              {currentStep === 5 && <Step5 />}

              {currentStep < 5 && (
                <Button 
                  onClick={handleNext}
                  variant="ghost"
                  className="w-full bg-white hover:bg-[#F9F9F9] border border-[#E8E8E8] rounded-none h-16 font-black text-xs uppercase tracking-[0.2em] text-[#16335A] group"
                >
                  Continue to {steps[currentStep].title} <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Save Draft Confirmation Dialog */}
      <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
        <DialogContent className="max-w-md p-0 border-none bg-white overflow-hidden rounded-md">
          <div className="p-10 space-y-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-[#FCF0E9] rounded-full flex items-center justify-center text-[#EA1313]">
                <AlertCircle size={32} />
              </div>
              <div className="space-y-2">
                <DialogTitle className="text-2xl font-black text-[#000000] uppercase tracking-tight">Save Draft?</DialogTitle>
                <DialogDescription className="text-sm font-medium text-[#4D4D4D]">
                  You are about to leave the campaign orchestrator. Would you like to save your progress as a draft?
                </DialogDescription>
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <Button 
                onClick={handleConfirmSave}
                className="w-full bg-[#16335A] hover:bg-[#000000] text-white rounded-none h-14 font-black text-sm uppercase tracking-widest shadow-lg"
              >
                Confirm (Save & Go)
              </Button>
              <Button 
                variant="ghost"
                onClick={() => setShowSaveDialog(false)}
                className="w-full text-[#4D4D4D] hover:bg-[#F9F9F9] rounded-none h-14 font-black text-sm uppercase tracking-widest"
              >
                Cancel (Stay)
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CampaignManagement;