import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { theme } from '@/lib/theme';

interface MatchCardProps {
  date: string;
  homeTeam: string;
  awayTeam: string;
  score: string;
  competition: string;
  venue: string;
  status: 'Upcoming' | 'Live' | 'Final';
  result?: 'W' | 'D' | 'L';
  className?: string;
}

export function MatchCard({
  date,
  homeTeam,
  awayTeam,
  score,
  competition,
  venue,
  status,
  result,
  className,
}: MatchCardProps) {
  const getResultColor = (res?: string) => {
    switch (res) {
      case 'W':
        return theme.palette.success.main;
      case 'D':
        return '#A0A0A0';
      case 'L':
        return '#707070';
      default:
        return theme.palette.text.secondary;
    }
  };

  return (
    <Card
      className={className}
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderColor: '#2A2A2A',
        borderWidth: 1,
        borderStyle: 'solid',
        '&:hover': {
          borderColor: theme.palette.primary.main,
          boxShadow: theme.shadows[4],
        },
        transition: 'all 0.2s ease-in-out',
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
            {date}
          </Typography>
          <Box
            sx={{
              px: 2,
              py: 1,
              borderRadius: '20px',
              backgroundColor: '#111111',
              border: `1px solid #2A2A2A`,
            }}
          >
            <Typography variant="caption" sx={{ fontWeight: 600 }}>
              {competition}
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 3, borderTop: `1px solid #2A2A2A`, borderBottom: `1px solid #2A2A2A` }}>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {homeTeam}
            </Typography>
          </Box>
          <Box sx={{ px: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: getResultColor(result) }}>
              {score}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {awayTeam}
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            {venue}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {status}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default MatchCard;
