'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  IconButton,
  Box,
  Typography
} from '@mui/material';
import { Menu, X } from 'lucide-react';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Squad', href: '/squad' },
    { label: 'Fixtures', href: '/fixtures' },
    { label: 'History', href: '/history' },
    { label: 'Stadium', href: '/stadium' },
    { label: 'News', href: '/news' },
    { label: 'Tickets', href: '/tickets' },
  ];

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  const menuButtonStyle = {
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: 'rgba(247, 148, 29, 0.1)',
    },
  };

  const drawerPaperStyle = {
    backgroundColor: '#0A0A0A',
    color: '#FFFFFF',
    width: '280px',
    maxWidth: '90vw',
  };

  const drawerHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
    borderBottom: '1px solid #2A2A2A',
  };

  const drawerLogoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    color: '#FFFFFF',
    textDecoration: 'none',
  };

  const drawerLogoIconStyle = {
    width: 24,
    height: 24,
    backgroundColor: '#F7941D',
    borderRadius: 4,
  };

  const drawerLogoTextStyle = {
    fontWeight: 700,
    fontSize: '1.25rem',
    color: '#FFFFFF',
  };

  const navItemStyle = {
    color: '#B0B0B0',
    '&:hover': {
      color: '#F7941D',
    },
  };

  return (
    <>
      <IconButton
        sx={menuButtonStyle}
        onClick={toggleDrawer(true)}
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </IconButton>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: drawerPaperStyle,
        }}
      >
        <Box sx={drawerHeaderStyle}>
          <Link href="/" style={drawerLogoStyle}>
            <Box sx={drawerLogoIconStyle} />
            <Typography variant="h6" sx={drawerLogoTextStyle}>
              APOEL
            </Typography>
          </Link>
          <IconButton
            sx={menuButtonStyle}
            onClick={toggleDrawer(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </IconButton>
        </Box>

        <List>
          {navItems.map((item) => (
            <ListItem key={item.href} disablePadding>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={toggleDrawer(false)}
                sx={navItemStyle}
              >
                <ListItemText 
                  primary={item.label} 
                  primaryTypographyProps={{
                    sx: { fontSize: '1rem', fontWeight: 500 },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
