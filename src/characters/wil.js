import uuid from 'uuid/v4'
import { archer, sniper } from './../classes'
import { wind } from './../affinities'
import {
  lyn,
  rebecca,
  rath,
  dart,
  wallace,
  raven,
} from './../characters'

export default {
  id: uuid(),
  name: 'Wil',
  game: 'fe7',
  baseClassId: archer.id,
  promoClassId: sniper.id,
  baseStats: {
    lynMode: {
      lvl: 2,
      hp: 20,
      atk: 6,
      skl: 5,
      spd: 5,
      lck: 6,
      def: 5,
      res: 0,
      con: 6,
    },
    ehMode: {
      lvl: 4,
      hp: 21,
      atk: 6,
      skl: 5,
      spd: 6,
      lck: 7,
      def: 5,
      res: 1,
      con: 6,
    },
  },
  growths: {
    meta: 'values are percentages',
    hp: 75,
    atk: 50,
    skl: 50,
    spd: 40,
    lck: 40,
    def: 20,
    res: 25,
  },
  affinityId: wind.id,
  recruit: {
    lynMode: {
      chapter: '3',
      method: 'Visit the southwest village, or start of turn 3',
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
      basePoints: 17,
      pointGain: 3,
    },
    {
      characterId: rebecca.id,
      basePoints: 30,
      pointGain: 3,
    },
    {
      characterId: rath.id,
      basePoints: 0,
      pointGain: 2,
    },
    {
      characterId: dart.id,
      basePoints: 20,
      pointGain: 3,
    },
    {
      characterId: wallace.id,
      basePoints: 0,
      pointGain: 2,
    },
    {
      characterId: raven.id,
      basePoints: 0,
      pointGain: 1,
    },
  ],
}
