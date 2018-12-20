import uuid from 'uuid/v4'

export default {
  id: uuid(),
  name: 'Paladin',
  weapons: ['Sword', 'Lance', 'Axe'],
  mov: 8,
  baseClass: 'Cavalier',
  promoGains: {
    male: {
      hp: 2,
      atk: 1,
      skl: 1,
      spd: 1,
      lck: 0,
      def: 2,
      res: 1,
      con: 2,
      mov: 1,
    },
    female: null,
  },
  maxStats: {
    male: {
      hp: 60,
      atk: 25,
      skl: 26,
      spd: 24,
      lck: 30,
      def: 25,
      res: 25,
      con: 25,
      mov: 15,
    },
    female: {
      hp: 60,
      atk: 23,
      skl: 27,
      spd: 25,
      lck: 30,
      def: 24,
      res: 26,
      con: 25,
      mov: 15,
    },
  },
  skills: ['Canto']
}
