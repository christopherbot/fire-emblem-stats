import uuid from 'uuid/v4'
import { cavalier, paladin } from './../classes'
import { wind } from './../affinities'
import {
  kent,
  fiora,
  serra,
  rebecca,
  priscilla,
  louise,
  isadora,
} from './../characters'

export default {
  id: uuid(),
  name: 'Sain',
  game: 'fe7',
  baseClassId: cavalier.id,
  promoClassId: paladin.id,
  baseStats: {
    lynMode: {
      lvl: 1,
      hp: 19,
      atk: 8,
      skl: 4,
      spd: 6,
      lck: 4,
      def: 6,
      res: 0,
      con: 9,
    },
    ehMode: {
      lvl: 4,
      hp: 22,
      atk: 9,
      skl: 5,
      spd: 7,
      lck: 5,
      def: 7,
      res: 0,
      con: 9,
    },
  },
  growths: {
    meta: 'values are percentages',
    hp: 80,
    atk: 60,
    skl: 35,
    spd: 40,
    lck: 35,
    def: 20,
    res: 20,
  },
  affinityId: wind.id,
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
      characterId: kent.id,
      basePoints: 30,
      pointGain: 3,
    },
    {
      characterId: fiora.id,
      basePoints: 0,
      pointGain: 2,
    },
    {
      characterId: serra.id,
      basePoints: 0,
      pointGain: 2,
    },
    {
      characterId: rebecca.id,
      basePoints: 0,
      pointGain: 2,
    },
    {
      characterId: priscilla.id,
      basePoints: 0,
      pointGain: 2,
    },
    {
      characterId: louise.id,
      basePoints: 0,
      pointGain: 1,
    },
    {
      characterId: isadora.id,
      basePoints: 0,
      pointGain: 1,
    },
  ],
}
