import uuid from 'uuid/v4'
import { bladeLord } from './../classes'

export default {
  id: uuid(),
  name: 'Lord (Lyn)',
  type: 'base',
  associatedClassId: bladeLord.id,
  mov: 5,
  weapons: [
    'Sword',
  ],
  notes: [
  ],
  promoItems: [
    'Heaven Seal',
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
