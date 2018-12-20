import uuid from 'uuid/v4'

export default {
  id: uuid(),
  name: 'Blade Lord',
  weapons: ['Sword', 'Bow'],
  mov: 6,
  promoGains: {
    male: null,
    female: {
      hp: 3,
      atk: 2,
      skl: 2,
      spd: 0,
      lck: 0,
      def: 3,
      res: 5,
      con: 1,
      mov: 1,
    },
  },
  maxStats: {
    male: null,
    female: {
      hp: 60,
      atk: 24,
      skl: 29,
      spd: 30,
      lck: 30,
      def: 22,
      res: 22,
      con: 25,
      mov: 15,
    },
  },
  skills: null,
}
