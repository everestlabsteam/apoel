import { Hero } from '@/components/ui/hero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NewsPage() {
  const news = [
    {
      title: 'APOEL FC Announces 2025–26 Squad Signings',
      excerpt: 'The club makes three key additions to the squad ahead of the new season.',
      date: 'March 15, 2026',
      image: '/news/squad-signings.jpg',
    },
    {
      title: 'GSP Stadium Renovation Complete',
      excerpt: 'Modern upgrades to fan facilities and VIP areas for the upcoming season.',
      date: 'March 10, 2026',
      image: '/news/stadium-renovation.jpg',
    },
    {
      title: 'APOEL FC Foundation Launches Youth Program',
      excerpt: 'New initiative to nurture the next generation of Cypriot football talent.',
      date: 'March 5, 2026',
      image: '/news/youth-program.jpg',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <Hero
        title="Latest News"
        subtitle="Stay updated with the latest APOEL FC news and announcements"
        className="py-12 md:py-20"
      />

      {/* News Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card key={index} hover className="group cursor-pointer">
                <div className="aspect-video bg-surface/50 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-text-secondary">Image {index + 1}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-xs text-primary font-bold mb-2">
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary">{item.excerpt}</p>
                  <Button variant="outline" className="mt-4 p-0 h-auto">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">News Archive</h2>
          <p className="text-text-secondary mb-8">
            Browse our complete archive of news articles, press releases, and
            announcements.
          </p>
          <Button variant="primary" size="lg">
            View All News
          </Button>
        </div>
      </section>
    </div>
  );
}
