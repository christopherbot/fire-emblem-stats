import uuid from 'uuid/v4'
import { theif, assassin } from './../classes'
import { wind } from './../affinities'
import {
  hector,
  jaffar,
  guy,
  serra,
  oswin,
  legault,
} from './../characters'

export default {
  id: uuid(),
  name: 'Matthew',
  game: 'fe7',
  baseClassId: theif.id,
  promoClassId: assassin.id,
  baseStats: {
    lynMode: {
      lvl: 2,
      hp: 18,
      atk: 4,
      skl: 4,
      spd: 11,
      lck: 2,
      def: 3,
      res: 0,
      con: 7,
    },
    ehMode: {
      lvl: 2,
      hp: 18,
      atk: 4,
      skl: 4,
      spd: 11,
      lck: 2,
      def: 3,
      res: 0,
      con: 7,
    },
  },
  growths: {
    meta: 'values are percentages',
    hp: 75,
    atk: 30,
    skl: 40,
    spd: 70,
    lck: 50,
    def: 25,
    res: 20,
  },
  affinityId: wind.id,
  recruit: {
    lynMode: {
      chapter: '6',
      method: 'Visit one of the northern villages or start of turn 3',
    },
    eliwoodMode: {
      chapter: '13',
      method: 'start',
    },
    hectorMode: {
      chapter: '11',
      method: 'start',
    },
  },
  supports: [
    {
      characterId: hector.id,
      basePoints: 20,
      pointGain: 3,
    },
    {
      characterId: jaffar.id,
      basePoints: 0,
      pointGain: 1,
    },
    {
      characterId: guy.id,
      basePoints: 10,
      pointGain: 3,
    },
    {
      characterId: serra.id,
      basePoints: 5,
      pointGain: 1,
    },
    {
      characterId: oswin.id,
      basePoints: 5,
      pointGain: 2,
    },
    {
      characterId: legault.id,
      basePoints: 0,
      pointGain: 2,
    },
  ],
}
