import uuid from 'uuid/v4'
import { bard } from './../classes'
import { ice } from './../affinities'

export default {
  id: uuid(),
  name: 'Nils',
  game: 'fe7',
  baseClassId: bard.id,
  promoClassId: null,
  baseStats: {
    lynMode: {
      lvl: 1,
      hp: 14,
      atk: 0,
      skl: 0,
      spd: 12,
      lck: 10,
      def: 5,
      res: 4,
      con: 3,
    },
    ehMode: {
      lvl: 1,
      hp: 14,
      atk: 0,
      skl: 0,
      spd: 12,
      lck: 10,
      def: 5,
      res: 4,
      con: 4,
    },
  },
  growths: {
    meta: 'values are percentages',
    hp: 85,
    atk: 5,
    skl: 5,
    spd: 70,
    lck: 80,
    def: 30,
    res: 70,
  },
  affinityId: ice.id,
  recruit: {
    lynMode: {
      chapter: '7',
      method: 'start',
    },
    eliwoodMode: {
      chapter: '28',
      method: 'start',
    },
    hectorMode: {
      chapter: '30',
      method: 'start',
    },
  },
  supports: [],
}
