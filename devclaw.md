# apoel — Project Context (devclaw.md)

Generated: 2026-03-23T05:46:57.867Z
Deploy: https://apoel.everestlabs.dev
Registry: 100.113.62.14:32000/apoel:latest
Namespace: apoel

## BA Spec
# APOEL FC Fan Portal — Requirements Spec

## Business Context
APOEL.everestlabs.dev is a premium Next.js SSR fan portal for APOEL Football Club — Cyprus’s most successful football club. The site serves fans globally with official club information, match schedules, squad details, history, and stadium information. Success is measured by high engagement on match days, increased time-on-site for historical content, and clear conversion paths to official site (apoelfc.com.cy) and social channels.

## Brand & Identity
- **Full name**: APOEL Football Club (Αθλητικός Ποδοσφαιρικός Όμιλος Ελλήνων Λευκωσίας)
- **Nickname**: Θρύλος (The Legend)
- **Founded**: November 8, 1926, Nicosia, Cyprus
- **Official site**: apoelfc.com.cy
- **Primary color**: Orange `#F7941D` (used as the sole primary color — NOT blue)
- **Secondary color**: White `#FFFFFF`
- **Accent color**: Black `#000000`
- **Tone**: Modern, authoritative, proud, fan-centric
- **Design style**: Dark/modern aesthetic; clean, minimal navigation; mobile-first
- **Design inspiration**: Arsenal’s 2024/25 site redesign, Liverpool’s fan engagement structures
- **Critical constraint**: NO blue colors — strictly avoid royal blue (`#004690`) or any blue variants

## Site Map
- `/` — Home
- `/squad` — Squad
- `/history` — History
- `/stadium` — Stadium

## Page Specs

### Home / Hero
- **Purpose**: Welcome fans, highlight next match, showcase recent results, drive engagement
- **Hero Section**:
  - Background: Dark gradient or high-res GSP Stadium image (overlay dark gradient)
  - Logo: APOEL FC crest (positioned top-left or centered)
  - Tagline: “Θρύλος” (The Legend) or “29 Titles. One Club.”
  - Call-to-action: “Watch Highlights” / “Buy Tickets” (links to apoelfc.com.cy)
- **Next Match Section**:
  - Title: “Next Match”
  - Data to display:
    - Home team: AEK Larnaca
    - Away team: APOEL
    - Date: March 22, 2026
    - Time: (not specified — omit if unavailable)
    - Competition: Cyprus First Division
    - Venue: GSP Stadium, Nicosia
    - Status: “Live” or “Upcoming”
    - Score: “vs” (pre-match)
  - Visual: Match card with team badges (if available), orange accent border
- **Recent Results Section**:
  - Title: “Recent Results”
  - List of last 5 matches (2025-26 season):
    - March 22, 2026: AEK Larnaca 1–0 APOEL
    - March 15, 2026: Aris Limassol 1–2 APOEL
    - March 8, 2026: APOEL 2–0 Anorthosis
    - February 28, 2026: AEK Larnaca 3–2 APOEL
    - February 22, 2026: APOEL 1–0 Omonia
  - Format: Compact cards with date, opponent, score, result (W/D/L), orange highlight for wins
- **Quick Links Section**:
  - Links to Squad, History, Stadium pages
  - Social media icons (one-click sharing)
  - “Join Fan Forum” link (placeholder for future engagement features)

### Squad
- **Purpose**: Display full 2025-26 player roster with positions and jersey numbers
- **Layout**: Grid or table view (responsive)
- **Player entries include**:
  - Jersey number
  - Name
  - Position (GK, DEF, MID, FWD)
  - Optional: Nationality, age (if available — not in research, omit if missing)
- **Sections by position**:
  - **Goalkeepers**
    - Gabriel Pereira (1)
    - Andreas Christodoulou (22)
    - Vid Belec (27)
    - Savvas Michos (78)
  - **Defenders**
    - Evagoras Antoniou (2)
    - Kostas Stafylidis (3)
    - Miloš Degenek (5)
    - Vitor Meer (6)
    - Nanu (14)
    - Franz Brorsson (31)
    - Konstantinos Laifis (34)
    - Konstantinos Giannakoulis (45)
  - **Midfielders**
    - Max Meyer (7)
    - David Abagna (17)
    - Dálcio (20)
    - Konstantinos Poursaitidis (21)
    - Panagiotis Kattirtzis (23)
    - Christos Karanatsios (25)
    - Diego Rosa (29)
    - Charles Appiah (36)
    - Geovane Meurer (38)
  - **Forwards**
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
- **Design**: Dark background, orange accent for jersey numbers or player name on hover
- **CTA**: “Buy Jersey” link to official site

