# APOEL FC Fan Portal — Architecture

## Stack
- **Framework**: Next.js 14 App Router
- **Styling**: Tailwind CSS with custom CSS variables
- **Language**: TypeScript
- **Package manager**: npm
- **Icons**: Lucide React
- **Fonts**: Inter (loaded via Google Fonts with Greek support)

## Project Structure
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # Home
│   ├── squad/
│   │   └── page.tsx          # Squad
│   ├── history/
│   │   └── page.tsx          # History
│   └── stadium/
│       └── page.tsx          # Stadium
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── hero.tsx
│   │   ├── match-card.tsx
│   │   ├── player-card.tsx
│   │   ├── timeline-item.tsx
│   │   └── stats-summary.tsx
│   ├── navigation/
│   │   ├── header.tsx
│   │   └── mobile-menu.tsx
│   └── layout/
│       ├── footer.tsx
│       └── container.tsx
├── data/
│   ├── squad.ts
│   ├── matches.ts
│   ├── history.ts
│   └── stadium.ts
├── lib/
│   └── utils.ts
├── styles/
│   └── globals.css
├── types/
│   └── index.ts
public/
├── images/
│   ├── logo.svg
│   ├── gsp-stadium.jpg
│   └── icons/
│       ├── trophy.svg
│       ├── league.svg
│       ├── cup.svg
│       └── super-cup.svg
└── favicon.ico
```

## Color Palette & Design System

```css
:root {
  /* Brand Colors */
  --primary: #F7941D;        /* Orange - Primary brand color */
  --primary-hover: #FFA53A;  /* Brighter orange for hover */
  --primary-active: #D67D15; /* Darker orange for active */
  
  /* Neutral Colors */
  --background: #0A0A0A;     /* Dark charcoal background */
  --surface: #111111;        /* Slightly lighter surface for cards */
  --accent: #000000;         /* Black for borders and overlays */
  --text-primary: #FFFFFF;   /* White for headings and primary text */
  --text-secondary: #E0E0E0; /* Light gray for body text */
  --border: #2A2A2A;         /* Subtle border color */
  
  /* Status Colors */
  --win: #F7941D;            /* Orange for wins */
  --draw: #A0A0A0;           /* Gray for draws */
  --loss: #707070;           /* Gray for losses */
  
  /* Spacing */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 48px;
  --spacing-xl: 64px;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  
  /* Typography */
  --font-heading: 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-weight-heading: 700;
  --font-weight-body: 400;
  --font-weight-subheading: 500;
  
  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.4);
}
```

## Pages & Components

### Home Page (`/`)
- **Route**: `/`
- **Component**: `src/app/page.tsx`
- **Sub-components**:
  - `src/components/navigation/header.tsx` - Navigation
  - `src/components/ui/hero.tsx` - Hero section
  - `src/components/ui/match-card.tsx` - Next match card
  - `src/components/ui/card.tsx` - Recent results cards
  - `src/components/layout/footer.tsx` - Footer with social links

- **Data to Display**:
  - **Hero**:
    - Background: GSP Stadium night image
    - Logo: APOEL FC crest
    - Tagline: "29 Titles. One Club."
    - CTAs: "Watch Highlights", "Buy Tickets" (links to apoelfc.com.cy)
  
  - **Next Match**:
    - Home team: AEK Larnaca
    - Away team: APOEL
    - Date: March 22, 2026
    - Competition: Cyprus First Division
    - Venue: GSP Stadium, Nicosia
    - Status: "Upcoming"
    - Score: "vs"
  
  - **Recent Results** (5 matches):
    1. March 22, 2026: AEK Larnaca 1–0 APOEL (L)
    2. March 15, 2026: Aris Limassol 1–2 APOEL (W)
    3. March 8, 2026: APOEL 2–0 Anorthosis (W)
    4. February 28, 2026: AEK Larnaca 3–2 APOEL (L)
    5. February 22, 2026: APOEL 1–0 Omonia (W)
  
  - **Quick Links**:
    - Squad, History, Stadium, Fan Forum (placeholder)
    - Social media icons with sharing functionality

### Squad Page (`/squad`)
- **Route**: `/squad`
- **Component**: `src/app/squad/page.tsx`
- **Sub-components**:
  - `src/components/ui/hero.tsx` - Hero section
  - `src/components/ui/player-card.tsx` - Player cards
  - `src/components/ui/card.tsx` - Position group cards

- **Data to Display** (verbatim from spec):

  **Goalkeepers**:
  - Gabriel Pereira (1)
  - Andreas Christodoulou (22)
  - Vid Belec (27)
  - Savvas Michos (78)

  **Defenders**:
  - Evagoras Antoniou (2)
  - Kostas Stafylidis (3)
  - Miloš Degenek (5)
  - Vitor Meer (6)
  - Nanu (14)
  - Franz Brorsson (31)
  - Konstantinos Laifis (34)
  - Konstantinos Giannakoulis (45)

  **Midfielders**:
  - Max Meyer (7)
  - David Abagna (17)
  - Dálcio (20)
  - Konstantinos Poursaitidis (21)
  - Panagiotis Kattirtzis (23)
  - Christos Karanatsios (25)
  - Diego Rosa (29)
  - Charles Appiah (36)
  - Geovane Meurer (38)

  **Forwards**:
  - Stefan Dražić (9)
  - Marquinhos (10)
  - Gabriel Maioli (11)
  - Mathías Tomás (15)
  - Dimitris Diamantakos (18)
  - Pedro Ataíde (39)
  - Daniel Mancini (77)
  - Pieros Sotiriou (79)
  - Nikolas Koutsakos (89)
  - Peter Olayinka (99)

- **Design**: Dark background, orange accent for jersey numbers, hover effects with orange glow

### History Page (`/history`)
- **Route**: `/history`
- **Component**: `src/app/history/page.tsx`
- **Sub-components**:
  - `src/components/ui/hero.tsx` - Hero section
  - `src/components/ui/timeline-item.tsx` - Timeline items
  - `src/components/ui/stats-summary.tsx` - Stats summary
  - `src/components/ui/card.tsx` - Era cards

- **Data to Display** (verbatim from spec):

  **Hero**:
  - Title: "A Legacy of Excellence"
  - Subtitle: "29 National Championships • 21 Cups • 13 Super Cups"
  - Highlight: "Only Cypriot club to reach UEFA Champions League quarter-finals (2011–12)"

  **Timeline Sections**:
  - **Founding & Early Years**:
    - November 8, 1926 — Founded in Nicosia
    - 1955–1959: Early dominance
  
  - **Golden Era Highlights**:
    - 1995–1996: Unbeaten "double" season
  
  - **Modern Glory**:
    - 2011–12: Historic Champions League quarter-final run
    - Ongoing: Most league titles in Cypriot history (29)

  **Stats Summary**:
  - 29 league titles
  - 21 cups
  - 13 super cups
  - Champions League quarter-finals (2011–12)

- **Interactive Elements**: Expandable cards, orange year markers, trophy icons

### Stadium Page (`/stadium`)
- **Route**: `/stadium`
- **Component**: `src/app/stadium/page.tsx`
- **Sub-components**:
  - `src/components/ui/hero.tsx` - Hero section
  - `src/components/ui/card.tsx` - Key facts cards
  - `src/components/ui/match-card.tsx` - Matchday guide

- **Data to Display** (verbatim from spec):

  **Hero**:
  - Title: "GSP Stadium"
  - Subtitle: "Home of APOEL FC"
  - Background: High-res GSP Stadium night image

  **Key Facts**:
  - Location: Nicosia, Cyprus
  - Capacity: 22,859 seats
  - Officially opened: October 6, 1999
  - Home to: APOEL FC and AC Omonia

  **Features**:
  - Matchday guide with ticketing link to apoelfc.com.cy
  - Gallery placeholder
  - Orange accent on capacity number and opening date

## Data Layer

### Types (`src/types/index.ts`)
```typescript
export interface Player {
  name: string;
  number: number;
  position: 'GK' | 'DEF' | 'MID' | 'FWD';
  nationality?: string;
  age?: number;
}

