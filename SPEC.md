# APOEL FC Rebuild — Requirements Spec

## Business Context
APOEL FC is Cyprus’s most successful football club (29 national championships, 21 cups, 13 super cups), founded 8 November 1926. This project rebuilds apoel.everestlabs.dev from scratch using Material UI (MUI) to replace an outdated, unfixable site. Success means a responsive, clean, mobile-first digital home that reflects the club’s brand identity, supports fan engagement, and delivers real-time match and news content.

## Brand & Identity
- **Club Name**: Αθλητικός Ποδοσφαιρικός Όμιλος Ελλήνων Λευκωσίας (Athletikos Podosferikos Omilos Ellinon Lefkosias) — English: Athletic Football Club of Greeks of Nicosia
- **Nickname**: "Thrylos" (The Legend)
- **Ground**: GSP Stadium (Capacity: 22,859)
- **Chairman**: Harris Photiou
- **Manager**: Pablo García (2025–26 season)
- **League**: Cyprus First Division

### Official Colors (MUI Theme Palette)
- **Primary Blue**: `#009AE1` (Blue Cola)
- **Secondary Yellow**: `#FED547` (Gargoyle Gas)
- **Secondary Blue**: `#004690` (Midnight Blue)
- **White**: `#FFFFFF`
- **Gold/Beige**: `#E5A321` (Marigold)
- **Light Taupe**: `#A29061`

### Color Symbolism
- Yellow = sunshine, light, goodness, prosperity, hard work, honor
- Blue = struggle for freedom and hope

### Crest Specification
- Double outline shield
- Diagonally divided: top half `#009AE1`, bottom half `#FED547`
- White banner across center with "AΠΟΕΛ" in bold sans-serif
- Two golden stars above crest (`#E5A321`)

## Site Map
| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | Hero, latest results, next match, news highlights |
| `/news` | News Index | List of all news (Team / Academy / Futsal) |
| `/news/[id]` | News Detail | Full article with image, date, category |
| `/team` | Squad & Staff | Roster, coaching staff, medical staff |
| `/matches` | Fixtures & Results | Upcoming matches, recent results, league table |
| `/tickets` | Ticketing | Playoffs 2025/26 package, Loyalty Scheme |
| `/shop` | Orange Shop | Club merchandise |
| `/club` | Club Info | History, honours, academy |
| `/fan-engagement` | Fan Engagement | Supporters Board, Fan Forums, Annual Report, Contact |

## Page Specs

### Home / Hero
- **Purpose**: Immediate overview of club status, next match, and latest news to drive engagement and ticket sales.
- **Hero Section**
  - Full-width hero image/video (GSP Stadium or match action)
  - Overlay: Club name "APOEL" + "Thrylos" tagline
  - Next Match Card (MUI Card, elevated):
    - Home team: APOEL
    - Away team: AEK Larnaca
    - Date: 22 March 2026
    - Time: 19:00 EET
    - Competition: Cyprus First Division
    - Venue: GSP Stadium
    - Ticket CTA button (secondary yellow `#FED547`)
- **Latest Results (Last 3)**
  - 22.03.2026 vs AEK Larnaca — 1–0 (W)
  - 15.03.2026 vs Aris Limassol — 2–1 (W)
  - 08.03.2026 vs — (fill with actual latest result)
- **Next Match Countdown**
  - Server-side rendered countdown to 22 Mar 2026 19:00 EET
  - Format: DD:HH:MM:SS
- **News Teaser (3 items)**
  - Title, date, short excerpt, category (Team/Academy/Futsal)
  - "Read more" link to `/news`

### News Index
- **Header**: "News" with breadcrumbs (Home > News)
- **Filters**: Tabs for Team / Academy / Futsal
- **Feed**: List of articles with:
  - Featured image (16:9)
  - Date (DD.MM.YYYY)
  - Category badge
  - Title + excerpt
  - Read more button
- **Pagination**: Load more or numbered pages

