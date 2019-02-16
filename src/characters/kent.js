import uuid from 'uuid/v4'
import { cavalier, paladin } from './../classes'
import { anima } from './../affinities'
import {
  lyn,
  sain,
  fiora,
  farina,
  wallace,
  heath,
} from './../characters'

export default {
  id: uuid(),
  name: 'Kent',
  game: 'fe7',
  baseClassId: cavalier.id,
  promoClassId: paladin.id,
  baseStats: {
    lynMode: {
      lvl: 1,
      hp: 20,
      atk: 6,
      skl: 6,
      spd: 7,
      lck: 2,
      def: 5,
      res: 1,
      con: 9,
    },
    ehMode: {
      lvl: 5,
      hp: 23,
      atk: 8,
      skl: 7,
      spd: 8,
      lck: 4,
      def: 6,
      res: 1,
      con: 9,
    },
  },
  growths: {
    meta: 'values are percentages',
    hp: 85,
    atk: 40,
    skl: 50,
    spd: 45,
    lck: 20,
    def: 25,
    res: 25,
  },
  affinityId: anima.id,
  recruit: {
    lynMode: {
      chapter: '1',
      method: 'start',
    },
    eliwoodMode: {
      chapter: '15',
      method: 'start',
    },
    hectorMode: {
      chapter: '16',
      method: 'start',
    },
  },
  supports: [
    {
      characterId: lyn.id,
      basePoints: 20,
      pointGain: 3,
    },
    {
      characterId: sain.id,
      basePoints: 30,
      pointGain: 3,
    },
    {
      characterId: fiora.id,
      basePoints: 0,
      pointGain: 3,
    },
    {
      characterId: farina.id,
      basePoints: 0,
      pointGain: 1,
    },
    {
      characterId: wallace.id,
      basePoints: 15,
      pointGain: 2,
    },
    {
      characterId: heath.id,
      basePoints: 0,
      pointGain: 2,
    },
  ],
}
