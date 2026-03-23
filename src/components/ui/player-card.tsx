import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface PlayerCardProps {
  number: number;
  name: string;
  position: 'GK' | 'DEF' | 'MID' | 'FWD';
  nationality?: string;
  age?: number;
  className?: string;
}

export function PlayerCard({
  number,
  name,
  position,
  nationality,
  age,
  className,
}: PlayerCardProps) {
  return (
    <Card className={cn('hover:border-primary transition-all duration-200', className)}>
      <div className="flex flex-col items-center text-center">
        <div className="text-5xl font-bold text-primary mb-2">{number}</div>
        <div className="text-lg font-bold text-white mb-1">{name}</div>
        <div className="flex items-center gap-2 text-sm text-text-secondary mb-3">
          <span className="font-medium text-primary">
            {position}
          </span>
          {nationality && <span>• {nationality}</span>}
          {age && <span>• {age}</span>}
        </div>
        <div className="mt-auto pt-3">
          <span className="text-xs text-text-secondary uppercase tracking-wider">
            {position === 'GK' ? 'Goalkeeper' : position === 'DEF' ? 'Defender' : position === 'MID' ? 'Midfielder' : 'Forward'}
          </span>
        </div>
      </div>
    </Card>
  );
}