### History
- **Purpose**: Celebrate 29 league titles and historic achievements with timeline
- **Hero Section**:
  - Title: “A Legacy of Excellence”
  - Subtitle: “29 National Championships • 21 Cups • 13 Super Cups”
  - Highlight: “Only Cypriot club to reach UEFA Champions League quarter-finals (2011–12)”
- **Timeline Sections**:
  - **Founding & Early Years**
    - November 8, 1926 — Founded in Nicosia
    - 1955–1959: Early dominance
  - **Golden Era Highlights**
    - 1995–1996: Unbeaten “double” season
  - **Modern Glory**
    - 2011–12: Historic Champions League quarter-final run
    - Ongoing: Most league titles in Cypriot history (29)
- **Interactive Elements**:
  - Expandable cards for each era
  - Icons for trophies (league, cup, super cup)
  - Orange accent on year markers
- **Stats Summary**:
  - 29 league titles
  - 21 cups
  - 13 super cups
  - Champions League quarter-finals (2011–12)

### Stadium
- **Purpose**: Showcase GSP Stadium — home of APOEL FC
- **Hero Section**:
  - Title: “GSP Stadium”
  - Subtitle: “Home of APOEL FC”
  - Background: High-res image of stadium (night view preferred)
- **Key Facts**:
  - Location: Nicosia, Cyprus
  - Capacity: 22,859 seats
  - Officially opened: October 6, 1999
  - Home to: APOEL FC and AC Omonia
- **Features**:
  - Matchday guide (ticketing link to apoelfc.com.cy)
  - Gallery section (placeholder for high-res images)
  - Map integration (optional — not specified, omit unless architect recommends)
- **Design**: Dark overlay on imagery, orange accent on capacity number and opening date

## Data Requirements

### Squad Data (verbatim)
- **Goalkeepers**
  - Gabriel Pereira (1)
  - Andreas Christodoulou (22)
  - Vid Belec (27)
  - Savvas Michos (78)

- **Defenders**
  - Evagoras Antoniou (2)
  - Kostas Stafylidis (3)
  - Miloš Degenek (5)
  - Vitor Meer (6)
  - Nanu (14)
  - Franz Brorsson (31)
  - Konstantinos Laifis (34)
  - Konstantinos Giannakoulis (45)

- **Midfielders**
  - Max Meyer (7)
  - David Abagna (17)
  - Dálcio (20)
  - Konstantinos Poursaitidis (21)
  - Panagiotis Kattirtzis (23)
  - Christos Karanatsios (25)
  - Diego Rosa (29)
  - Charles Appiah (36)
  - Geovane Meurer (38)

- **Forwards**
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

### Match Data (verbatim)
- **Next Match**
  - AEK Larnaca vs APOEL
  - March 22, 2026
  - Cyprus First Division
  - GSP Stadium, Nicosia

- **Recent Results (2025–26 Season)**
  - March 22, 2026: AEK Larnaca 1–0 APOEL
  - March 15, 2026: Aris Limassol 1–2 APOEL
  - March 8, 2026: APOEL 2–0 Anorthosis
  - February 28, 2026: AEK Larnaca 3–2 APOEL
  - February 22, 2026: APOEL 1–0 Omonia

### Club History & Stats (verbatim)
- Founded: November 8, 1926, Nicosia, Cyprus
- Nickname: Θρύλος (The Legend)
- Titles:
  - 29 national championships (most in Cypriot football history)
  - 21 cups
  - 13 super cups
- Champions League: Only Cypriot club to reach quarter-finals (2011–12 season)
- Historical highlights:
  - 1955–1959: Early dominance
  - 1995–1996: Unbeaten “double”
  - 2011–12: Champions League quarter-finals

### Stadium Data (verbatim)
- Name: GSP Stadium
- Location: Nicosia, Cyprus
- Capacity: 22,859 seats
- Officially opened: October 6, 1999
- Home to: APOEL FC and AC Omonia

## Design Requirements

