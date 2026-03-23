'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0A0A0A] disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-[#F7941D] text-white hover:bg-[#FFA53A] active:bg-[#D67D15] focus:ring-[#F7941D] shadow-sm',
    secondary: 'bg-[#111111] text-[#F7941D] hover:bg-[#1A1A1A] active:bg-[#222222] focus:ring-[#111111] border border-[#2A2A2A]',
    outline: 'border-2 border-[#F7941D] text-[#F7941D] hover:bg-[#F7941D] hover:text-white focus:ring-[#F7941D]',
    ghost: 'hover:bg-[#111111] text-[#FFFFFF] hover:text-[#F7941D] focus:ring-[#F7941D]',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
