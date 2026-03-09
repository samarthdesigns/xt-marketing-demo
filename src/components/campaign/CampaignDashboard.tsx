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
  Sparkles
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
    },
    { 
      id: 'CMP-V04', 
      name: 'Financial Literacy Webinar', 
      dates: 'Nov 01 - Dec 01, 2024',
      demographics: '18-24, Students',
      coverage: 'National (US)',
      channels: ['Web', 'Email'],
      financials: { budget: '$10k', spend: '$2k', cpa: '$5.40', roas: '8.2x' },
      performance: { reach: '25k', ctr: '4.5%', conv: '3.1%', imps: '300k' }
    },
    { 
      id: 'CMP-V05', 
      name: 'Early Career Credit', 
      dates: 'Oct 15 - Jan 15, 2025',
      demographics: '21-25, Grads',
      coverage: 'National (US)',
      channels: ['LinkedIn', 'Email'],
      financials: { budget: '$30k', spend: '$12k', cpa: '$18.20', roas: '3.5x' },
      performance: { reach: '65k', ctr: '2.8%', conv: '1.2%', imps: '1.1M' }
    },
    { 
      id: 'CMP-V06', 
      name: 'International Student Outreach', 
      dates: 'Sep 01 - Dec 31, 2024',
      demographics: '18-25, Global',
      coverage: 'Top 20 US Unis',
      channels: ['Social', 'Events'],
      financials: { budget: '$20k', spend: '$15k', cpa: '$22.10', roas: '2.8x' },
      performance: { reach: '30k', ctr: '3.5%', conv: '1.5%', imps: '450k' }
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
    },
    { 
      id: 'DRF-003', 
      name: 'Holiday Rewards Program', 
      dates: 'Created 1d ago',
      demographics: 'Existing Users',
      coverage: 'National (US)',
      channels: ['Email', 'Push'],
      workflow: { step: '01', phase: 'Strategy', status: 'In Process', progress: '15%' },
      statusType: 'process'
    }
  ];

  const activityLog = [
    { actor: 'Strategy Agent', action: 'Synthesized research data', campaign: 'Voyage Q4 Expansion', step: 1, stepName: 'Strategy', time: '12m ago' },
    { actor: 'Creative Agent', action: 'Generated email deliverables', campaign: 'Mobile App Promo', step: 3, stepName: 'Production', time: '45m ago' },
    { actor: 'Alex M.', action: 'Approved strategic blueprint', campaign: 'Voyage Q4 Expansion', step: 1, stepName: 'Strategy', time: '2h ago' },
    { actor: 'QA Agent', action: 'Completed compliance simulation', campaign: 'Student Loan Refi', step: 4, stepName: 'Validation', time: '4h ago' },
    { actor: 'Memorial AI', action: 'Optimized ad copy for Gen Z', campaign: 'Voyage Student Launch', step: 3, stepName: 'Production', time: '6h ago' },
    { actor: 'Sarah F.', action: 'Requested budget increase', campaign: 'Credit Score 101', step: 1, stepName: 'Strategy', time: '1d ago' },
    { actor: 'Compliance Agent', action: 'Flagged legal disclaimer', campaign: 'Early Career Credit', step: 4, stepName: 'Validation', time: '1d ago' },
    { actor: 'Memorial AI', action: 'Generated 5 social deliverables', campaign: 'Campus Ambassador', step: 3, stepName: 'Production', time: '2d ago' },
    { actor: 'Alex M.', action: 'Finalized Q4 roadmap', campaign: 'Voyage Q4 Expansion', step: 2, stepName: 'Architecture', time: '2d ago' },
    { actor: 'System', action: 'Campaign V01 launched successfully', campaign: 'Voyage Student Launch', step: 5, stepName: 'Readiness', time: '3d ago' },
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
          <h2 className="text-4xl font-black text-[#16335A] uppercase tracking-tight">Campaign Workspace</h2>
          <p className="text-lg font-bold text-[#333333]">Performance metrics and active workflows.</p>
        </div>
        <Button 
          onClick={onNewCampaign}
          size="lg"
          className="bg-[#19998B] hover:bg-[#16335A] text-white rounded-md px-10 h-14 font-black text-base uppercase tracking-widest transition-all shadow-lg"
        >
          <Plus className="mr-2 h-6 w-6" /> New Campaign
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Reach', value: '842,105', trend: '+22.4%', icon: Users, color: 'text-blue-600' },
          { label: 'Avg. CPA', value: '$12.40', trend: '-12.2%', icon: DollarSign, color: 'text-green-600' },
          { label: 'Total ROAS', value: '5.2x', trend: '+8.2%', icon: TrendingUp, color: 'text-indigo-600' },
          { label: 'Conversion', value: '3.8%', trend: '+1.4%', icon: BarChart3, color: 'text-emerald-600' }
        ].map((kpi, i) => (
          <Card key={i} className="border-2 border-[#E8E8E8] bg-white rounded-md p-8 relative overflow-hidden group hover:border-[#16335A] transition-all">
            <div className="relative z-10">
              <p className="text-sm font-black text-[#1A1A1A] uppercase tracking-widest mb-3">{kpi.label}</p>
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-black text-[#16335A]">{kpi.value}</div>
                <span className="text-sm text-[#19998B] font-black">{kpi.trend}</span>
              </div>
            </div>
            <kpi.icon className={cn("absolute -right-2 -bottom-2 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity", kpi.color)} />
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-6">
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="bg-white p-1.5 rounded-md border-2 border-[#E8E8E8] mb-8 h-16">
              <TabsTrigger value="active" className="rounded-sm px-12 py-3 text-base font-black uppercase tracking-widest data-[state=active]:bg-[#16335A] data-[state=active]:text-white">Active ({activeCampaigns.length})</TabsTrigger>
              <TabsTrigger value="drafts" className="rounded-sm px-12 py-3 text-base font-black uppercase tracking-widest data-[state=active]:bg-[#16335A] data-[state=active]:text-white">Drafts ({drafts.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="active" className="space-y-6">
              {activeCampaigns.map((campaign) => (
                <Card key={campaign.id} className="border-2 border-[#E8E8E8] bg-white rounded-md hover:border-[#16335A] transition-all group shadow-sm">
                  <CardContent className="p-10 space-y-10">
                    <div className="flex justify-between items-center">
                      <h3 className="text-3xl font-black text-[#000000] uppercase tracking-tight">{campaign.name}</h3>
                      <Button variant="ghost" size="icon" className="h-12 w-12 text-[#B3BDCC] hover:text-[#16335A]">
                        <MoreHorizontal size={28} />
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-16">
                      <div className="space-y-5">
                        <p className="text-sm font-black text-[#16335A] uppercase tracking-widest flex items-center gap-2">
                          <Activity size={16} /> Financial Metrics
                        </p>
                        <div className="grid grid-cols-4 gap-6">
                          {Object.entries(campaign.financials).map(([key, val]) => (
                            <div key={key}>
                              <p className="text-xl font-black text-[#000000]">{val}</p>
                              <p className="text-xs font-black text-[#1A1A1A] uppercase tracking-tighter">{key}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-5">
                        <p className="text-sm font-black text-[#19998B] uppercase tracking-widest flex items-center gap-2">
                          <Activity size={16} /> Performance Metrics
                        </p>
                        <div className="grid grid-cols-4 gap-6">
                          {Object.entries(campaign.performance).map(([key, val]) => (
                            <div key={key}>
                              <p className="text-xl font-black text-[#19998B]">{val}</p>
                              <p className="text-xs font-black text-[#1A1A1A] uppercase tracking-tighter">{key}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-[#F9F9F9]">
                      <div className="flex gap-10 text-sm font-black text-[#333333] uppercase tracking-wide">
                        <div className="flex items-center gap-2"><Calendar size={16} className="text-[#16335A]" /> {campaign.dates}</div>
                        <div className="flex items-center gap-2"><Users size={16} className="text-[#16335A]" /> {campaign.demographics}</div>
                        <div className="flex items-center gap-2"><Globe size={16} className="text-[#16335A]" /> {campaign.coverage}</div>
                      </div>
                      <div className="flex gap-3">
                        {campaign.channels.map((channel, i) => (
                          <Badge key={i} variant="secondary" className="bg-[#F9F9F9] text-[#16335A] border-2 border-[#E8E8E8] text-xs px-4 py-1.5 rounded-sm font-black uppercase tracking-widest">
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
                  <CardContent className="p-10 space-y-10">
                    <div className="flex justify-between items-center">
                      <h3 className="text-3xl font-black text-[#000000] uppercase tracking-tight">{draft.name}</h3>
                      <Button variant="ghost" size="icon" className="h-12 w-12 text-[#B3BDCC] hover:text-[#16335A]">
                        <MoreHorizontal size={28} />
                      </Button>
                    </div>

                    <div className="space-y-5">
                      <p className="text-sm font-black text-[#16335A] uppercase tracking-widest flex items-center gap-2">
                        <Layers size={16} /> Workflow Status
                      </p>
                      <div className="grid grid-cols-4 gap-6">
                        {Object.entries(draft.workflow).map(([key, val]) => (
                          <div key={key}>
                            <p className={cn("text-xl font-black", key === 'status' ? getStatusStyles(draft.statusType) : "text-[#000000]")}>{val}</p>
                            <p className="text-xs font-black text-[#1A1A1A] uppercase tracking-tighter">{key}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-[#F9F9F9]">
                      <div className="flex gap-10 text-sm font-black text-[#333333] uppercase tracking-wide">
                        <div className="flex items-center gap-2"><Calendar size={16} className="text-[#16335A]" /> {draft.dates}</div>
                        <div className="flex items-center gap-2"><Users size={16} className="text-[#16335A]" /> {draft.demographics}</div>
                        <div className="flex items-center gap-2"><Globe size={16} className="text-[#16335A]" /> {draft.coverage}</div>
                      </div>
                      <div className="flex gap-3">
                        {draft.channels.map((channel, i) => (
                          <Badge key={i} variant="secondary" className="bg-[#F9F9F9] text-[#16335A] border-2 border-[#E8E8E8] text-xs px-4 py-1.5 rounded-sm font-black uppercase tracking-widest">
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
          <h3 className="text-base font-black text-[#16335A] uppercase tracking-widest">Activity Log</h3>
          <div className="space-y-4">
            {activityLog.map((log, i) => (
              <Card key={i} className="border-2 border-[#E8E8E8] bg-white rounded-md hover:border-[#16335A] transition-all shadow-sm">
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <p className="text-base font-black text-[#000000]">
                      {log.actor}: <span className="font-bold text-[#333333]">{log.action}</span>
                    </p>
                    <p className="text-xs text-[#1A1A1A] font-black uppercase tracking-widest">{log.time}</p>
                  </div>
                  <div className="flex flex-col gap-2 bg-[#F9F9F9] p-4 rounded-sm border border-[#E8E8E8]">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black text-[#16335A] uppercase tracking-widest w-20">Campaign:</span>
                      <span className="text-xs font-black text-[#000000] uppercase tracking-tight">{log.campaign}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black text-[#16335A] uppercase tracking-widest w-20">Step {log.step}:</span>
                      <span className="text-xs font-black text-[#000000] uppercase tracking-tight">{log.stepName}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
            <Button variant="ghost" className="w-full text-[#16335A] font-black text-sm uppercase tracking-widest hover:bg-[#F9F9F9] h-14 border-2 border-dashed border-[#E8E8E8] mt-4">
              View Full History
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Memorial AI Button */}
      <button className="fixed bottom-8 right-8 w-20 h-20 bg-[#16335A] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:bg-[#000000] transition-all z-50 group">
        <Sparkles size={32} className="group-hover:animate-pulse" />
        <div className="absolute right-24 bg-[#16335A] text-white px-6 py-3 rounded-md text-sm font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Memorial AI Assistant
        </div>
      </button>
    </div>
  );
};

export default CampaignDashboard;