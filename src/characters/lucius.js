import uuid from 'uuid/v4'
import { monk, bishop } from './../classes'
import { light } from './../affinities'
import {
  raven,
  priscilla,
  serra,
  renault,
  karel,
} from './../characters'

export default {
  id: uuid(),
  name: 'Lucius',
  game: 'fe7',
  baseClassId: monk.id,
  promoClassId: bishop.id,
  baseStats: {
    lynMode: {
      lvl: 3,
      hp: 18,
      atk: 7,
      skl: 6,
      spd: 10,
      lck: 2,
      def: 1,
      res: 6,
      con: 6,
    },
    ehMode: {
      lvl: 3,
      hp: 18,
      atk: 7,
      skl: 6,
      spd: 10,
      lck: 2,
      def: 1,
      res: 6,
      con: 6,
    },
  },
  growths: {
    meta: 'values are percentages',
    hp: 55,
    atk: 60,
    skl: 50,
    spd: 40,
    lck: 20,
    def: 10,
    res: 60,
  },
  affinityId: light.id,
  recruit: {
    lynMode: {
      chapter: '7',
      method: 'start',
    },
    eliwoodMode: {
      chapter: '16',
      method: 'NPC, talk with Raven',
    },
    hectorMode: {
      chapter: '17',
      method: 'NPC, talk with Raven',
    },
  },
  supports: [
    {
      characterId: raven.id,
      basePoints: 30,
      pointGain: 3,
    },
    {
      characterId: priscilla.id,
      basePoints: 5,
      pointGain: 2,
    },
    {
      characterId: serra.id,
      basePoints: 0,
      pointGain: 2,
    },
    {
      characterId: renault.id,
      basePoints: 0,
      pointGain: 2,
    },
    {
      characterId: karel.id,
      basePoints: 0,
      pointGain: 1,
    },
  ],
}
