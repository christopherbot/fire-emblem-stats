import uuid from 'uuid/v4'
import { lynLord, bladeLord } from './../classes'
import { wind } from './../affinities'
import {
  eliwood,
  hector,
  florina,
  rath,
  kent,
  will,
  wallace,
} from './../characters'

export default {
  id: uuid(),
  name: 'Lyn',
  game: 'fe7',
  baseClassId: lynLord.id,
  promoClassId: bladeLord.id,
  baseStats: {
    lynMode: {
      lvl: 1,
      hp: 16,
      atk: 4,
      skl: 7,
      spd: 9,
      lck: 5,
      def: 2,
      res: 0,
      con: 5,
    },
    ehMode: {
      lvl: 4,
      hp: 18,
      atk: 5,
      skl: 10,
      spd: 11,
      lck: 5,
      def: 2,
      res: 0,
      con: 5,
    },
  },
  growths: {
    meta: 'values are percentages',
    hp: 70,
    atk: 40,
    skl: 60,
    spd: 60,
    lck: 55,
    def: 20,
    res: 30,
  },
  affinityId: wind.id,
  recruit: {
    lynMode: {
      chapter: 'Prologue',
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
      characterId: eliwood.id,
      basePoints: 10,
      pointGain: 2,
    },
    {
      characterId: hector.id,
      basePoints: 0,
      pointGain: 3,
    },
    {
      characterId: florina.id,
      basePoints: 76,
      pointGain: 4,
    },
    {
      characterId: rath.id,
      basePoints: 15,
      pointGain: 4,
    },
    {
      characterId: kent.id,
      basePoints: 20,
      pointGain: 3,
    },
    {
      characterId: will.id,
      basePoints: 17,
      pointGain: 3,
    },
    {
      characterId: wallace.id,
      basePoints: 15,
      pointGain: 2,
    },
  ],
}
