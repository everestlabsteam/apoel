import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MobileMenu } from '@/components/navigation/mobile-menu';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Squad', href: '/squad' },
    { label: 'Fixtures', href: '/fixtures' },
    { label: 'History', href: '/history' },
    { label: 'Stadium', href: '/stadium' },
    { label: 'News', href: '/news' },
    { label: 'Tickets', href: '/tickets' },
  ];

  return (
    <header className={cn('sticky top-0 z-50 w-full border-b border-[#2A2A2A] bg-[#0A0A0A]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A0A0A]/60', className)}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#F7941D] rounded-md" />
          <span className="font-bold text-xl text-[#FFFFFF]">APOEL</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#E0E0E0] hover:text-[#F7941D] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
