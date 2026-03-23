export interface Player {
  number: number;
  name: string;
  position: 'GK' | 'DEF' | 'MID' | 'FWD';
  nationality?: string;
  age?: number;
  image?: string;
}

export interface Match {
  date: string;
  homeTeam: string;
  awayTeam: string;
  score: string;
  competition: string;
  venue: string;
  status: 'Upcoming' | 'Live' | 'Final';
  result?: 'W' | 'D' | 'L';
}

export interface HistoryEra {
  title: string;
  items: {
    date: string;
    description: string;
  }[];
}

export interface ClubStats {
  leagueTitles: number;
  cups: number;
  superCups: number;
  championsLeagueQuarterFinals: string;
}

export interface StadiumInfo {
  name: string;
  location: string;
  capacity: number;
  opened: string;
  homeTo: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
