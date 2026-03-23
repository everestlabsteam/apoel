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
        return 'text-win';
      case 'D':
        return 'text-draw';
      case 'L':
        return 'text-loss';
      default:
        return 'text-text-secondary';
    }
  };

  return (
    <Card className={cn('hover:border-primary transition-all duration-200', className)}>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <span className="text-sm text-text-secondary font-medium">{date}</span>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-surface border border-border">
            {competition}
          </span>
        </div>
        
        <div className="flex justify-between items-center py-3 border-y border-border">
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
        
        <div className="flex justify-between items-center text-sm text-text-secondary">
          <span>{venue}</span>
          <span className="font-medium">{status}</span>
        </div>
      </div>
    </Card>
  );
}
