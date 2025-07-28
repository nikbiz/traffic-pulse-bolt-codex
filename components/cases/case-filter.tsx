"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CaseFilterProps {
  onFilterChange: (filters: { industry: string; channel: string }) => void;
}

const industries = ['All Industries', 'E-commerce', 'SaaS', 'Home Services'];
const channels = ['All Channels', 'Google Ads', 'LinkedIn Ads', 'Facebook Ads', 'TikTok Ads'];

export function CaseFilter({ onFilterChange }: CaseFilterProps) {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedChannel, setSelectedChannel] = useState('All Channels');

  const handleFilterChange = (type: 'industry' | 'channel', value: string) => {
    const newIndustry = type === 'industry' ? value : selectedIndustry;
    const newChannel = type === 'channel' ? value : selectedChannel;
    
    setSelectedIndustry(newIndustry);
    setSelectedChannel(newChannel);
    
    onFilterChange({
      industry: newIndustry === 'All Industries' ? '' : newIndustry,
      channel: newChannel === 'All Channels' ? '' : newChannel,
    });
  };

  const clearFilters = () => {
    setSelectedIndustry('All Industries');
    setSelectedChannel('All Channels');
    onFilterChange({ industry: '', channel: '' });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
      <div className="flex flex-col sm:flex-row gap-4 flex-1">
        <Select value={selectedIndustry} onValueChange={(value) => handleFilterChange('industry', value)}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((industry) => (
              <SelectItem key={industry} value={industry}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedChannel} onValueChange={(value) => handleFilterChange('channel', value)}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Select channel" />
          </SelectTrigger>
          <SelectContent>
            {channels.map((channel) => (
              <SelectItem key={channel} value={channel}>
                {channel}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button variant="outline" onClick={clearFilters}>
        Clear Filters
      </Button>
    </div>
  );
}