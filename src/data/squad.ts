import { Player } from '@/types';

export const squad: Record<string, Player[]> = {
  goalkeepers: [
    { number: 1, name: 'Gabriel Pereira', position: 'GK' },
    { number: 22, name: 'Andreas Christodoulou', position: 'GK' },
    { number: 27, name: 'Vid Belec', position: 'GK' },
    { number: 78, name: 'Savvas Michos', position: 'GK' },
  ],
  defenders: [
    { number: 2, name: 'Evagoras Antoniou', position: 'DEF' },
    { number: 3, name: 'Kostas Stafylidis', position: 'DEF' },
    { number: 5, name: 'Miloš Degenek', position: 'DEF' },
    { number: 6, name: 'Vitor Meer', position: 'DEF' },
    { number: 14, name: 'Nanu', position: 'DEF' },
    { number: 31, name: 'Franz Brorsson', position: 'DEF' },
    { number: 34, name: 'Konstantinos Laifis', position: 'DEF' },
    { number: 45, name: 'Konstantinos Giannakoulis', position: 'DEF' },
  ],
  midfielders: [
    { number: 7, name: 'Max Meyer', position: 'MID' },
    { number: 17, name: 'David Abagna', position: 'MID' },
    { number: 20, name: 'Dálcio', position: 'MID' },
    { number: 21, name: 'Konstantinos Poursaitidis', position: 'MID' },
    { number: 23, name: 'Panagiotis Kattirtzis', position: 'MID' },
    { number: 25, name: 'Christos Karanatsios', position: 'MID' },
    { number: 29, name: 'Diego Rosa', position: 'MID' },
    { number: 36, name: 'Charles Appiah', position: 'MID' },
    { number: 38, name: 'Geovane Meurer', position: 'MID' },
  ],
  forwards: [
    { number: 9, name: 'Stefan Dražić', position: 'FWD' },
    { number: 10, name: 'Marquinhos', position: 'FWD' },
    { number: 11, name: 'Gabriel Maioli', position: 'FWD' },
    { number: 15, name: 'Mathías Tomás', position: 'FWD' },
    { number: 18, name: 'Dimitris Diamantakos', position: 'FWD' },
    { number: 39, name: 'Pedro Ataíde', position: 'FWD' },
    { number: 77, name: 'Daniel Mancini', position: 'FWD' },
    { number: 79, name: 'Pieros Sotiriou', position: 'FWD' },
    { number: 89, name: 'Nikolas Koutsakos', position: 'FWD' },
    { number: 99, name: 'Peter Olayinka', position: 'FWD' },
  ],
};