- **Color Palette**
  - Primary: Orange `#F7941D` (used for buttons, highlights, accents)
  - Secondary: White `#FFFFFF` (text, logos)
  - Background: Dark (`#0A0A0A` or `#111111` recommended for consistency)
  - Accent: Black `#000000` (borders, subtle overlays)
  - **Critical constraint**: NO blue colors — strictly avoid royal blue (`#004690`) or any blue variants

- **Typography**
  - Headings: Bold, modern sans-serif (e.g., Inter Bold, Montserrat)
  - Body: Clean, highly readable sans-serif (e.g., Inter Regular, Open Sans)
  - Greek characters must be supported (club name: Αθλητικός Ποδοσφαιρικός Όμιλος Ελλήνων Λευκωσίας)

- **Style**
  - Dark mode only (no light theme toggle)
  - High-contrast for accessibility
  - Minimalist navigation: top bar with logo left, links right
  - Card-based layout for match results, squad, history items
  - Hover effects: subtle orange glow or border on interactive elements

- **Reference Sites**
  - Arsenal 2024/25 site (clean nav, dark aesthetic)
  - Liverpool Supporters Board (fan engagement inspiration)
  - Official site: apoelfc.com.cy (branding reference)

- **Mobile-First**
  - Collapsible navigation (hamburger menu)
  - Stacked layout on small screens
  - Touch-friendly buttons (min 44px height)

- **Performance**
  - Next.js SSR for SEO and fast initial load
  - Optimized images (webp, lazy loading)
  - Minimal third-party scripts

## UX Brief
Based on my research and strict adherence to the BA spec and researcher findings, here is the UX brief for the APOEL FC Fan Portal:

# UX Brief — APOEL FC Fan Portal

## Visual Identity

### Color Palette (Verbatim from Requirements)
- **Primary Orange**: `#F7941D` — used for all primary CTAs, highlights, hover states, active states, and accent elements
- **Secondary White**: `#FFFFFF` — used for primary text, headings, logo, and high-contrast elements
- **Background Dark**: `#0A0A0A` — primary background for all pages (dark charcoal, not pure black for reduced eye strain)
- **Accent Black**: `#000000` — used for borders, subtle overlays, and secondary UI elements
- **Text Gray**: `#E0E0E0` — body text for optimal readability against dark background
- **Critical Constraint**: NO blue colors — strictly avoid royal blue (`#004690`) or any blue variants

### Typography
- **Headings**: Inter Bold (or Montserrat Bold) — all caps for section titles, sentence case for page titles
- **Body**: Inter Regular (or Open Sans Regular) — minimum 16px font size for accessibility
- **Greek Support**: Must fully support Greek characters (club name: Αθλητικός Ποδοσφαιρικός Όμιλος Ελλήνων Λευκωσίας)
- **Font Weights**: Bold (700) for headings, Regular (400) for body, Medium (500) for subheadings

### Overall Aesthetic
- **Dark Mode Only** — no light theme toggle
- **Modern Editorial** — clean, minimal, high-contrast
- **Sporty but Sophisticated** — inspired by Arsenal’s 2024/25 redesign and Liverpool’s fan engagement
- **Mobile-First** — responsive grid, touch-friendly targets (min 44px height)
- **High-Performance** — optimized images (WebP, lazy loading), minimal third-party scripts

---

## Layout Patterns

### Hero Section (All Pages)
- **Structure**: Full-bleed hero image (GSP Stadium night view preferred) with dark gradient overlay
- **Logo**: APOEL FC crest positioned top-left (desktop) or centered (mobile)
- **Tagline**: “Θρύλος” (The Legend) or “29 Titles. One Club.” in white, bold, centered or top-left aligned
- **CTA**: Primary orange button (`#F7941D`) with white text, placed below tagline

### Navigation
- **Style**: Fixed top bar, dark background (`#0A0A0A`), white text
- **Desktop**: Logo left, navigation links right (Home, Squad, History, Stadium)
- **Mobile**: Hamburger menu icon (top-right), full-screen overlay menu with dark background
- **Active State**: Orange underline or highlight on current page

### Cards & Grids
- **Card Style**: Dark background (`#111111`), subtle border (`#000000`), rounded corners (4px)
- **Hover State**: Orange border (`#F7941D`) with subtle glow
- **Grid Layout**: 2-column on mobile, 3-column on tablet, 4-column on desktop for squad/history/stadium items
- **Spacing**: 24px vertical, 16px horizontal between cards

