import React from 'react';
import { Button as MuiButton, SxProps, Theme } from '@mui/material';
import { theme } from '@/lib/theme';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
  [key: string]: any;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  sx,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    secondary: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.divider}`,
      '&:hover': {
        backgroundColor: '#1A1A1A',
      },
    },
    outline: {
      border: `2px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.primary.main,
      },
    },
  };

  const sizes = {
    sm: { px: 2, py: 1.5, fontSize: '0.875rem' },
    md: { px: 4, py: 2, fontSize: '1rem' },
    lg: { px: 6, py: 3, fontSize: '1.125rem' },
  };

  return (
    <MuiButton
      sx={{
        textTransform: 'none',
        fontWeight: 600,
        ...variants[variant],
        ...sizes[size],
        ...sx,
      }}
      className={className}
      {...props}
    >
      {children}
    </MuiButton>
  );
}
