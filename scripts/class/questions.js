module.exports = [{
  param: 'name',
  label: 'Class name',
  type: 'string',
  variableName: true,
  titleCase: true,
}, {
  param: 'type',
  label: 'Class type [base/promo]',
  type: 'string',
  oneOf: ['base', 'promo'],
}, {
  param: 'associatedClass',
  label: 'Associated class',
  type: 'string',
  variableName: true,
}, {
  param: 'mov',
  label: 'mov',
  type: 'number',
}, {
  param: 'numberOfWeapons',
  label: 'How many weapons does this class have?',
  type: 'number',
  subQuestions: [{
    param: 'weapon',
    label: 'Weapon',
    type: 'string',
    parent: 'weapons',
  }],
}, {
  param: 'numberOfNotes',
  label: 'How many notes does this class have?',
  type: 'number',
  subQuestions: [{
    param: 'note',
    label: 'note',
    type: 'string',
    parent: 'notes',
  }],
}, {
  param: 'numberOfPromoItems',
  label: 'How many promo items does this class have?',
  type: 'number',
  subQuestions: [{
    param: 'promoItem',
    label: 'Promo item',
    type: 'string',
    parent: 'promoItems',
  }],
}, {
  param: 'maleGains',
  label: 'Does this class have male stat gains? [y/n]',
  type: 'boolean',
}, {
  param: 'maleHpGain',
  label: '[Male] Hp gain',
  type: 'number',
  prerequisite: 'maleGains',
}, {
  param: 'maleAtkGain',
  label: '[Male] Atk gain',
  type: 'number',
  prerequisite: 'maleGains',
}, {
  param: 'maleSklGain',
  label: '[Male] Skl gain',
  type: 'number',
  prerequisite: 'maleGains',
}, {
  param: 'maleSpdGain',
  label: '[Male] Spd gain',
  type: 'number',
  prerequisite: 'maleGains',
}, {
  param: 'maleLckGain',
  label: '[Male] Lck gain',
  type: 'number',
  prerequisite: 'maleGains',
}, {
  param: 'maleDefGain',
  label: '[Male] Def gain',
  type: 'number',
  prerequisite: 'maleGains',
}, {
  param: 'maleResGain',
  label: '[Male] Res gain',
  type: 'number',
  prerequisite: 'maleGains',
}, {
  param: 'maleConGain',
  label: '[Male] Con gain',
  type: 'number',
  prerequisite: 'maleGains',
}, {
  param: 'maleMovGain',
  label: '[Male] Mov gain',
  type: 'number',
  prerequisite: 'maleGains',
}, {
  param: 'femaleGains',
  label: 'Does this class have female stat gains? [y/n]',
  type: 'boolean',
}, {
  param: 'femaleHpGain',
  label: '[Female] Hp gain',
  type: 'number',
  prerequisite: 'femaleGains',
}, {
  param: 'femaleAtkGain',
  label: '[Female] Atk gain',
  type: 'number',
  prerequisite: 'femaleGains',
}, {
  param: 'femaleSklGain',
  label: '[Female] Skl gain',
  type: 'number',
  prerequisite: 'femaleGains',
}, {
  param: 'femaleSpdGain',
  label: '[Female] Spd gain',
  type: 'number',
  prerequisite: 'femaleGains',
}, {
  param: 'femaleLckGain',
  label: '[Female] Lck gain',
  type: 'number',
  prerequisite: 'femaleGains',
}, {
  param: 'femaleDefGain',
  label: '[Female] Def gain',
  type: 'number',
  prerequisite: 'femaleGains',
}, {
  param: 'femaleResGain',
  label: '[Female] Res gain',
  type: 'number',
  prerequisite: 'femaleGains',
}, {
  param: 'femaleConGain',
  label: '[Female] Con gain',
  type: 'number',
  prerequisite: 'femaleGains',
}, {
  param: 'femaleMovGain',
  label: '[Female] Mov gain',
  type: 'number',
  prerequisite: 'femaleGains',
}, {
  param: 'maleMaxStats',
  label: 'Does this class have male max stat? [y/n]',
  type: 'boolean',
}, {
  param: 'maleMaxHp',
  label: '[Male] Max Hp',
  type: 'number',
  prerequisite: 'maleMaxStats',
}, {
  param: 'maleMaxAtk',
  label: '[Male] Max Atk',
  type: 'number',
  prerequisite: 'maleMaxStats',
}, {
  param: 'maleMaxSkl',
  label: '[Male] Max Skl',
  type: 'number',
  prerequisite: 'maleMaxStats',
}, {
  param: 'maleMaxSpd',
  label: '[Male] Max Spd',
  type: 'number',
  prerequisite: 'maleMaxStats',
}, {
  param: 'maleMaxLck',
  label: '[Male] Max Lck',
  type: 'number',
  prerequisite: 'maleMaxStats',
}, {
  param: 'maleMaxDef',
  label: '[Male] Max Def',
  type: 'number',
  prerequisite: 'maleMaxStats',
}, {
  param: 'maleMaxRes',
  label: '[Male] Max Res',
  type: 'number',
  prerequisite: 'maleMaxStats',
}, {
  param: 'maleMaxCon',
  label: '[Male] Max Con',
  type: 'number',
  prerequisite: 'maleMaxStats',
}, {
  param: 'maleMaxMov',
  label: '[Male] Max Mov',
  type: 'number',
  prerequisite: 'maleMaxStats',
}, {
  param: 'femaleMaxStats',
  label: 'Does this class have female max stat? [y/n]',
  type: 'boolean',
}, {
  param: 'femaleMaxHp',
  label: '[Female] Max Hp',
  type: 'number',
  prerequisite: 'femaleMaxStats',
}, {
  param: 'femaleMaxAtk',
  label: '[Female] Max Atk',
  type: 'number',
  prerequisite: 'femaleMaxStats',
}, {
  param: 'femaleMaxSkl',
  label: '[Female] Max Skl',
  type: 'number',
  prerequisite: 'femaleMaxStats',
}, {
  param: 'femaleMaxSpd',
  label: '[Female] Max Spd',
  type: 'number',
  prerequisite: 'femaleMaxStats',
}, {
  param: 'femaleMaxLck',
  label: '[Female] Max Lck',
  type: 'number',
  prerequisite: 'femaleMaxStats',
}, {
  param: 'femaleMaxDef',
  label: '[Female] Max Def',
  type: 'number',
  prerequisite: 'femaleMaxStats',
}, {
  param: 'femaleMaxRes',
  label: '[Female] Max Res',
  type: 'number',
  prerequisite: 'femaleMaxStats',
}, {
  param: 'femaleMaxCon',
  label: '[Female] Max Con',
  type: 'number',
  prerequisite: 'femaleMaxStats',
}, {
  param: 'femaleMaxMov',
  label: '[Female] Max Mov',
  type: 'number',
  prerequisite: 'femaleMaxStats',
}]
