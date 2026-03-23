import React from 'react';
import Link from 'next/link';
import { Box, Container, Typography, AppBar, Toolbar, Button as MuiButton } from '@mui/material';
import { theme } from '@/lib/theme';
import { MobileMenu } from '@/components/navigation/mobile-menu';

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
    <AppBar
      position="sticky"
      sx={{
        zIndex: 50,
        width: '100%',
        borderBottom: `1px solid #2A2A2A`,
        backgroundColor: `${theme.palette.background.default}95`,
        backdropFilter: 'blur(6px)',
      }}
    >
      <Container sx={{ px: 4 }}>
        <Toolbar disableGutters sx={{ minHeight: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: 'inherit' }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                backgroundColor: theme.palette.primary.main,
                borderRadius: 4,
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.5rem', color: theme.palette.text.primary }}>
              APOEL
            </Typography>
          </Link>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ 
                  textDecoration: 'none', 
                  color: theme.palette.text.secondary,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <MobileMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
