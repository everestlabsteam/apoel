import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Facebook, Twitter, Instagram, Globe } from 'lucide-react';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('border-t border-border bg-background py-12', className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md" />
              <span className="font-bold text-xl text-white">APOEL</span>
            </Link>
            <p className="text-text-secondary text-sm max-w-md">
              APOEL Football Club — Cyprus's most successful football club.
              Join us in celebrating our legacy and supporting our team.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-text-secondary">
              <Globe className="w-4 h-4" />
              <a href="https://apoelfc.com.cy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                apoelfc.com.cy
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/squad" className="text-sm text-text-secondary hover:text-primary transition-colors">
                  Squad
                </Link>
              </li>
              <li>
                <Link href="/fixtures" className="text-sm text-text-secondary hover:text-primary transition-colors">
                  Fixtures
                </Link>
              </li>
              <li>
                <Link href="/history" className="text-sm text-text-secondary hover:text-primary transition-colors">
                  History
                </Link>
              </li>
              <li>
                <Link href="/stadium" className="text-sm text-text-secondary hover:text-primary transition-colors">
                  Stadium
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm text-text-secondary hover:text-primary transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/tickets" className="text-sm text-text-secondary hover:text-primary transition-colors">
                  Tickets
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Official Site</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://apoelfc.com.cy" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-primary transition-colors">
                  apoelfc.com.cy
                </a>
              </li>
              <li>
                <Button variant="outline" size="sm" className="w-full mt-2">
                  Buy Tickets
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-secondary">
            © APOEL FC 1926–2026. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com/APOEL" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://twitter.com/APOEL_FC" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://instagram.com/APOEL_FC" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
