import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface PlayerCardProps {
  number: number;
  name: string;
  position: 'GK' | 'DEF' | 'MID' | 'FWD';
  nationality?: string;
  age?: number;
  image?: string;
  className?: string;
}

export function PlayerCard({
  number,
  name,
  position,
  nationality,
  age,
  image,
  className,
}: PlayerCardProps) {
  const positionColors = {
    GK: 'text-yellow-500',
    DEF: 'text-blue-500',
    MID: 'text-green-500',
    FWD: 'text-red-500',
  };

  return (
    <Card className={cn('hover:border-primary transition-all duration-200 group', className)}>
      <div className="flex flex-col items-center text-center">
        <div className="relative w-32 h-32 mb-4">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-full border-2 border-primary"
            />
          ) : (
            <div className="w-full h-full rounded-full bg-surface border-2 border-border flex items-center justify-center">
              <span className="text-4xl font-bold text-text-secondary">#{number}</span>
            </div>
          )}
          <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-sm">
            #{number}
          </div>
        </div>
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
