import React, { ReactNode } from 'react';
import { Box, Card as MuiCard, CardContent as MuiCardContent, Typography } from '@mui/material';
import { theme } from '@/lib/theme';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <MuiCard
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderColor: theme.palette.divider,
        borderWidth: 1,
        borderStyle: 'solid',
        transition: 'all 0.2s ease-in-out',
        '&:hover': hover ? {
          borderColor: theme.palette.primary.main,
          boxShadow: 4,
        } : undefined,
      }}
      className={className}
    >
      {children}
    </MuiCard>
  );
}

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Box sx={{ mb: 4 }} className={className}>
      {children}
    </Box>
  );
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Typography 
      variant="h5" 
      sx={{ 
        fontWeight: 700, 
        color: theme.palette.primary.main, 
        mb: 2,
      }}
      className={className}
    >
      {children}
    </Typography>
  );
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <MuiCardContent 
      sx={{ 
        color: theme.palette.text.secondary,
      }}
      className={className}
    >
      {children}
    </MuiCardContent>
  );
}