export interface Match {
  date: string;
  homeTeam: string;
  awayTeam: string;
  score?: string;
  competition: string;
  venue: string;
  status: 'Upcoming' | 'Live' | 'Final';
  result?: 'W' | 'D' | 'L';
}

export interface HistoryEra {
  title: string;
  items: { date: string; description: string }[];
}

export interface StadiumInfo {
  name: string;
  location: string;
  capacity: number;
  opened: string;
  homeTo: string[];
}
```

### Data Files (`src/data/`)

**squad.ts**:
```typescript
import { Player } from '@/types';

export const squad: Record<string, Player[]> = {
  goalkeepers: [
    { name: 'Gabriel Pereira', number: 1, position: 'GK' },
    { name: 'Andreas Christodoulou', number: 22, position: 'GK' },
    { name: 'Vid Belec', number: 27, position: 'GK' },
    { name: 'Savvas Michos', number: 78, position: 'GK' },
  ],
  defenders: [
    { name: 'Evagoras Antoniou', number: 2, position: 'DEF' },
    { name: 'Kostas Stafylidis', number: 3, position: 'DEF' },
    { name: 'Miloš Degenek', number: 5, position: 'DEF' },
    { name: 'Vitor Meer', number: 6, position: 'DEF' },
    { name: 'Nanu', number: 14, position: 'DEF' },
    { name: 'Franz Brorsson', number: 31, position: 'DEF' },
    { name: 'Konstantinos Laifis', number: 34, position: 'DEF' },
    { name: 'Konstantinos Giannakoulis', number: 45, position: 'DEF' },
  ],
  midfielders: [
    { name: 'Max Meyer', number: 7, position: 'MID' },
    { name: 'David Abagna', number: 17, position: 'MID' },
    { name: 'Dálcio', number: 20, position: 'MID' },
    { name: 'Konstantinos Poursaitidis', number: 21, position: 'MID' },
    { name: 'Panagiotis Kattirtzis', number: 23, position: 'MID' },
    { name: 'Christos Karanatsios', number: 25, position: 'MID' },
    { name: 'Diego Rosa', number: 29, position: 'MID' },
    { name: 'Charles Appiah', number: 36, position: 'MID' },
    { name: 'Geovane Meurer', number: 38, position: 'MID' },
  ],
  forwards: [
    { name: 'Stefan Dražić', number: 9, position: 'FWD' },
    { name: 'Marquinhos', number: 10, position: 'FWD' },
    { name: 'Gabriel Maioli', number: 11, position: 'FWD' },
    { name: 'Mathías Tomás', number: 15, position: 'FWD' },
    { name: 'Dimitris Diamantakos', number: 18, position: 'FWD' },
    { name: 'Pedro Ataíde', number: 39, position: 'FWD' },
    { name: 'Daniel Mancini', number: 77, position: 'FWD' },
    { name: 'Pieros Sotiriou', number: 79, position: 'FWD' },
    { name: 'Nikolas Koutsakos', number: 89, position: 'FWD' },
    { name: 'Peter Olayinka', number: 99, position: 'FWD' },
  ],
};
```

**matches.ts**:
```typescript
import { Match } from '@/types';

