import uuid from 'uuid/v4'
import { hero } from './../classes'

export default {
  id: uuid(),
  name: 'Mercenary',
  type: 'base',
  associatedClassId: hero.id,
  mov: 5,
  weapons: [
    'Sword',
  ],
  notes: [
  ],
  promoItems: [
    'Hero Crest',
    'Earth Seal',
  ],
  maxStats: {
    hp: 60,
    atk: 20,
    skl: 20,
    spd: 20,
    lck: 30,
    def: 20,
    res: 20,
    con: 20,
    mov: 15,
  },
}
