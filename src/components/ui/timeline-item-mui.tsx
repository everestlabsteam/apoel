import { Box, Typography, Paper, Divider } from '@mui/material';
import { theme } from '@/lib/theme';

interface TimelineItemProps {
  title: string;
  date: string;
  description: string;
  eraTitle: string;
  index: number;
}

export function TimelineItem({ title, date, description, eraTitle, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: isLeft ? 'row' : 'row-reverse' },
        alignItems: 'center',
        mb: 8,
        gap: 4,
      }}
    >
      <Box
        sx={{
          flex: { xs: 1, md: 1 },
          display: 'flex',
          justifyContent: { xs: 'center', md: isLeft ? 'flex-start' : 'flex-end' },
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
            {date.split(',')[0]}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flex: { xs: 1, md: 1 },
          pl: { xs: 0, md: isLeft ? 4 : 0 },
          pr: { xs: 0, md: isLeft ? 0 : 4 },
        }}
      >
        <Paper
          sx={{
            p: 4,
            backgroundColor: theme.palette.background.default,
            border: `1px solid #2A2A2A`,
            '&:hover': {
              boxShadow: 4,
            },
          }}
        >
          <Typography variant="caption" sx={{ color: theme.palette.primary.main, fontWeight: 700, mb: 1, display: 'block' }}>
            {eraTitle}
          </Typography>
          <Typography variant="h5" sx={{ color: theme.palette.text.primary, mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            {date}
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mt: 2 }}>
            {description}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
