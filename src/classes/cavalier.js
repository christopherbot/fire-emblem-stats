import uuid from 'uuid/v4'

export default {
  id: uuid(),
  name: 'Cavalier',
  weapons: ['Sword', 'Lance'],
  mov: 7,
  promoClass: 'Paladin',
  promoItems: ['Knight Crest', 'Earth Seal'],
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
  skills: ['Canto'],
}
