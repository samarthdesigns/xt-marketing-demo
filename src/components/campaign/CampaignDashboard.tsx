"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, 
  MoreHorizontal, 
  Calendar, 
  Users, 
  Globe, 
  Layers, 
  Activity, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface CampaignDashboardProps {
  onNewCampaign: () => void;
}

const CampaignDashboard = ({ onNewCampaign }: CampaignDashboardProps) => {
  const activeCampaigns = [
    { 
      id: 'CMP-V01', 
      name: 'Voyage Student Launch', 
      dates: 'Aug 01 - Oct 31, 2024',
      demographics: '18-22, Students',
      coverage: 'National (US)',
      channels: ['Email', 'Social', 'Web'],
      financials: { budget: '$50k', spend: '$32k', cpa: '$12.40', roas: '4.2x' },
      performance: { reach: '125k', ctr: '3.2%', conv: '1.8%', imps: '2.4M' }
    },
    { 
      id: 'CMP-V02', 
      name: 'Credit Score 101 Series', 
      dates: 'Sep 15 - Dec 15, 2024',
      demographics: '18-25, Gen Z',
      coverage: 'Regional (East)',
      channels: ['Social', 'Video', 'Blog'],
      financials: { budget: '$25k', spend: '$18k', cpa: '$8.50', roas: '6.8x' },
      performance: { reach: '42k', ctr: '5.1%', conv: '2.4%', imps: '850k' }
    },
    { 
      id: 'CMP-V03', 
      name: 'Campus Ambassador Push', 
      dates: 'Oct 01 - Nov 30, 2024',
      demographics: '19-21, Leaders',
      coverage: '50 Universities',
      channels: ['Influencer', 'Events'],
      financials: { budget: '$15k', spend: '$5k', cpa: '$15.20', roas: '5.5x' },
      performance: { reach: '18k', ctr: '6.2%', conv: '4.1%', imps: '120k' }
    }
  ];

  const drafts = [
    { 
      id: 'DRF-001', 
      name: 'Voyage Q4 Expansion', 
      dates: 'Created 2h ago',
      demographics: 'Target: Gen Z',
      coverage: 'Expansion Plan',
      channels: ['Multi-Channel'],
      workflow: { step: '02', phase: 'Architecture', status: 'Approved', progress: '40%' },
      statusType: 'approval'
    },
    { 
      id: 'DRF-002', 
      name: 'Mobile App Promo', 
      dates: 'Created 5h ago',
      demographics: 'App Users',
      coverage: 'Global',
      channels: ['In-App', 'Push'],
      workflow: { step: '04', phase: 'Validation', status: 'Pending', progress: '80%' },
      statusType: 'pending'
    }
  ];

  const activityLog = [
    { actor: 'Strategy Agent', action: 'Synthesized research data', campaign: 'Voyage Q4 Expansion', step: 1, stepName: 'Strategy', time: '12m ago' },
    { actor: 'Creative Agent', action: 'Generated email deliverables', campaign: 'Mobile App Promo', step: 3, stepName: 'Production', time: '45m ago' },
    { actor: 'Alex M.', action: 'Approved strategic blueprint', campaign: 'Voyage Q4 Expansion', step: 1, stepName: 'Strategy', time: '2h ago' },
    { actor: 'QA Agent', action: 'Completed compliance simulation', campaign: 'Student Loan Refi', step: 4, stepName: 'Validation', time: '4h ago' },
  ];

  const getStatusStyles = (type: string) => {
    switch (type) {
      case 'approval': return 'text-[#19998B]';
      case 'pending': return 'text-[#EA1313]';
      case 'process': return 'text-[#D16400]';
      default: return 'text-[#1A1A1A]';
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in duration-500 pb-24">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-[#16335A] uppercase tracking-tight">Campaign Workspace</h2>
          <p className="text-base font-bold text-[#333333]">Performance metrics and active workflows.</p>
        </div>
        <Button 
          onClick={onNewCampaign}
          size="lg"
          className="bg-[#19998B] hover:bg-[#16335A] text-white rounded-md px-8 h-12 font-black text-sm uppercase tracking-widest transition-all shadow-lg"
        >
          <Plus className="mr-2 h-5 w-5" /> New Campaign
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Reach', value: '842,105', trend: '+22.4%', icon: Users, color: 'text-blue-600' },
          { label: 'Avg. CPA', value: '$12.40', trend: '-12.2%', icon: DollarSign, color: 'text-green-600' },
          { label: 'Total ROAS', value: '5.2x', trend: '+8.2%', icon: TrendingUp, color: 'text-indigo-600' },
          { label: 'Conversion', value: '3.8%', trend: '+1.4%', icon: BarChart3, color: 'text-emerald-600' }
        ].map((kpi, i) => (
          <Card key={i} className="border-2 border-[#E8E8E8] bg-white rounded-md p-6 relative overflow-hidden group hover:border-[#16335A] transition-all">
            <div className="relative z-10">
              <p className="text-xs font-black text-[#1A1A1A] uppercase tracking-widest mb-2">{kpi.label}</p>
              <div className="flex items-baseline justify-between">
                <div className="text-2xl font-black text-[#16335A]">{kpi.value}</div>
                <span className="text-xs text-[#19998B] font-black">{kpi.trend}</span>
              </div>
            </div>
            <kpi.icon className={cn("absolute -right-2 -bottom-2 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity", kpi.color)} />
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-6">
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="bg-white p-1.5 rounded-md border-2 border-[#E8E8E8] mb-8 h-14">
              <TabsTrigger value="active" className="rounded-sm px-10 py-2.5 text-sm font-black uppercase tracking-widest data-[state=active]:bg-[#16335A] data-[state=active]:text-white">Active</TabsTrigger>
              <TabsTrigger value="drafts" className="rounded-sm px-10 py-2.5 text-sm font-black uppercase tracking-widest data-[state=active]:bg-[#16335A] data-[state=active]:text-white">Drafts</TabsTrigger>
            </TabsList>
            
            <TabsContent value="active" className="space-y-6">
              {activeCampaigns.map((campaign) => (
                <Card key={campaign.id} className="border-2 border-[#E8E8E8] bg-white rounded-md hover:border-[#16335A] transition-all group shadow-sm">
                  <CardContent className="p-8 space-y-8">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-black text-[#000000] uppercase tracking-tight">{campaign.name}</h3>
                      <Button variant="ghost" size="icon" className="h-10 w-10 text-[#B3BDCC] hover:text-[#16335A]">
                        <MoreHorizontal size={24} />
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-16">
                      <div className="space-y-4">
                        <p className="text-xs font-black text-[#16335A] uppercase tracking-widest flex items-center gap-2">
                          <Activity size={14} /> Financial Metrics
                        </p>
                        <div className="grid grid-cols-4 gap-4">
                          {Object.entries(campaign.financials).map(([key, val]) => (
                            <div key={key}>
                              <p className="text-lg font-black text-[#000000]">{val}</p>
                              <p className="text-[10px] font-black text-[#B3BDCC] uppercase tracking-tighter">{key}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <p className="text-xs font-black text-[#19998B] uppercase tracking-widest flex items-center gap-2">
                          <Activity size={14} /> Performance Metrics
                        </p>
                        <div className="grid grid-cols-4 gap-4">
                          {Object.entries(campaign.performance).map(([key, val]) => (
                            <div key={key}>
                              <p className="text-lg font-black text-[#19998B]">{val}</p>
                              <p className="text-[10px] font-black text-[#B3BDCC] uppercase tracking-tighter">{key}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#F9F9F9]">
                      <div className="flex gap-8 text-xs font-black text-[#333333] uppercase tracking-wide">
                        <div className="flex items-center gap-2"><Calendar size={14} className="text-[#B3BDCC]" /> {campaign.dates}</div>
                        <div className="flex items-center gap-2"><Users size={14} className="text-[#B3BDCC]" /> {campaign.demographics}</div>
                        <div className="flex items-center gap-2"><Globe size={14} className="text-[#B3BDCC]" /> {campaign.coverage}</div>
                      </div>
                      <div className="flex gap-2">
                        {campaign.channels.map((channel, i) => (
                          <Badge key={i} variant="secondary" className="bg-[#F9F9F9] text-[#16335A] border-2 border-[#E8E8E8] text-[10px] px-3 py-1 rounded-sm font-black uppercase tracking-widest">
                            {channel}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="drafts" className="space-y-6">
              {drafts.map((draft) => (
                <Card key={draft.id} className="border-2 border-[#E8E8E8] bg-white rounded-md hover:border-[#16335A] transition-all group shadow-sm">
                  <CardContent className="p-8 space-y-8">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-black text-[#000000] uppercase tracking-tight">{draft.name}</h3>
                      <Button variant="ghost" size="icon" className="h-10 w-10 text-[#B3BDCC] hover:text-[#16335A]">
                        <MoreHorizontal size={24} />
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <p className="text-xs font-black text-[#16335A] uppercase tracking-widest flex items-center gap-2">
                        <Layers size={14} /> Workflow Status
                      </p>
                      <div className="grid grid-cols-4 gap-4">
                        {Object.entries(draft.workflow).map(([key, val]) => (
                          <div key={key}>
                            <p className={cn("text-lg font-black", key === 'status' ? getStatusStyles(draft.statusType) : "text-[#000000]")}>{val}</p>
                            <p className="text-[10px] font-black text-[#B3BDCC] uppercase tracking-tighter">{key}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#F9F9F9]">
                      <div className="flex gap-8 text-xs font-black text-[#333333] uppercase tracking-wide">
                        <div className="flex items-center gap-2"><Calendar size={14} className="text-[#B3BDCC]" /> {draft.dates}</div>
                        <div className="flex items-center gap-2"><Users size={14} className="text-[#B3BDCC]" /> {draft.demographics}</div>
                        <div className="flex items-center gap-2"><Globe size={14} className="text-[#B3BDCC]" /> {draft.coverage}</div>
                      </div>
                      <div className="flex gap-2">
                        {draft.channels.map((channel, i) => (
                          <Badge key={i} variant="secondary" className="bg-[#F9F9F9] text-[#16335A] border-2 border-[#E8E8E8] text-[10px] px-3 py-1 rounded-sm font-black uppercase tracking-widest">
                            {channel}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <h3 className="text-sm font-black text-[#16335A] uppercase tracking-widest">Activity Log</h3>
          <div className="relative space-y-0">
            {activityLog.map((log, i) => (
              <div key={i} className="relative pl-8 pb-8 group">
                {/* Connector Line */}
                {i !== activityLog.length - 1 && (
                  <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-[#E8E8E8] group-hover:bg-[#16335A] transition-colors" />
                )}
                {/* Connector Dot */}
                <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-white border-2 border-[#E8E8E8] flex items-center justify-center z-10 group-hover:border-[#16335A] transition-all">
                  <div className="w-2 h-2 rounded-full bg-[#B3BDCC] group-hover:bg-[#16335A]" />
                </div>
                
                <Card className="border-2 border-[#E8E8E8] bg-white rounded-md hover:border-[#16335A] transition-all shadow-sm">
                  <div className="p-5 space-y-3">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-black text-[#000000]">
                        {log.actor}: <span className="font-bold text-[#333333]">{log.action}</span>
                      </p>
                      <p className="text-[10px] text-[#B3BDCC] font-black uppercase tracking-widest">{log.time}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-black text-[#B3BDCC] uppercase tracking-widest">Campaign:</span>
                        <span className="text-[10px] font-black text-[#16335A] uppercase tracking-tight">{log.campaign}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-black text-[#B3BDCC] uppercase tracking-widest">Step {log.step}:</span>
                        <span className="text-[10px] font-black text-[#333333] uppercase tracking-tight">{log.stepName}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
            <Button variant="ghost" className="w-full text-[#16335A] font-black text-xs uppercase tracking-widest hover:bg-[#F9F9F9] h-12 border-2 border-dashed border-[#E8E8E8] mt-2">
              View Full History
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Memorial AI Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-[#16335A] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:bg-[#000000] transition-all z-50 group">
        <Sparkles size={28} className="group-hover:animate-pulse" />
        <div className="absolute right-20 bg-[#16335A] text-white px-4 py-2 rounded-md text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Memorial AI Assistant
        </div>
      </button>
    </div>
  );
};

export default CampaignDashboard;