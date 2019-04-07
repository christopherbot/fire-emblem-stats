import uuid from 'uuid/v4'
import { thief } from './../classes'

export default {
  id: uuid(),
  name: 'Assassin',
  type: 'promo',
  associatedClassId: thief.id,
  mov: 6,
  weapons: [
    'Sword',
  ],
  notes: [
    'Silencer',
  ],
  promoItems: [
    'Fell Contract',
  ],
  promoGains: {
    male: {
      hp: 3,
      atk: 1,
      skl: 0,
      spd: 0,
      lck: 0,
      def: 2,
      res: 2,
      con: 0,
      mov: 0,
    },
  },
  maxStats: {
    male: {
      hp: 60,
      atk: 20,
      skl: 30,
      spd: 30,
      lck: 30,
      def: 20,
      res: 20,
      con: 20,
      mov: 15,
    },
  },
}
