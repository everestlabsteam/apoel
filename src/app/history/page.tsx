import { Hero } from '@/components/ui/hero';
import { TimelineItem } from '@/components/ui/timeline-item';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { historyEras } from '@/data/history';

export default function HistoryPage() {
  // Flatten history eras for timeline
  const timelineItems = historyEras.flatMap(era =>
    era.items.map((item, index) => ({
      ...item,
      eraTitle: era.title,
      index: index,
    }))
  );

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <Hero
        title="A Legacy of Excellence"
        subtitle="From 1926 to 29 league titles — the story of APOEL FC"
        className="py-12 md:py-20"
      />

      {/* Quick Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <div className="text-4xl font-bold text-primary mb-2">1926</div>
                <div className="text-sm text-text-secondary uppercase tracking-wider">
                  Founded
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <div className="text-4xl font-bold text-primary mb-2">29</div>
                <div className="text-sm text-text-secondary uppercase tracking-wider">
                  League Titles
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <div className="text-4xl font-bold text-primary mb-2">Quarter-Finals</div>
                <div className="text-sm text-text-secondary uppercase tracking-wider">
                  Champions League
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12">29 League Titles Timeline</h2>
          <div className="space-y-4">
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={`${item.eraTitle}-${item.date}`}
                date={item.date}
                description={item.description}
                expanded={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Champions League Journey */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">European Glory</h2>
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    2011–12 UEFA Champions League
                  </h3>
                  <p className="text-text-secondary mb-6">
                    APOEL made history by becoming the first Cypriot club to reach the
                    quarter-finals of the UEFA Champions League. Our journey included
                    memorable victories over Rosenborg, Panathinaikos, and Real Madrid
                    in the Round of 32.
                  </p>
                  <Button variant="primary">Read Full Story</Button>
                </div>
                <div className="flex-1">
                  <div className="bg-primary/10 rounded-lg p-6 text-center">
                    <div className="text-5xl font-bold text-primary mb-2">8</div>
                    <div className="text-sm text-text-secondary uppercase tracking-wider">
                      Matches Played
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Club Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Club Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <div className="text-4xl font-bold text-primary mb-2">29</div>
                <div className="text-sm text-text-secondary uppercase tracking-wider">
                  League Titles
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <div className="text-4xl font-bold text-primary mb-2">21</div>
                <div className="text-sm text-text-secondary uppercase tracking-wider">
                  Cups
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <div className="text-4xl font-bold text-primary mb-2">13</div>
                <div className="text-sm text-text-secondary uppercase tracking-wider">
                  Super Cups
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <div className="text-4xl font-bold text-primary mb-2">1</div>
                <div className="text-sm text-text-secondary uppercase tracking-wider">
                  CL Quarter-Finals
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
