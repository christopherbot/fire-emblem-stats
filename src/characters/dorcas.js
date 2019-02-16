import uuid from 'uuid/v4'
import { fighter, warrior } from './../classes'
import { fire } from './../affinities'
import {
  bartre,
  geitz,
  oswin,
  vaida,
  farina,
} from './../characters'

export default {
  id: uuid(),
  name: 'Dorcas',
  game: 'fe7',
  baseClassId: fighter.id,
  promoClassId: warrior.id,
  baseStats: {
    lynMode: {
      lvl: 3,
      hp: 30,
      atk: 7,
      skl: 7,
      spd: 6,
      lck: 3,
      def: 3,
      res: 0,
      con: 14,
    },
    ehMode: {
      lvl: 3,
      hp: 30,
      atk: 7,
      skl: 7,
      spd: 6,
      lck: 3,
      def: 3,
      res: 0,
      con: 14,
    },
  },
  growths: {
    meta: 'values are percentages',
    hp: 80,
    atk: 60,
    skl: 40,
    spd: 20,
    lck: 45,
    def: 25,
    res: 15,
  },
  affinityId: fire.id,
  recruit: {
    lynMode: {
      chapter: '4',
      method: 'Enemy, talk with Lyn or complete the chapter without killing him',
    },
    eliwoodMode: {
      chapter: '11',
      method: 'Start of turn 2',
    },
    hectorMode: {
      chapter: '12',
      method: 'Start of turn 2',
    },
  },
  supports: [
    {
      characterId: bartre.id,
      basePoints: 15,
      pointGain: 3,
    },
    {
      characterId: geitz.id,
      basePoints: 0,
      pointGain: 3,
    },
    {
      characterId: oswin.id,
      basePoints: 0,
      pointGain: 2,
    },
    {
      characterId: vaida.id,
      basePoints: 0,
      pointGain: 2,
    },
    {
      characterId: farina.id,
      basePoints: 0,
      pointGain: 1,
    },
  ],
}
