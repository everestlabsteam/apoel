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
    GK: 'text-[#FFD700]',
    DEF: 'text-[#4169E1]',
    MID: 'text-[#32CD32]',
    FWD: 'text-[#DC143C]',
  };

  return (
    <Card className={cn('hover:border-[#F7941D] transition-all duration-200 group', className)}>
      <div className="flex flex-col items-center text-center">
        <div className="relative w-32 h-32 mb-4">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-full border-2 border-[#F7941D]"
            />
          ) : (
            <div className="w-full h-full rounded-full bg-[#111111] border-2 border-[#2A2A2A] flex items-center justify-center">
              <span className="text-4xl font-bold text-[#E0E0E0]">#{number}</span>
            </div>
          )}
          <div className="absolute top-0 right-0 bg-[#F7941D] text-white text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-sm">
            #{number}
          </div>
        </div>
        <div className="text-lg font-bold text-[#FFFFFF] mb-1">{name}</div>
        <div className="flex items-center gap-2 text-sm text-[#E0E0E0] mb-3">
          <span className="font-medium text-[#F7941D]">
            {position}
          </span>
          {nationality && <span>• {nationality}</span>}
          {age && <span>• {age}</span>}
        </div>
        <div className="mt-auto pt-3">
          <span className="text-xs text-[#E0E0E0] uppercase tracking-wider">
            {position === 'GK' ? 'Goalkeeper' : position === 'DEF' ? 'Defender' : position === 'MID' ? 'Midfielder' : 'Forward'}
          </span>
        </div>
      </div>
    </Card>
  );
}