### News Detail
- **Header**: Category badge + publication date
- **Title**: Article headline
- **Body**: Full article content (HTML-safe)
- **Image**: Hero image
- **Share buttons**: One-click to Twitter, Facebook, Pinterest

### Team (Squad & Staff)
- **Tabs**: Squad | Coaching Staff | Medical Staff
- **Squad Table**:
  - Player number | Name | Position | Age | Nationality | Apps | Goals
  - Example: 1 | Charalambous Ilias | GK | 29 | CYP | 0 | 0
- **Player Card (grid view)**: For mobile-friendly display
  - Image | Name | Number | Position | Nationality
- **Coaching Staff**:
  - Manager: Pablo García
  - Assistant Coaches, Goalkeeper Coach, etc.
- **Medical Staff**: Head of Physio, Physiotherapists

### Matches (Fixtures & Results)
- **Tabs**: Fixtures | Results | League Table
- **Fixtures Table**:
  - Date | Time | Competition | Home | Away | Status | Venue
  - Example: 22.03.2026 | 19:00 | Cyprus First Division | APOEL | AEK Larnaca | Upcoming | GSP Stadium
- **Results Table**:
  - Date | Competition | Home | Score | Away | Venue
  - Example: 22.03.2026 | Cyprus First Division | APOEL | 1–0 | AEK Larnaca | GSP Stadium
- **League Table**:
  - Pos | Team | P | W | D | L | GF | GA | GD | Pts
  - Top 4 highlighted (Playoff qualification)

### Tickets
- **Hero**: "Support APOEL — Get Your Tickets"
- **Packages**:
  - **Playoffs 2025/26 Package**
    - Includes all home playoff matches
    - Price: €X (to be confirmed)
    - Benefits: Priority seating, exclusive merchandise
  - **Loyalty Scheme 2025/26**
    - Renewal window: 1–31 May 2026
    - Benefits: Early access, discounts, member events
- **Buy Buttons**: MUI outlined buttons (`#009AE1` text, `#FED547` hover)
- **FAQ Accordion**: Ticketing policies, seating map, accessibility

### Shop (Orange Shop)
- **Hero**: "Orange Shop — Wear Your Pride"
- **Categories**: Jerseys | Training Wear | Accessories | Youth
- **Product Grid**:
  - Image | Name | Price | "Add to cart" button
- **Filters**: Size, gender, category
- **Cart Drawer**: MUI Drawer component with mini-cart summary

### Club (History / Honours / Academy)
- **Tabs**: History | Honours | Academy
- **History**:
  - Founded: 8 November 1926 (99 years)
  - Ground: GSP Stadium (22,859 capacity)
  - Owner: APOEL Football Limited
  - Chairman: Harris Photiou
  - Manager: Pablo García
  - League: Cyprus First Division
  - Stats: 29 national championships, 21 cups, 13 super cups
  - Greatest achievement: 2011–12 UEFA Champions League Round of 16 (knocked out Lyon and Porto)
- **Honours Table**:
  - Competition | Wins | Years
  - Cyprus First Division | 29 | 1936–37, 1945–46, …
  - Cypriot Cup | 21 | 1935–36, 1947–48, …
  - Super Cup | 13 | 1962, 1964, …
- **Academy**:
  - Youth teams
  - Coaching philosophy
  - Contact for trials

### Fan Engagement
- **Hero**: "Join the Thrylos Community"
- **Sections**:
  - **Supporters Board**
    - Description: Formal fan representation body
    - Members list (if available)
    - Chairperson contact
  - **Fan Forums**
    - Link to forum (or placeholder for custom implementation)
    - Rules & guidelines
  - **Annual Fan Engagement Report**
    - 2024/25 Report (2nd annual)
    - Download PDF button
  - **Supporter Liaison Officer**
    - Name, email, phone
    - Office hours
- **Social Feed**: Embedded Twitter/X feed or Instagram gallery

## Data Requirements

