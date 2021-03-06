import uuid from 'uuid/v4'
import { lynLord } from './../classes'

export default {
  id: uuid(),
  name: 'Blade Lord',
  type: 'promo',
  associatedClassId: lynLord.id,
  mov: 6,
  weapons: [
    'Sword',
    'Bow',
  ],
  notes: [
  ],
  promoItems: [
    'Heaven Seal',
  ],
  promoGains: {
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
}
