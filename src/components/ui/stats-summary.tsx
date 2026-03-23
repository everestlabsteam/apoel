import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatsSummaryProps {
  leagueTitles: number;
  cups: number;
  superCups: number;
  championsLeagueQuarterFinals: string;
  className?: string;
}

export function StatsSummary({
  leagueTitles,
  cups,
  superCups,
  championsLeagueQuarterFinals,
  className,
}: StatsSummaryProps) {
  const stats = [
    { label: 'League Titles', value: leagueTitles, color: 'text-primary' },
    { label: 'Cups', value: cups, color: 'text-text-secondary' },
    { label: 'Super Cups', value: superCups, color: 'text-text-secondary' },
  ];

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-4 mb-8', className)}>
      {stats.map((stat, index) => (
        <Card key={index} className="text-center p-6 hover:border-primary transition-all duration-200">
          <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
            {stat.value}
          </div>
          <div className="text-sm text-text-secondary uppercase tracking-wider">
            {stat.label}
          </div>
        </Card>
      ))}
      <Card className="md:col-span-1 text-center p-6 hover:border-primary transition-all duration-200">
        <div className="text-4xl font-bold mb-2 text-primary">
          {championsLeagueQuarterFinals}
        </div>
        <div className="text-sm text-text-secondary uppercase tracking-wider">
          Champions League
          <br />Quarter-Finals
        </div>
      </Card>
    </div>
  );
}
