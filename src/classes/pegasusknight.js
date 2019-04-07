import uuid from 'uuid/v4'
import { falconKnight } from './../classes'

export default {
  id: uuid(),
  name: 'Pegasus Knight',
  type: 'base',
  associatedClassId: falconKnight.id,
  mov: 7,
  weapons: [
    'Lance',
  ],
  notes: [
    'Flying',
  ],
  promoItems: [
    'Elysian Whip',
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
