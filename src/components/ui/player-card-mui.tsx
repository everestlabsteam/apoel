import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { theme } from '@/lib/theme';

interface PlayerCardProps {
  number: number;
  name: string;
  position: 'GK' | 'DEF' | 'MID' | 'FWD';
  nationality?: string;
  age?: number;
  image?: string;
  className?: string;
}

export function PlayerCard({
  number,
  name,
  position,
  nationality,
  age,
  image,
  className,
}: PlayerCardProps) {
  const positionColors = {
    GK: theme.palette.warning.main,
    DEF: theme.palette.info.main,
    MID: theme.palette.success.main,
    FWD: theme.palette.error.main,
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
      <CardContent sx={{ p: 3, textAlign: 'center' }}>
        <Box sx={{ position: 'relative', width: 128, height: 128, mb: 3 }}>
          {image ? (
            <img
              src={image}
              alt={name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
                border: `2px solid ${theme.palette.primary.main}`,
              }}
            />
          ) : (
            <Box
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: '#111111',
                border: `2px solid #2A2A2A`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h2" sx={{ fontWeight: 700, color: '#E0E0E0' }}>
                #{number}
              </Typography>
            </Box>
          )}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              backgroundColor: theme.palette.primary.main,
              color: '#FFFFFF',
              fontSize: '0.75rem',
              fontWeight: 700,
              px: 1,
              py: 0.5,
              borderRadius: '0 0 0.5rem 0',
            }}
          >
            #{number}
          </Box>
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.text.primary, mb: 1 }}>
          {name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center', fontSize: '0.875rem', color: '#E0E0E0', mb: 3 }}>
          <Typography sx={{ fontWeight: 600, color: positionColors[position] }}>
            {position}
          </Typography>
          {nationality && <Typography>• {nationality}</Typography>}
          {age && <Typography>• {age}</Typography>}
        </Box>
        <Box sx={{ mt: 'auto', pt: 1 }}>
          <Typography variant="caption" sx={{ color: '#E0E0E0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {position === 'GK' ? 'Goalkeeper' : position === 'DEF' ? 'Defender' : position === 'MID' ? 'Midfielder' : 'Forward'}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PlayerCard;