export const nextMatch: Match = {
  date: 'March 22, 2026',
  homeTeam: 'AEK Larnaca',
  awayTeam: 'APOEL',
  competition: 'Cyprus First Division',
  venue: 'GSP Stadium, Nicosia',
  status: 'Upcoming',
};

export const recentResults: Match[] = [
  {
    date: 'March 22, 2026',
    homeTeam: 'AEK Larnaca',
    awayTeam: 'APOEL',
    score: '1–0',
    competition: 'Cyprus First Division',
    venue: 'GSP Stadium, Nicosia',
    status: 'Final',
    result: 'L',
  },
  {
    date: 'March 15, 2026',
    homeTeam: 'Aris Limassol',
    awayTeam: 'APOEL',
    score: '1–2',
    competition: 'Cyprus First Division',
    venue: 'GSP Stadium, Nicosia',
    status: 'Final',
    result: 'W',
  },
  {
    date: 'March 8, 2026',
    homeTeam: 'APOEL',
    awayTeam: 'Anorthosis',
    score: '2–0',
    competition: 'Cyprus First Division',
    venue: 'GSP Stadium, Nicosia',
    status: 'Final',
    result: 'W',
  },
  {
    date: 'February 28, 2026',
    homeTeam: 'AEK Larnaca',
    awayTeam: 'APOEL',
    score: '3–2',
    competition: 'Cyprus First Division',
    venue: 'GSP Stadium, Nicosia',
    status: 'Final',
    result: 'L',
  },
  {
    date: 'February 22, 2026',
    homeTeam: 'APOEL',
    awayTeam: 'Omonia',
    score: '1–0',
    competition: 'Cyprus First Division',
    venue: 'GSP Stadium, Nicosia',
    status: 'Final',
    result: 'W',
  },
];
```

**history.ts**:
```typescript
import { HistoryEra } from '@/types';

