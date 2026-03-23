import React from 'react';
import { AppBarComponent } from '@/components/navigation/app-bar';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return <AppBarComponent className={className} />;
}
