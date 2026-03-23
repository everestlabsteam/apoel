import { Hero } from '@/components/ui/hero';
import { PlayerCard } from '@/components/ui/player-card';
import { squad } from '@/data/squad';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SquadPage() {
  const positions = ['goalkeepers', 'defenders', 'midfielders', 'forwards'];
  const positionLabels = {
    goalkeepers: 'Goalkeepers',
    defenders: 'Defenders',
    midfielders: 'Midfielders',
    forwards: 'Forwards',
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <Hero
        title="2025–26 Squad"
        subtitle="Meet the players who make history every season"
        className="py-12 md:py-20"
      />

      {/* Squad Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {positions.map((position) => (
            <div key={position} className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6">
                {positionLabels[position as keyof typeof positionLabels]}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {squad[position as keyof typeof squad].map((player) => (
                  <PlayerCard
                    key={player.number}
                    number={player.number}
                    name={player.name}
                    position={player.position}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fan Shop Section */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Buy Your Jersey</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Show your support for the club with our official 2025–26 replica jerseys.
            Available for all squad members.
          </p>
          <a href="https://orangeshop.com.cy">
            <Button variant="primary" size="lg">
              Buy Jersey
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
