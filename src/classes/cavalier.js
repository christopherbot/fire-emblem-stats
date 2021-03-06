import uuid from 'uuid/v4'
import { paladin } from './../classes'

export default {
  id: uuid(),
  name: 'Cavalier',
  type: 'base',
  associatedClassId: paladin.id,
  mov: 7,
  weapons: [
    'Sword',
    'Lance',
  ],
  notes: [
    'Horseback',
  ],
  promoItems: [
    'Knight Crest',
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
