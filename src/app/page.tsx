import { Hero } from '@/components/ui/hero';
import { MatchCard } from '@/components/ui/match-card';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { nextMatch, recentMatches } from '@/data/matches';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <Hero
        title="29 Titles. One Club."
        subtitle="Welcome to the official APOEL FC fan portal. Join us in celebrating our legacy and supporting our team."
        cta={[
          { label: 'Watch Highlights', href: '#' },
          { label: 'Buy Tickets', href: 'https://apoelfc.com.cy' },
        ]}
        className="py-12 md:py-20"
      />

      {/* Next Match Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Next Match</h2>
          <MatchCard
            date={nextMatch.date}
            homeTeam={nextMatch.homeTeam}
            awayTeam={nextMatch.awayTeam}
            score={nextMatch.score}
            competition={nextMatch.competition}
            venue={nextMatch.venue}
            status={nextMatch.status}
          />
        </div>
      </section>

      {/* Recent Results Section */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Recent Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentMatches.map((match, index) => (
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

      {/* Quick Links Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/squad">
              <Card hover className="cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <div className="text-4xl font-bold text-primary mb-2">25</div>
                  <div className="text-sm text-text-secondary uppercase tracking-wider">
                    Players
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/history">
              <Card hover className="cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <div className="text-4xl font-bold text-primary mb-2">29</div>
                  <div className="text-sm text-text-secondary uppercase tracking-wider">
                    League Titles
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/stadium">
              <Card hover className="cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <div className="text-4xl font-bold text-primary mb-2">22,859</div>
                  <div className="text-sm text-text-secondary uppercase tracking-wider">
                    Capacity
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="#">
              <Card hover className="cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <div className="text-4xl font-bold text-primary mb-2">Forum</div>
                  <div className="text-sm text-text-secondary uppercase tracking-wider">
                    Join Fan Forum
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