### Real Match Data (Cyprus First Division — 2025/26 Season)
- **Next Match**: 22 Mar 2026, 19:00 EET, APOEL vs AEK Larnaca, GSP Stadium
- **Recent Results**:
  - 22.03.2026 vs AEK Larnaca — 1–0 (W)
  - 15.03.2026 vs Aris Limassol — 2–1 (W)
  - 08.03.2026 vs — (to be confirmed from API)
- **API Integration**: football-data.org (API key required)

### Squad Data (2025–26 — Manual Entry Required)
- Goalkeepers: Charalambous Ilias (#1), …
- Defenders: …
- Midfielders: …
- Forwards: …
- Coaching Staff: Pablo García (Manager), …
- Medical Staff: Head of Physio, Physiotherapists

### Honours Data (Verified)
- Cyprus First Division: 29 titles (1936–37 to latest)
- Cypriot Cup: 21 wins (1935–36 to latest)
- Super Cup: 13 wins (1962 to latest)

### Club Officials
- Owner: APOEL Football Limited
- Chairman: Harris Photiou
- Manager: Pablo García

### Fan Engagement Content
- Annual Fan Engagement Report 2024/25 (PDF)
- Supporters Board members (if available)
- Fan Forum URL or placeholder
- Supporter Liaison Officer contact details

## Design Requirements

### Color Palette (MUI Theme)
```javascript
const theme = createTheme({
  palette: {
    primary: { main: '#009AE1' }, // Blue
    secondary: { main: '#FED547' }, // Yellow
    background: { default: '#FFFFFF' },
    text: { primary: '#000000', secondary: '#666666' },
    success: { main: '#E5A321' }, // Gold
    info: { main: '#004690' }, // Midnight blue
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
  },
});
```

### Components & Patterns
- **Navigation**: Fixed top bar, hamburger on mobile, clean dropdowns
- **Hero**: Full-width image/video with overlay and next match card
- **Cards**: Rounded corners, subtle elevation, consistent spacing
- **Buttons**: Primary (`#009AE1`), Secondary (`#FED547`), Outlined (`#009AE1` text)
- **Tables**: Responsive scroll on mobile, sortable columns
- **Forms**: MUI TextField, Select, Checkbox with brand colors

### Crest SVG Component
- Diagonal split shield (top `#009AE1`, bottom `#FED547`)
- White banner with "AΠΟΕΛ" in bold sans-serif
- Two golden stars (`#E5A321`) above crest
- Double outline (white + blue)

### Responsive Behavior
- Mobile-first: single-column layout, stacked nav
- Tablet: 2-column grid for news, team
- Desktop: full-width nav, sidebar where appropriate
- Touch targets ≥ 48px for buttons and links

### Reference Sites (for UI patterns)
- Arsenal FC (2024/25): Clean navigation, reduced clutter, mobile-first
- Liverpool FC: Fan engagement structures, annual reports, formal support channels
- MUI Templates: Dashboard, Landing Pages, E-commerce patterns

## Technical Constraints
- **Framework**: Next.js with App Router
- **Styling**: Material UI (MUI v5+) with custom theme
- **Data Fetching**: `getServerSideProps` for time-sensitive pages (match status, countdown)
- **SEO**: Dynamic meta tags per page, structured data for matches
- **Performance**: Image optimization, lazy loading, minimal JS bundle
- **Testing**: Visual smoke tests on mobile/desktop before review

## Acceptance Criteria
- [ ] All brand colors applied correctly (no blue used except `#009AE1` and `#004690`)
- [ ] Crest SVG renders correctly on all screen sizes
- [ ] Next match countdown displays accurate time to 22 Mar 2026 19:00 EET
- [ ] Mobile navigation collapses to hamburger menu
- [ ] Fan engagement section includes Supporters Board, Fan Forums placeholder, Annual Report download
- [ ] Visual smoke tests pass on Chrome/Firefox/Safari (mobile + desktop)
- [ ] No console errors on initial load
- [ ] All links are functional and route correctly
