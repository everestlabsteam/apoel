import { Hero } from '@/components/ui/hero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
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
    <div className="space-y-16">
      {/* Hero Section */}
      <Hero
        title="Buy Tickets"
        subtitle="Secure your spot at GSP Stadium for the 2025–26 season"
        className="py-12 md:py-20"
      />

      {/* Ticket Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ticketTypes.map((ticket, index) => (
              <Card
                key={index}
                className={`relative ${
                  ticket.popular ? 'border-primary ring-2 ring-primary/20' : ''
                }`}
              >
                {ticket.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{ticket.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-4">{ticket.price}</div>
                  <p className="text-text-secondary mb-6">{ticket.description}</p>
                  <ul className="space-y-3 mb-8">
                    {ticket.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://apoelfc.com.cy/tickets">
                    <Button variant={ticket.popular ? 'primary' : 'outline'} className="w-full">
                      Buy Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Ticket Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">Match Day Rules</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Gates open 90 minutes before kickoff. Arrive early to avoid queues.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Valid photo ID required for entry. Tickets are non-transferable.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Prohibited items include bottles, cans, flares, and large bags.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Fans are expected to behave respectfully. Disruptive behavior may
                      result in ejection.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">Supporter Services</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Ticket office: Open Monday–Friday, 10am–6pm at GSP Stadium
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Phone: +357 22 711 111 | Email: tickets@apoelfc.com.cy
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Disabled access: Contact us in advance for accessible seating
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Refunds: Available for match cancellations only
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
