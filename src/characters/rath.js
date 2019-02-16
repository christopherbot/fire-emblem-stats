import uuid from 'uuid/v4'
import { nomad, nomadTrooper } from './../classes'
import { dark } from './../affinities'
import {
  lyn,
  wil,
  guy,
} from './../characters'

export default {
  id: uuid(),
  name: 'Rath',
  game: 'fe7',
  baseClassId: nomad.id,
  promoClassId: nomadTrooper.id,
  baseStats: {
    lynMode: {
      lvl: 7,
      hp: 25,
      atk: 8,
      skl: 9,
      spd: 10,
      lck: 5,
      def: 7,
      res: 2,
      con: 8,
    },
    ehMode: {
      lvl: 9,
      hp: 27,
      atk: 9,
      skl: 10,
      spd: 11,
      lck: 5,
      def: 8,
      res: 2,
      con: 7,
    },
  },
  growths: {
    meta: 'values are percentages',
    hp: 80,
    atk: 50,
    skl: 40,
    spd: 50,
    lck: 30,
    def: 10,
    res: 25,
  },
  affinityId: dark.id,
  recruit: {
    lynMode: {
      chapter: '6',
      method: 'start',
    },
    eliwoodMode: {
      chapter: '21',
      method: 'NPC, talk with Lyn',
    },
    hectorMode: {
      chapter: '22',
      method: 'NPC, talk with Lyn',
    },
  },
  supports: [
    {
      characterId: lyn.id,
      basePoints: 15,
      pointGain: 4,
    },
    {
      characterId: wil.id,
      basePoints: 0,
      pointGain: 2,
    },
    {
      characterId: guy.id,
      basePoints: 0,
      pointGain: 4,
    },
  ],
}
