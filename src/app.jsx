import React from 'react'
import lyn from './characters/lyn'
import classes from './classes'
import affinities from './affinities'

import './index.css'

const baseClass = classes.find(cls => cls.id === lyn.baseClass)
const affinity = affinities.find(afn => afn.id === lyn.affinity)

export default () =>
  <div>
    <h1>FE7 Characters</h1>
    <h2>{lyn.name}</h2>
    {
      Object.keys(lyn.baseStats.lynMode).map(stat =>
        <p key={stat}>
          {stat}: {lyn.baseStats.lynMode[stat]}
        </p>,
      )
    }
    <p>mov: {baseClass.mov}</p>
    <p>affinity: {affinity.name}</p>
  </div>
