import uuid from 'uuid/v4'
import { pegasusKnight } from './../classes'

export default {
  id: uuid(),
  name: 'FalconKnight',
  type: 'promo',
  associatedClassId: pegasusKnight.id,
  mov: 8,
  weapons: [
    'Sword',
    'Lance',
  ],
  notes: [
    'Flying',
  ],
  promoItems: [
    'Elysian Whip',
    'Earth Seal',
  ],
  promoGains: {
    female: {
      hp: 5,
      atk: 2,
      skl: 0,
      spd: 0,
      lck: 0,
      def: 2,
      res: 2,
      con: 1,
      mov: 1,
    },
  },
  maxStats: {
    female: {
      hp: 60,
      atk: 23,
      skl: 25,
      spd: 28,
      lck: 30,
      def: 23,
      res: 26,
      con: 25,
      mov: 15,
    },
  },
}
