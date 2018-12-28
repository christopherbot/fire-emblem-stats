import uuid from 'uuid/v4'

export default {
  id: uuid(),
  name: 'Lord (Lyn)',
  weapons: ['Sword'],
  mov: 5,
  promoItems: ['Heaven Seal'],
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
  skills: null,
}
