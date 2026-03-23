import { Hero } from '@/components/ui/hero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { stadiumInfo } from '@/data/stadium';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GSP Stadium | APOEL FC Fan Portal',
  description: 'The home of APOEL FC — Nicosia\'s iconic football arena. Visit us for unforgettable match days.',
};

export default function StadiumPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <Hero
        title="GSP Stadium"
        subtitle="The home of APOEL FC — Nicosia's iconic football arena"
        className="py-12 md:py-20"
      />

      {/* Stadium Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Stadium Facts</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-surface/50 pb-4">
                    <span className="text-text-secondary">Capacity</span>
                    <span className="font-bold text-primary">{stadiumInfo.capacity.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-surface/50 pb-4">
                    <span className="text-text-secondary">Opened</span>
                    <span className="font-bold text-primary">{stadiumInfo.opened}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-surface/50 pb-4">
                    <span className="text-text-secondary">Location</span>
                    <span className="font-bold text-primary">{stadiumInfo.location}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-surface/50 pb-4">
                    <span className="text-text-secondary">Home To</span>
                    <span className="font-bold text-primary">{stadiumInfo.homeTo.join(' & ')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Visit Us</h2>
                <div className="space-y-4">
                  <div>
                    <span className="block text-text-secondary mb-1">Address</span>
                    <span className="text-white">Stadium Avenue</span>
                    <span className="block text-text-secondary">Nicosia, Cyprus</span>
                  </div>
                  <div>
                    <span className="block text-text-secondary mb-1">Parking</span>
                    <span className="text-white">Available on match days</span>
                  </div>
                  <div>
                    <span className="block text-text-secondary mb-1">Public Transport</span>
                    <span className="text-white">Bus lines 171, 172, 173</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stadium Gallery */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Stadium Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-video bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-text-secondary">Match Day Atmosphere</span>
            </div>
            <div className="aspect-video bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-text-secondary">Pitch View</span>
            </div>
            <div className="aspect-video bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-text-secondary">Stadium Exterior</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Plan Your Visit</h2>
              <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                Experience the roar of 22,859 fans at GSP Stadium. Ticket sales open
                7 days before each match. Arrive early to enjoy the pre-match atmosphere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg">
                  Buy Tickets
                </Button>
                <Button variant="outline" size="lg">
                  Group Bookings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