export const historyEras: HistoryEra[] = [
  {
    title: 'Founding & Early Years',
    items: [
      { date: 'November 8, 1926', description: 'Founded in Nicosia' },
      { date: '1955–1959', description: 'Early dominance' },
    ],
  },
  {
    title: 'Golden Era Highlights',
    items: [
      { date: '1995–1996', description: 'Unbeaten "double" season' },
    ],
  },
  {
    title: 'Modern Glory',
    items: [
      { date: '2011–12', description: 'Historic Champions League quarter-final run' },
      { date: 'Ongoing', description: 'Most league titles in Cypriot history (29)' },
    ],
  },
];

export const clubStats = {
  leagueTitles: 29,
  cups: 21,
  superCups: 13,
  championsLeagueQuarterFinals: '2011–12',
};
```

**stadium.ts**:
```typescript
import { StadiumInfo } from '@/types';

export const stadiumInfo: StadiumInfo = {
  name: 'GSP Stadium',
  location: 'Nicosia, Cyprus',
  capacity: 22859,
  opened: 'October 6, 1999',
  homeTo: ['APOEL FC', 'AC Omonia'],
};
```

## Deployment

- **Build command**: `npm run build`
- **Output**: `.next/standalone` (Next.js standalone mode)
- **Dockerfile**: Yes, using `node:18-alpine` base image
- **Helm chart**: `chart/` directory with values for production
- **Ingress host**: `apoel.everestlabs.dev`
- **Registry**: `100.113.62.14:32000/apoel:latest`

### Docker Configuration

**Dockerfile**:
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

### Helm Chart Structure

```
chart/
├── Chart.yaml
├── values.yaml
├── templates/
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│   └── configmap.yaml
└── README.md
```

## Assumptions

1. **Hero Images**: High-resolution GSP Stadium night images will be provided; placeholder used in development
2. **Logo**: APOEL FC crest will be provided as SVG; placeholder used in development
3. **Social Media Links**: Placeholder links to be replaced with actual URLs
4. **Fan Forum**: Placeholder link to be replaced with actual forum URL
5. **Jersey Shop**: Link to orangeshop.com.cy for squad page CTA
6. **Match Data**: All match data is hardcoded as per spec; no API integration needed
7. **Greek Fonts**: Inter font loaded with Greek character support via Google Fonts
8. **No Light Theme**: Strict dark mode only as per requirements
9. **No Blue Colors**: Strict enforcement of color palette to avoid royal blue variants
