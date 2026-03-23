import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MatchCardProps {
  date: string;
  homeTeam: string;
  awayTeam: string;
  score: string;
  competition: string;
  venue: string;
  status: 'Upcoming' | 'Live' | 'Final';
  result?: 'W' | 'D' | 'L';
  className?: string;
}

export function MatchCard({
  date,
  homeTeam,
  awayTeam,
  score,
  competition,
  venue,
  status,
  result,
  className,
}: MatchCardProps) {
  const getResultColor = (res?: string) => {
    switch (res) {
      case 'W':
        return 'text-[#F7941D]';
      case 'D':
        return 'text-[#A0A0A0]';
      case 'L':
        return 'text-[#707070]';
      default:
        return 'text-[#E0E0E0]';
    }
  };

  return (
    <Card className={cn('hover:border-[#F7941D] transition-all duration-200', className)}>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <span className="text-sm text-[#E0E0E0] font-medium">{date}</span>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#111111] border border-[#2A2A2A]">
            {competition}
          </span>
        </div>
        
        <div className="flex justify-between items-center py-3 border-y border-[#2A2A2A]">
          <div className="flex-1 text-center">
            <span className="font-bold text-lg">{homeTeam}</span>
          </div>
          <div className="px-4">
            <span className={`text-2xl font-bold ${getResultColor(result)}`}>
              {score}
            </span>
          </div>
          <div className="flex-1 text-center">
            <span className="font-bold text-lg">{awayTeam}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center text-sm text-[#E0E0E0]">
          <span>{venue}</span>
          <span className="font-medium">{status}</span>
        </div>
      </div>
    </Card>
  );
}
