import { Hero } from '@/components/ui/hero';
import { MatchCard } from '@/components/ui/match-card';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { nextMatch, recentMatches } from '@/data/matches';

export default function FixturesPage() {
  const upcomingMatches = nextMatch ? [nextMatch] : [];
  const allMatches = [...recentMatches];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <Hero
        title="Fixtures & Results"
        subtitle="Follow APOEL FC through every match of the 2025–26 season"
        className="py-12 md:py-20"
      />

      {/* Next Match */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Next Match</h2>
          <div className="max-w-2xl mx-auto">
            {upcomingMatches.map((match, index) => (
              <MatchCard
                key={index}
                date={match.date}
                homeTeam={match.homeTeam}
                awayTeam={match.awayTeam}
                score={match.score}
                competition={match.competition}
                venue={match.venue}
                status={match.status}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Results */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Recent Results</h2>
          <div className="space-y-4">
            {allMatches.map((match, index) => (
              <MatchCard
                key={index}
                date={match.date}
                homeTeam={match.homeTeam}
                awayTeam={match.awayTeam}
                score={match.score}
                competition={match.competition}
                venue={match.venue}
                status={match.status}
                result={match.result}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Season Calendar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Season Calendar</h2>
          <Card>
            <CardContent className="p-8">
              <div className="text-center">
                <p className="text-text-secondary mb-6">
                  Download the full 2025–26 season calendar and never miss a match.
                </p>
                <Button variant="primary" size="lg">
                  Download Calendar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
