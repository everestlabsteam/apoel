'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  date: string;
  description: string;
  expanded?: boolean;
  className?: string;
}

export function TimelineItem({ date, description, expanded = false, className }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <Card className={cn('mb-4 overflow-hidden', className)}>
      <div
        className="cursor-pointer p-4 flex justify-between items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="font-bold text-primary">{date}</span>
        </div>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-text-secondary transition-transform duration-200',
            isExpanded && 'rotate-180'
          )}
        />
      </div>
      {isExpanded && (
        <div className="px-4 pb-4 border-t border-border">
          <p className="py-2 text-text-secondary">{description}</p>
        </div>
      )}
    </Card>
  );
}
