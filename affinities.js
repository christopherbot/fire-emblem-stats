import uuid from 'uuid/v4'

export const fire = {
  id: uuid(),
  name: 'Fire',
  atk: 0.5,
  accuracy: 2.5,
  avoid: 2.5,
  crit: 2.5,
}

export const thunder = {
  id: uuid(),
  name: 'Thunder',
  def: 0.5,
  avoid: 2.5,
  crit: 2.5,
  dodge: 2.5,
}

export const wind = {
  id: uuid(),
  name: 'Wind',
  atk: 0.5,
  accuracy: 2.5,
  crit: 2.5,
  dodge: 2.5,
}

export const ice = {
  id: uuid(),
  name: 'Ice',
  def: 0.5,
  accuracy: 2.5,
  avoid: 2.5,
  dodge: 2.5,
}

export const dark = {
  id: uuid(),
  name: 'Dark',
  accuracy: 2.5,
  avoid: 2.5,
  crit: 2.5,
  dodge: 2.5,
}

export const light = {
  id: uuid(),
  name: 'Light',
  atk: 0.5,
  def: 0.5,
  accuracy: 2.5,
  crit: 2.5,
}

export const anima = {
  id: uuid(),
  name: 'Anima',
  atk: 0.5,
  def: 0.5,
  avoid: 2.5,
  dodge: 2.5,
}

export default [
  fire,
  thunder,
  wind,
  ice,
  dark,
  light,
  anima,
]
