import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title?: string;
  subtitle?: string;
  cta?: {
    label: string;
    href: string;
  }[];
  image?: string;
  className?: string;
  showCrest?: boolean;
  crestAlt?: string;
  tagline?: string;
}

export function Hero({ 
  title, 
  subtitle, 
  cta, 
  image, 
  className,
  showCrest = true,
  crestAlt = 'APOEL FC Crest',
  tagline = 'Θρύλος'
}: HeroProps) {
  return (
    <div className={`relative overflow-hidden bg-background ${className}`}>
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt="Hero background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        </div>
      )}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {showCrest && (
            <div className="mb-6">
              <div className="inline-block p-4 bg-surface rounded-full">
                <svg 
                  className="w-16 h-16 md:w-24 md:h-24 text-primary" 
                  viewBox="0 0 100 100" 
                  fill="none"
                >
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
                  <path d="M50 20V80M20 50H80" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" />
                  <path d="M50 35V65M35 50H65" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
                </svg>
              </div>
            </div>
          )}
          {tagline && (
            <p className="text-lg md:text-xl font-bold text-primary mb-4 tracking-widest uppercase">
              {tagline}
            </p>
          )}
          {title && (
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-xl md:text-2xl text-text-secondary mb-8">
              {subtitle}
            </p>
          )}
          {cta && (
            <div className="flex flex-wrap justify-center gap-4">
              {cta.map((item, index) => (
                <Button key={index} variant="primary" size="lg" asChild>
                  <a href={item.href}>{item.label}</a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
