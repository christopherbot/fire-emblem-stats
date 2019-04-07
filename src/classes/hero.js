import uuid from 'uuid/v4'
import { mercenary } from './../classes'

export default {
  id: uuid(),
  name: 'Hero',
  type: 'promo',
  associatedClassId: mercenary.id,
  mov: 6,
  weapons: [
    'Sword',
    'Axe',
  ],
  notes: [
  ],
  promoItems: [
    'Hero Crest',
    'Earth Seal',
  ],
  promoGains: {
    male: {
      hp: 4,
      atk: 0,
      skl: 2,
      spd: 2,
      lck: 0,
      def: 2,
      res: 2,
      con: 1,
      mov: 1,
    },
  },
  maxStats: {
    male: {
      hp: 60,
      atk: 25,
      skl: 30,
      spd: 26,
      lck: 30,
      def: 25,
      res: 22,
      con: 20,
      mov: 15,
    },
  },
}
