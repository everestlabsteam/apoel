import { Player } from '@/types';

export const squad: Record<string, Player[]> = {
  goalkeepers: [
    { number: 1, name: 'Gabriel Pereira', position: 'GK', image: '/players/gabriel-pereira.jpg' },
    { number: 22, name: 'Andreas Christodoulou', position: 'GK', image: '/players/andreas-christodoulou.jpg' },
    { number: 27, name: 'Vid Belec', position: 'GK', image: '/players/vid-belec.jpg' },
    { number: 78, name: 'Savvas Michos', position: 'GK', image: '/players/savvas-michos.jpg' },
  ],
  defenders: [
    { number: 2, name: 'Evagoras Antoniou', position: 'DEF', image: '/players/evagoras-antoniou.jpg' },
    { number: 3, name: 'Kostas Stafylidis', position: 'DEF', image: '/players/kostas-stafylidis.jpg' },
    { number: 5, name: 'Miloš Degenek', position: 'DEF', image: '/players/milos-degenek.jpg' },
    { number: 6, name: 'Vitor Meer', position: 'DEF', image: '/players/vitor-meer.jpg' },
    { number: 14, name: 'Nanu', position: 'DEF', image: '/players/nanu.jpg' },
    { number: 31, name: 'Franz Brorsson', position: 'DEF', image: '/players/franz-brorsson.jpg' },
    { number: 34, name: 'Konstantinos Laifis', position: 'DEF', image: '/players/konstantinos-laifis.jpg' },
    { number: 45, name: 'Konstantinos Giannakoulis', position: 'DEF', image: '/players/konstantinos-giannakoulis.jpg' },
  ],
  midfielders: [
    { number: 7, name: 'Max Meyer', position: 'MID', image: '/players/max-meyer.jpg' },
    { number: 17, name: 'David Abagna', position: 'MID', image: '/players/david-abagna.jpg' },
    { number: 20, name: 'Dálcio', position: 'MID', image: '/players/dalcio.jpg' },
    { number: 21, name: 'Konstantinos Poursaitidis', position: 'MID', image: '/players/konstantinos-poursaitidis.jpg' },
    { number: 23, name: 'Panagiotis Kattirtzis', position: 'MID', image: '/players/panagiotis-kattirtzis.jpg' },
    { number: 25, name: 'Christos Karanatsios', position: 'MID', image: '/players/christos-karanatsios.jpg' },
    { number: 29, name: 'Diego Rosa', position: 'MID', image: '/players/diego-rosa.jpg' },
    { number: 36, name: 'Charles Appiah', position: 'MID', image: '/players/charles-appiah.jpg' },
    { number: 38, name: 'Geovane Meurer', position: 'MID', image: '/players/geovane-meurer.jpg' },
  ],
  forwards: [
    { number: 9, name: 'Stefan Dražić', position: 'FWD', image: '/players/stefan-drazic.jpg' },
    { number: 10, name: 'Marquinhos', position: 'FWD', image: '/players/marquinhos.jpg' },
    { number: 11, name: 'Gabriel Maioli', position: 'FWD', image: '/players/gabriel-maioli.jpg' },
    { number: 15, name: 'Mathías Tomás', position: 'FWD', image: '/players/mathias-tomas.jpg' },
    { number: 18, name: 'Dimitris Diamantakos', position: 'FWD', image: '/players/dimitris-diamantakos.jpg' },
    { number: 39, name: 'Pedro Ataíde', position: 'FWD', image: '/players/pedro-ataide.jpg' },
    { number: 77, name: 'Daniel Mancini', position: 'FWD', image: '/players/daniel-mancini.jpg' },
    { number: 79, name: 'Pieros Sotiriou', position: 'FWD', image: '/players/pieros-sotiriou.jpg' },
    { number: 89, name: 'Nikolas Koutsakos', position: 'FWD', image: '/players/nikolas-koutsakos.jpg' },
    { number: 99, name: 'Peter Olayinka', position: 'FWD', image: '/players/peter-olayinka.jpg' },
  ],
};
