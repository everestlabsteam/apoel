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
