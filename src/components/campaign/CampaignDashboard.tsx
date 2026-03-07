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
  MousePointer2 
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
      name: 'Q4 Rewards Refresh', 
      dates: 'Nov 15 - Dec 31, 2024',
      demographics: 'Existing Users',
      coverage: 'Global',
      channels: ['Email', 'SMS', 'App'],
      financials: { budget: '$10k', spend: '$2k', cpa: '$4.10', roas: '3.8x' },
      performance: { reach: '65k', ctr: '2.8%', conv: '1.2%', imps: '950k' }
    },
    { 
      id: 'CMP-V05', 
      name: 'Alumni Outreach 2024', 
      dates: 'Dec 01 - Jan 31, 2025',
      demographics: 'Graduates',
      coverage: 'National (US)',
      channels: ['Mail', 'LinkedIn'],
      financials: { budget: '$30k', spend: '$1k', cpa: '$45.00', roas: '1.2x' },
      performance: { reach: '5k', ctr: '1.1%', conv: '0.4%', imps: '25k' }
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
      name: 'Holiday Rewards 2024', 
      dates: 'Created 1d ago',
      demographics: 'All Users',
      coverage: 'National',
      channels: ['Email', 'SMS'],
      workflow: { step: '01', phase: 'Strategy', status: 'In Process', progress: '20%' },
      statusType: 'process'
    }
  ];

  const activityLog = [
    { actor: 'Strategy Agent', action: 'Synthesized research data', campaign: 'Voyage Q4 Expansion', step: 1, stepName: 'Strategy', time: '12m ago' },
    { actor: 'Creative Agent', action: 'Generated email assets', campaign: 'Mobile App Promo', step: 3, stepName: 'Production', time: '45m ago' },
    { actor: 'Alex M.', action: 'Approved strategic blueprint', campaign: 'Voyage Q4 Expansion', step: 1, stepName: 'Strategy', time: '2h ago' },
    { actor: 'QA Agent', action: 'Completed compliance simulation', campaign: 'Student Loan Refi', step: 4, stepName: 'Validation', time: '4h ago' },
    { actor: 'Creative Agent', action: 'Updated landing page copy', campaign: 'Holiday Rewards 2024', step: 3, stepName: 'Production', time: '6h ago' },
    { actor: 'Strategy Agent', action: 'Defined target demographics', campaign: 'Summer Internship Prep', step: 1, stepName: 'Strategy', time: '1d ago' },
    { actor: 'System', action: 'Archived Q2 performance logs', campaign: 'Voyage Student Launch', step: 5, stepName: 'Readiness', time: '1d ago' },
    { actor: 'Sarah F.', action: 'Flagged visual contrast issue', campaign: 'Mobile App Promo', step: 4, stepName: 'Validation', time: '2d ago' },
    { actor: 'Creative Agent', action: 'Drafted Instagram carousel', campaign: 'Credit Score 101', step: 3, stepName: 'Production', time: '2d ago' },
    { actor: 'Strategy Agent', action: 'Initiated competitor audit', campaign: 'Holiday Rewards 2024', step: 1, stepName: 'Strategy', time: '3d ago' },
  ];

  const getStatusStyles = (type: string) => {
    switch (type) {
      case 'approval': return 'text-[#19998B]';
      case 'pending': return 'text-[#EA1313]';
      case 'process': return 'text-[#D16400]';
      default: return 'text-[#4D4D4D]';
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-black text-[#16335A] uppercase tracking-tight">Campaign Workspace</h2>
          <p className="text-sm font-medium text-[#4D4D4D]">Performance metrics and active workflows.</p>
        </div>
        <Button 
          onClick={onNewCampaign}
          size="sm"
          className="bg-[#19998B] hover:bg-[#16335A] text-white rounded-md px-6 h-10 font-black text-xs uppercase tracking-widest transition-all"
        >
          <Plus className="mr-2 h-4 w-4" /> New Campaign
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Reach', value: '842,105', trend: '+22.4%', icon: Users, color: 'text-blue-600' },
          { label: 'Avg. CPA', value: '$12.40', trend: '-12.2%', icon: DollarSign, color: 'text-green-600' },
          { label: 'Total ROAS', value: '5.2x', trend: '+8.2%', icon: TrendingUp, color: 'text-indigo-600' },
          { label: 'Conversion', value: '3.8%', trend: '+1.4%', icon: BarChart3, color: 'text-emerald-600' }
        ].map((kpi, i) => (
          <Card key={i} className="border border-[#E8E8E8] bg-white rounded-md p-4 relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[10px] font-black text-[#4D4D4D] uppercase tracking-widest mb-1">{kpi.label}</p>
              <div className="flex items-baseline justify-between">
                <div className="text-xl font-black text-[#16335A]">{kpi.value}</div>
                <span className="text-[10px] text-[#19998B] font-black">{kpi.trend}</span>
              </div>
            </div>
            <kpi.icon className={cn("absolute -right-2 -bottom-2 w-12 h-12 opacity-5 group-hover:opacity-10 transition-opacity", kpi.color)} />
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-4">
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="bg-white p-1 rounded-md border border-[#E8E8E8] mb-6">
              <TabsTrigger value="active" className="rounded-sm px-8 py-2 text-xs font-black uppercase tracking-widest data-[state=active]:bg-[#16335A] data-[state=active]:text-white">Active</TabsTrigger>
              <TabsTrigger value="drafts" className="rounded-sm px-8 py-2 text-xs font-black uppercase tracking-widest data-[state=active]:bg-[#16335A] data-[state=active]:text-white">Drafts</TabsTrigger>
            </TabsList>
            
            <TabsContent value="active" className="space-y-4">
              {activeCampaigns.map((campaign) => (
                <Card key={campaign.id} className="border border-[#E8E8E8] bg-white rounded-md hover:border-[#16335A] transition-all group">
                  <CardContent className="p-6 space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-black text-[#16335A] uppercase tracking-tight">{campaign.name}</h3>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-[#B3BDCC] hover:text-[#16335A]">
                        <MoreHorizontal size={18} />
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-12">
                      <div className="space-y-3">
                        <p className="text-[9px] font-black text-[#16335A] uppercase tracking-widest flex items-center gap-2">
                          <Activity size={12} /> Financial Metrics
                        </p>
                        <div className="grid grid-cols-4 gap-2">
                          {Object.entries(campaign.financials).map(([key, val]) => (
                            <div key={key}>
                              <p className="text-sm font-black text-[#16335A]">{val}</p>
                              <p className="text-[8px] font-bold text-[#B3BDCC] uppercase tracking-tighter">{key}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p className="text-[9px] font-black text-[#19998B] uppercase tracking-widest flex items-center gap-2">
                          <Activity size={12} /> Performance Metrics
                        </p>
                        <div className="grid grid-cols-4 gap-2">
                          {Object.entries(campaign.performance).map(([key, val]) => (
                            <div key={key}>
                              <p className="text-sm font-black text-[#19998B]">{val}</p>
                              <p className="text-[8px] font-bold text-[#B3BDCC] uppercase tracking-tighter">{key}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex gap-6 text-[10px] font-bold text-[#4D4D4D]">
                        <div className="flex items-center gap-1.5"><Calendar size={12} className="text-[#B3BDCC]" /> {campaign.dates}</div>
                        <div className="flex items-center gap-1.5"><Users size={12} className="text-[#B3BDCC]" /> {campaign.demographics}</div>
                        <div className="flex items-center gap-1.5"><Globe size={12} className="text-[#B3BDCC]" /> {campaign.coverage}</div>
                      </div>
                      <div className="flex gap-1.5">
                        {campaign.channels.map((channel, i) => (
                          <Badge key={i} variant="secondary" className="bg-[#F9F9F9] text-[#16335A] border-[#E8E8E8] text-[8px] px-2 py-0.5 rounded-sm font-black uppercase tracking-widest">
                            {channel}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="drafts" className="space-y-4">
              {drafts.map((draft) => (
                <Card key={draft.id} className="border border-[#E8E8E8] bg-white rounded-md hover:border-[#16335A] transition-all group">
                  <CardContent className="p-6 space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-black text-[#16335A] uppercase tracking-tight">{draft.name}</h3>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-[#B3BDCC] hover:text-[#16335A]">
                        <MoreHorizontal size={18} />
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <p className="text-[9px] font-black text-[#16335A] uppercase tracking-widest flex items-center gap-2">
                        <Layers size={12} /> Workflow Status
                      </p>
                      <div className="grid grid-cols-4 gap-2">
                        {Object.entries(draft.workflow).map(([key, val]) => (
                          <div key={key}>
                            <p className={cn("text-sm font-black", key === 'status' ? getStatusStyles(draft.statusType) : "text-[#16335A]")}>{val}</p>
                            <p className="text-[8px] font-bold text-[#B3BDCC] uppercase tracking-tighter">{key}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex gap-6 text-[10px] font-bold text-[#4D4D4D]">
                        <div className="flex items-center gap-1.5"><Calendar size={12} className="text-[#B3BDCC]" /> {draft.dates}</div>
                        <div className="flex items-center gap-1.5"><Users size={12} className="text-[#B3BDCC]" /> {draft.demographics}</div>
                        <div className="flex items-center gap-1.5"><Globe size={12} className="text-[#B3BDCC]" /> {draft.coverage}</div>
                      </div>
                      <div className="flex gap-1.5">
                        {draft.channels.map((channel, i) => (
                          <Badge key={i} variant="secondary" className="bg-[#F9F9F9] text-[#16335A] border-[#E8E8E8] text-[8px] px-2 py-0.5 rounded-sm font-black uppercase tracking-widest">
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

        <div className="lg:col-span-4 space-y-4">
          <h3 className="text-xs font-black text-[#16335A] uppercase tracking-widest">Activity Log</h3>
          <Card className="border border-[#E8E8E8] bg-white rounded-md overflow-hidden">
            <div className="divide-y divide-[#F9F9F9]">
              {activityLog.map((log, i) => (
                <div key={i} className="p-4 hover:bg-[#F9F9F9]/50 transition-all space-y-2">
                  <div className="flex justify-between items-start">
                    <p className="text-xs font-black text-[#16335A]">
                      {log.actor}: <span className="font-medium text-[#4D4D4D]">{log.action}</span>
                    </p>
                    <p className="text-[9px] text-[#B3BDCC] font-bold uppercase tracking-widest">{log.time}</p>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-black text-[#B3BDCC] uppercase tracking-widest">Campaign:</span>
                      <span className="text-[9px] font-black text-[#16335A] uppercase tracking-tight">{log.campaign}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-black text-[#B3BDCC] uppercase tracking-widest">Step {log.step}:</span>
                      <span className="text-[9px] font-bold text-[#4D4D4D] uppercase tracking-tight">{log.stepName}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 bg-[#F9F9F9]/50 border-t border-[#E8E8E8]">
              <Button variant="ghost" className="w-full text-[#16335A] font-black text-[10px] uppercase tracking-widest hover:bg-white h-8">View Full History</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CampaignDashboard;