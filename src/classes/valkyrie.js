import uuid from 'uuid/v4'
import { troubadour } from './../classes'

export default {
  id: uuid(),
  name: 'Valkyrie',
  type: 'promo',
  associatedClassId: troubadour.id,
  mov: 8,
  weapons: [
    'Anima',
    'Staff',
  ],
  notes: [
    'Horseback',
  ],
  promoItems: [
    'Guiding Ring',
    'Earth Seal',
  ],
  promoGains: {
    female: {
      hp: 3,
      atk: 2,
      skl: 1,
      spd: 0,
      lck: 0,
      def: 2,
      res: 3,
      con: 1,
      mov: 1,
    },
  },
  maxStats: {
    female: {
      hp: 60,
      atk: 25,
      skl: 24,
      spd: 25,
      lck: 30,
      def: 24,
      res: 28,
      con: 25,
      mov: 15,
    },
  },
}
