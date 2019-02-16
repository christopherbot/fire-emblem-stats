import uuid from 'uuid/v4'
import { cleric, bishop } from './../classes'
import { thunder } from './../affinities'
import {
  hector,
  matthew,
  florina,
  sain,
  oswin,
  lucius,
  erk,
} from './../characters'

export default {
  id: uuid(),
  name: 'Serra',
  game: 'fe7',
  baseClassId: cleric.id,
  promoClassId: bishop.id,
  baseStats: {
    lynMode: {
      lvl: 1,
      hp: 17,
      atk: 2,
      skl: 5,
      spd: 8,
      lck: 6,
      def: 2,
      res: 5,
      con: 4,
    },
    ehMode: {
      lvl: 1,
      hp: 17,
      atk: 2,
      skl: 5,
      spd: 8,
      lck: 6,
      def: 2,
      res: 5,
      con: 4,
    },
  },
  growths: {
    meta: 'values are percentages',
    hp: 50,
    atk: 50,
    skl: 30,
    spd: 40,
    lck: 60,
    def: 15,
    res: 55,
  },
  affinityId: thunder.id,
  recruit: {
    lynMode: {
      chapter: '5',
      method: 'NPC, talk with Lyn or complete the chapter',
    },
    eliwoodMode: {
      chapter: '13',
      method: 'start',
    },
    hectorMode: {
      chapter: '12',
      method: 'start',
    },
  },
  supports: [
    {
      characterId: hector.id,
      basePoints: 15,
      pointGain: 1,
    },
    {
      characterId: matthew.id,
      basePoints: 5,
      pointGain: 1,
    },
    {
      characterId: florina.id,
      basePoints: 0,
      pointGain: 1,
    },
    {
      characterId: sain.id,
      basePoints: 0,
      pointGain: 2,
    },
    {
      characterId: oswin.id,
      basePoints: 10,
      pointGain: 1,
    },
    {
      characterId: lucius.id,
      basePoints: 0,
      pointGain: 2,
    },
    {
      characterId: erk.id,
      basePoints: 2,
      pointGain: 1,
    },
  ],
}
