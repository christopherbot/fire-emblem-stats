import uuid from 'uuid/v4'
import { valkyrie } from './../classes'

export default {
  id: uuid(),
  name: 'Troubadour',
  type: 'base',
  associatedClassId: valkyrie.id,
  mov: 7,
  weapons: [
    'Staff',
  ],
  notes: [
    'Horseback',
  ],
  promoItems: [
    'Guiding Ring',
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
