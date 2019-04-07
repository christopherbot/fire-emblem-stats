import uuid from 'uuid/v4'
import { dancer } from './../classes'

export default {
  id: uuid(),
  name: 'Bard',
  type: 'base',
  associatedClassId: dancer.id,
  mov: 5,
  weapons: [
  ],
  notes: [
    'Play',
    'Nils exclusive',
  ],
  promoItems: [
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
