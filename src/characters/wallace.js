import uuid from 'uuid/v4'
import { knight, general } from './../classes'
import { thunder } from './../affinities'
import {
  lyn,
  renault,
  wil,
  vaida,
  kent,
} from './../characters'

export default {
  id: uuid(),
  name: 'Wallace',
  game: 'fe7',
  baseClassId: knight.id,
  promoClassId: general.id,
  baseStats: {
    lynMode: {
      lvl: 12,
      hp: 30,
      atk: 13,
      skl: 7,
      spd: 5,
      lck: 10,
      def: 15,
      res: 2,
      con: 13,
    },
    ehMode: {
      meta: 'starts as a General',
      lvl: 1,
      hp: 34,
      atk: 16,
      skl: 9,
      spd: 8,
      lck: 10,
      def: 19,
      res: 5,
      con: 15,
    },
  },
  growths: {
    meta: 'values are percentages',
    hp: 70,
    atk: 45,
    skl: 40,
    spd: 20,
    lck: 30,
    def: 35,
    res: 35,
  },
  affinityId: thunder.id,
  recruit: {
    lynMode: {
      chapter: '9',
      method: 'start',
    },
    eliwoodMode: {
      chapter: '23B',
      method: 'NPC, talk with Lyn, Kent, Sain, Florina, or Wil',
    },
    hectorMode: {
      chapter: '24B',
      method: 'NPC, talk with Lyn, Kent, Sain, Florina, or Wil',
    },
  },
  supports: [
    {
      characterId: lyn.id,
      basePoints: 15,
      pointGain: 2,
    },
    {
      characterId: renault.id,
      basePoints: 0,
      pointGain: 2,
    },
    {
      characterId: wil.id,
      basePoints: 0,
      pointGain: 2,
    },
    {
      characterId: vaida.id,
      basePoints: 0,
      pointGain: 2,
    },
    {
      characterId: kent.id,
      basePoints: 15,
      pointGain: 2,
    },
  ],
}
