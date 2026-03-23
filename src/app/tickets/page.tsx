import { Hero } from '@/components/ui/hero';
import { Card, CardContent, CardTitle, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy Tickets | APOEL FC Fan Portal',
  description: 'Secure your spot at GSP Stadium for the 2025–26 season. General Admission, VIP, and Season Pass options available.',
  keywords: ['APOEL tickets', 'GSP Stadium tickets', 'APOEL FC tickets', 'football tickets Cyprus'],
  authors: [{ name: 'APOEL FC' }],
  creator: 'APOEL FC',
  publisher: 'APOEL Football Club',
  metadataBase: new URL('https://apoel.everestlabs.dev'),
  openGraph: {
    title: 'Buy Tickets | APOEL FC Fan Portal',
    description: 'Secure your spot at GSP Stadium for the 2025–26 season. General Admission, VIP, and Season Pass options available.',
    type: 'website',
    locale: 'en_US',
    url: 'https://apoel.everestlabs.dev/tickets',
    siteName: 'APOEL FC',
    images: [
      {
        url: 'https://apoel.everestlabs.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Buy APOEL FC Tickets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy Tickets | APOEL FC',
    description: 'Secure your spot at GSP Stadium',
    creator: '@APOEL_FC',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://apoel.everestlabs.dev/tickets',
  },
};

export default function TicketsPage() {
  const ticketTypes = [
    {
      name: 'General Admission',
      price: '€15',
      description: 'Standard entry to all home league matches',
      features: ['General seating area', 'Access to all home matches', 'Digital ticketing'],
    },
    {
      name: 'VIP Ticket',
      price: '€50',
      description: 'Premium experience with exclusive amenities',
      features: [
        'VIP seating section',
        'Access to VIP lounge',
        'Complimentary food and drinks',
        'Priority parking',
      ],
      popular: true,
    },
    {
      name: 'Season Pass',
      price: '€299',
      description: 'Unlimited access to all home matches this season',
      features: [
        'All home league matches',
        'VIP lounge access',
        'Season merchandise discount',
        'Priority seat selection',
      ],
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 8 } }}>
      {/* Hero Section */}
      <Hero
        title="Buy Tickets"
        subtitle="Secure your spot at GSP Stadium for the 2025–26 season"
        className="py-12 md:py-20"
      />

      {/* Ticket Cards */}
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {ticketTypes.map((ticket, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card hover={ticket.popular} className="relative h-full">
                  {ticket.popular && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                        px: 2,
                        py: 0.5,
                        borderRadius: '50px',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                      }}
                    >
                      Most Popular
                    </Box>
                  )}
                  <CardContent className="p-4">
                    <CardTitle>{ticket.name}</CardTitle>
                    <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main', mb: 2 }}>
                      {ticket.price}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                      {ticket.description}
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      {ticket.features.map((feature, idx) => (
                        <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                          <Check 
                            size={20} 
                            style={{ 
                              color: 'primary.main', 
                              marginRight: '0.75rem', 
                              flexShrink: 0 
                            }} 
                          />
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <Link href="https://apoelfc.com.cy/tickets" style={{ textDecoration: 'none' }}>
                      <Button 
                        variant={ticket.popular ? 'primary' : 'outline'} 
                        sx={{ width: '100%' }}
                      >
                        Buy Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Info Section */}
      <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 4 }}>
            Ticket Information
          </Typography>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Match Day Rules</CardTitle>
                </CardHeader>
                <CardContent>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Typography variant="body2" sx={{ color: 'primary.main', mr: 1 }}>•</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Gates open 90 minutes before kickoff. Arrive early to avoid queues.
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Typography variant="body2" sx={{ color: 'primary.main', mr: 1 }}>•</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Valid photo ID required for entry. Tickets are non-transferable.
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Typography variant="body2" sx={{ color: 'primary.main', mr: 1 }}>•</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Prohibited items include bottles, cans, flares, and large bags.
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Typography variant="body2" sx={{ color: 'primary.main', mr: 1 }}>•</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Fans are expected to behave respectfully. Disruptive behavior may
                        result in ejection.
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Supporter Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Typography variant="body2" sx={{ color: 'primary.main', mr: 1 }}>•</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Ticket office: Open Monday–Friday, 10am–6pm at GSP Stadium
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Typography variant="body2" sx={{ color: 'primary.main', mr: 1 }}>•</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Phone: +357 22 711 111 | Email: tickets@apoelfc.com.cy
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Typography variant="body2" sx={{ color: 'primary.main', mr: 1 }}>•</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Disabled access: Contact us in advance for accessible seating
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Typography variant="body2" sx={{ color: 'primary.main', mr: 1 }}>•</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Refunds: Available for match cancellations only
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
