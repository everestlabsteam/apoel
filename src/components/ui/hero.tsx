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
}

export function Hero({ title, subtitle, cta, image, className }: HeroProps) {
  return (
    <div className={`relative overflow-hidden bg-background ${className}`}>
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt="Hero background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      )}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
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
