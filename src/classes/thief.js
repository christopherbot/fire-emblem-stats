import uuid from 'uuid/v4'
import { assassin } from './../classes'

export default {
  id: uuid(),
  name: 'Thief',
  type: 'base',
  associatedClassId: assassin.id,
  mov: 6,
  weapons: [
    'Sword',
  ],
  notes: [
    'Lockpick',
    'Steal',
  ],
  promoItems: [
    'Fell Contract',
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
