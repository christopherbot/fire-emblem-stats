module.exports = [{
  param: 'name',
  label: 'Character name',
  type: 'string',
  variableName: true,
  titleCase: true,
}, {
  param: 'baseClass',
  label: 'Base class',
  type: 'string',
  variableName: true,
}, {
  param: 'promoClass',
  label: 'Promo class',
  type: 'string',
  variableName: true,
}, {
  param: 'lmBaseLvl',
  label: '[Lyn mode] Base LVL',
  type: 'number',
}, {
  param: 'lmBaseHp',
  label: '[Lyn mode] Base HP',
  type: 'number',
}, {
  param: 'lmBaseAtk',
  label: '[Lyn mode] Base Atk',
  type: 'number',
}, {
  param: 'lmBaseSkl',
  label: '[Lyn mode] Base Skl',
  type: 'number',
}, {
  param: 'lmBaseSpd',
  label: '[Lyn mode] Base Spd',
  type: 'number',
}, {
  param: 'lmBaseLck',
  label: '[Lyn mode] Base Lck',
  type: 'number',
}, {
  param: 'lmBaseDef',
  label: '[Lyn mode] Base Def',
  type: 'number',
}, {
  param: 'lmBaseRes',
  label: '[Lyn mode] Base Res',
  type: 'number',
}, {
  param: 'lmBaseCon',
  label: '[Lyn mode] Base Con',
  type: 'number',
}, {
  param: 'ehmBaseLvl',
  label: '[Eliwood/Hector mode] Base LVL',
  type: 'number',
}, {
  param: 'ehmBaseHp',
  label: '[Eliwood/Hector mode] Base HP',
  type: 'number',
}, {
  param: 'ehmBaseAtk',
  label: '[Eliwood/Hector mode] Base Atk',
  type: 'number',
}, {
  param: 'ehmBaseSkl',
  label: '[Eliwood/Hector mode] Base Skl',
  type: 'number',
}, {
  param: 'ehmBaseSpd',
  label: '[Eliwood/Hector mode] Base Spd',
  type: 'number',
}, {
  param: 'ehmBaseLck',
  label: '[Eliwood/Hector mode] Base Lck',
  type: 'number',
}, {
  param: 'ehmBaseDef',
  label: '[Eliwood/Hector mode] Base Def',
  type: 'number',
}, {
  param: 'ehmBaseRes',
  label: '[Eliwood/Hector mode] Base Res',
  type: 'number',
}, {
  param: 'ehmBaseCon',
  label: '[Eliwood/Hector mode] Base Con',
  type: 'number',
}, {
  param: 'hmBaseStats',
  label: 'Does this character have Hard Mode stats? [y/n]',
  type: 'boolean',
}, {
  param: 'hmBaseLvl',
  label: '[Hard mode] Base LVL',
  type: 'number',
  prerequisite: 'hmBaseStats',
}, {
  param: 'hmBaseHp',
  label: '[Hard mode] Base HP',
  type: 'number',
  prerequisite: 'hmBaseStats',
}, {
  param: 'hmBaseAtk',
  label: '[Hard mode] Base Atk',
  type: 'number',
  prerequisite: 'hmBaseStats',
}, {
  param: 'hmBaseSkl',
  label: '[Hard mode] Base Skl',
  type: 'number',
  prerequisite: 'hmBaseStats',
}, {
  param: 'hmBaseSpd',
  label: '[Hard mode] Base Spd',
  type: 'number',
  prerequisite: 'hmBaseStats',
}, {
  param: 'hmBaseLck',
  label: '[Hard mode] Base Lck',
  type: 'number',
  prerequisite: 'hmBaseStats',
}, {
  param: 'hmBaseDef',
  label: '[Hard mode] Base Def',
  type: 'number',
  prerequisite: 'hmBaseStats',
}, {
  param: 'hmBaseRes',
  label: '[Hard mode] Base Res',
  type: 'number',
  prerequisite: 'hmBaseStats',
}, {
  param: 'hmBaseCon',
  label: '[Hard mode] Base Con',
  type: 'number',
  prerequisite: 'hmBaseStats',
}, {
  param: 'hpGrowth',
  label: 'HP Growth',
  type: 'number',
}, {
  param: 'atkGrowth',
  label: 'Atk Growth',
  type: 'number',
}, {
  param: 'sklGrowth',
  label: 'Skl Growth',
  type: 'number',
}, {
  param: 'spdGrowth',
  label: 'Spd Growth',
  type: 'number',
}, {
  param: 'lckGrowth',
  label: 'Lck Growth',
  type: 'number',
}, {
  param: 'defGrowth',
  label: 'Def Growth',
  type: 'number',
}, {
  param: 'resGrowth',
  label: 'Res Growth',
  type: 'number',
}, {
  param: 'affinity',
  label: 'Affinity',
  type: 'string',
  variableName: true,
}, {
  param: 'lmRecruit',
  label: 'Does this character get recruited in Lyn Mode? [y/n]',
  type: 'boolean',
}, {
  param: 'lmRecruitChapter',
  label: '[Lyn mode] Recruit chapter',
  type: 'string',
  prerequisite: 'lmRecruit',
}, {
  param: 'lmRecruitMethod',
  label: '[Lyn mode] Recruit method',
  type: 'string',
  prerequisite: 'lmRecruit',
}, {
  param: 'emRecruitChapter',
  label: '[Eliwood mode] Recruit chapter',
  type: 'string',
}, {
  param: 'emRecruitMethod',
  label: '[Eliwood mode] Recruit method',
  type: 'string',
}, {
  param: 'hmRecruitChapter',
  label: '[Hector mode] Recruit Chapter',
  type: 'string',
}, {
  param: 'hmRecruitMethod',
  label: '[Hector mode] Recruit method',
  type: 'string',
}, {
  param: 'numberOfSupports',
  label: 'How many supports does this character have?',
  type: 'number',
  subQuestions: [{
    param: 'supportCharacter',
    label: 'Support character name',
    type: 'string',
    variableName: true,
    parent: 'supports',
  }, {
    param: 'supportBasePoints',
    label: 'Support base points',
    type: 'number',
    parent: 'supports',
  }, {
    param: 'supportPointGain',
    label: 'Support point gain',
    type: 'number',
    parent: 'supports',
  }],
}]
