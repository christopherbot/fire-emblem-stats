import uuid from 'uuid/v4'
import { wind } from './../affinities'
import { lynLord, bladeLord } from './../classes'

export default {
  id: uuid(),
  name: 'Lyn',
  game: 'FE7',
  baseClassId: lynLord.id,
  promoClassId: bladeLord.id,
  baseStats: {
    lynMode: {
      lvl: 1,
      hp: 16,
      atk: 4,
      skl: 7,
      spd: 9,
      lck: 5,
      def: 2,
      res: 0,
      con: 5,
    },
    ehMode: {
      lvl: 4,
      hp: 18,
      atk: 5,
      skl: 10,
      spd: 11,
      lck: 5,
      def: 2,
      res: 0,
      con: 5,
    },
    hardMode: null,
  },
  growths: {
    meta: 'values are percentages',
    hp: 70,
    atk: 40,
    skl: 60,
    spd: 60,
    lck: 45,
    def: 20,
    res: 30,
  },
  affinityId: wind.id,
  recruitChapter: {
    lynMode: 'Prologue',
    eliwoodMode: '15',
    hectorMode: '16',
  },
  supports: [{
    character: 'Eliwood',
    basePoints: 10,
    pointGain: 2,
  }, {
    character: 'Hector',
    basePoints: 0,
    pointGain: 3,
  }, {
    character: 'Florina',
    basePoints: 76,
    pointGain: 4,
  }, {
    character: 'Rath',
    basePoints: 15,
    pointGain: 4,
  }, {
    character: 'Kent',
    basePoints: 20,
    pointGain: 3,
  }, {
    character: 'Wil',
    basePoints: 17,
    pointGain: 3,
  }, {
    character: 'Wallace',
    basePoints: 15,
    pointGain: 2,
  }],
}