### Section Rhythm
- **Spacing**: 64px vertical padding between major sections
- **Dividers**: 1px solid `#000000` between sections
- **Background Alternation**: Alternate between `#0A0A0A` and `#111111` for major sections

---

## Component Behavior

### Buttons
- **Primary (CTA)**: `#F7941D` background, white text, 12px padding, 8px border radius
- **Hover**: Brighter orange (`#FFA53A`) with subtle scale-up (1.02x)
- **Active**: Darker orange (`#D67D15`) with scale-down (0.98x)

### Cards
- **Hover**: Orange border (`#F7941D`) 2px, subtle shadow
- **Click**: Smooth transition, no page reload for interactive elements

### Match Cards
- **Win Highlight**: Orange accent on result text (W) and score
- **Loss Highlight**: Gray accent on result text (L)
- **Draw**: Neutral gray on result text (D)

### Timeline (History Page)
- **Year Markers**: Orange dot (`#F7941D`) on timeline
- **Expandable Cards**: Smooth slide-down animation, orange chevron icon
- **Icons**: Trophy icons in white with orange fill on hover

---

## Anti-patterns to Avoid

- **NO Blue Colors**: Never use royal blue (`#004690`) or any blue variants — even in borders or hover states
- **NO Generic Placeholders**: No lorem ipsum, no “John Doe” names, no fake data
- **NO Light Theme**: No light mode toggle or fallback
- **NO Low-Contrast Text**: All text must meet WCAG AA contrast ratios against dark background
- **NO Generic Bootstrap Styles**: Avoid default Bootstrap blue buttons, generic card borders
- **NO Unoptimized Images**: No large PNGs, no missing alt text, no slow loading
- **NO Non-Greek Fonts**: Must support Greek characters for club name and historical content

---

## Specific Requirements per Page

### Home (`/`)
- **Hero**: Full-bleed GSP Stadium night image with dark gradient, logo top-left, tagline “29 Titles. One Club.”, CTA buttons for “Watch Highlights” and “Buy Tickets” (links to apoelfc.com.cy)
- **Next Match**: Card-based layout with AEK Larnaca vs APOEL, March 22, 2026, Cyprus First Division, venue GSP Stadium, status “Upcoming”, score “vs”, orange accent border
- **Recent Results**: 5 compact cards showing match date, opponent, score, result (W/D/L), with orange highlight for wins (Aris Limassol 1–2 APOEL, APOEL 2–0 Anorthosis, APOEL 1–0 Omonia)
- **Quick Links**: Grid of 4 cards linking to Squad, History, Stadium, Fan Forum (placeholder), social media icons with one-click sharing

### Squad (`/squad`)
- **Hero**: Dark background with white text “2025–26 Squad”, orange accent on jersey numbers
- **Layout**: Responsive grid with cards for each player, grouped by position (Goalkeepers, Defenders, Midfielders, Forwards)
- **Player Card**: Jersey number in large orange font, name in white, position in gray, optional nationality/age if available
- **Hover**: Orange glow on card, jersey number brightens
- **CTA**: “Buy Jersey” button linking to orangeshop.com.cy

### History (`/history`)
- **Hero**: Title “A Legacy of Excellence”, subtitle “29 National Championships • 21 Cups • 13 Super Cups”, highlight “Only Cypriot club to reach UEFA Champions League quarter-finals (2011–12)”
- **Timeline**: Horizontal or vertical timeline with expandable cards for each era (Founding & Early Years, Golden Era, Modern Glory)
- **Icons**: Trophy icons in white with orange fill on hover
- **Stats Summary**: Large numbers (29, 21, 13) in orange on dark background, centered

### Stadium (`/stadium`)
- **Hero**: High-res GSP Stadium image with dark overlay, title “GSP Stadium”, subtitle “Home of APOEL FC”
- **Key Facts**: Card-based layout with capacity (22,859), opening date (October 6, 1999), location (Nicosia, Cyprus), home to APOEL FC and AC Omonia
- **Orange Accent**: Capacity number and opening date in orange
- **Matchday Guide**: Card with ticketing link to apoelfc.com.cy, gallery placeholder
- **Mobile**: Stacked layout, touch-friendly buttons for ticket purchase

## Architecture
ARCHITECTURE.md written to ~/Projects/apoel/ARCHITECTURE.md
