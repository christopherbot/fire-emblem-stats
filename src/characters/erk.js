import uuid from 'uuid/v4'
import { mage, sage } from './../classes'
import { thunder } from './../affinities'
import {
  lousie,
  nino,
  pent,
  priscilla,
  serra,
} from './../characters'

export default {
  id: uuid(),
  name: 'Erk',
  game: 'fe7',
  baseClassId: mage.id,
  promoClassId: sage.id,
  baseStats: {
    lynMode: {
      lvl: 1,
      hp: 17,
      atk: 5,
      skl: 6,
      spd: 7,
      lck: 3,
      def: 2,
      res: 4,
      con: 5,
    },
    ehMode: {
      lvl: 1,
      hp: 17,
      atk: 5,
      skl: 6,
      spd: 7,
      lck: 3,
      def: 2,
      res: 4,
      con: 5,
    },
  },
  growths: {
    meta: 'values are percentages',
    hp: 65,
    atk: 40,
    skl: 40,
    spd: 50,
    lck: 30,
    def: 20,
    res: 40,
  },
  affinityId: thunder.id,
  recruit: {
    lynMode: {
      chapter: '5',
      method: 'Joins with Serra or complete the chapter',
    },
    eliwoodMode: {
      chapter: '14',
      method: 'NPC, talk with Serra or Priscilla',
    },
    hectorMode: {
      chapter: '14',
      method: 'NPC, talk with Serra or Priscilla',
    },
  },
  supports: [
    {
      characterId: lousie.id,
      basePoints: 20,
      pointGain: 2,
    },
    {
      characterId: nino.id,
      basePoints: 0,
      pointGain: 3,
    },
    {
      characterId: pent.id,
      basePoints: 25,
      pointGain: 3,
    },
    {
      characterId: priscilla.id,
      basePoints: 15,
      pointGain: 3,
    },
    {
      characterId: serra.id,
      basePoints: 2,
      pointGain: 1,
    },
  ],
}
