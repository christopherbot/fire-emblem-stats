import uuid from 'uuid/v4'
import { pegasusKnight, falconKnight } from './../classes'
import { light } from './../affinities'
import {
  hector,
  lyn,
  farina,
  fiora,
  ninian,
  nino,
  serra,
} from './../characters'

export default {
  id: uuid(),
  name: 'Florina',
  game: 'fe7',
  baseClassId: pegasusKnight.id,
  promoClassId: falconKnight.id,
  baseStats: {
    lynMode: {
      lvl: 3,
      hp: 17,
      atk: 5,
      skl: 7,
      spd: 9,
      lck: 7,
      def: 4,
      res: 4,
      con: 4,
    },
    ehMode: {
      lvl: 3,
      hp: 18,
      atk: 6,
      skl: 8,
      spd: 9,
      lck: 8,
      def: 4,
      res: 5,
      con: 4,
    },
  },
  growths: {
    meta: 'values are percentages',
    hp: 60,
    atk: 40,
    skl: 50,
    spd: 55,
    lck: 50,
    def: 15,
    res: 35,
  },
  affinityId: light.id,
  recruit: {
    lynMode: {
      chapter: '3',
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
      characterId: hector.id,
      basePoints: 5,
      pointGain: 2,
    },
    {
      characterId: lyn.id,
      basePoints: 76,
      pointGain: 4,
    },
    {
      characterId: farina.id,
      basePoints: 35,
      pointGain: 3,
    },
    {
      characterId: fiora.id,
      basePoints: 35,
      pointGain: 4,
    },
    {
      characterId: ninian.id,
      basePoints: 0,
      pointGain: 4,
    },
    {
      characterId: nino.id,
      basePoints: 0,
      pointGain: 2,
    },
    {
      characterId: serra.id,
      basePoints: 0,
      pointGain: 1,
    },
  ],
}
