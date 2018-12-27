import lyn from './characters/lyn'
import classes from './classes'
import affinities from './affinities'

window.onload = function() {
	const nameElement = document.createElement('div')
	nameElement.innerText = `name: ${lyn.name}`
	document.body.appendChild(nameElement)

	const stats = ['lvl', 'hp', 'atk', 'skl', 'spd', 'lck', 'def', 'res', 'con']
	stats.forEach((stat) => {
		const statElement = document.createElement('div')
		statElement.innerText = `${stat}: ${lyn.baseStats.lynMode[stat]}`
		document.body.appendChild(statElement)
	})
	const baseClass = classes.find(cls => cls.id === lyn.baseClass)
	const movElement = document.createElement('div')
	movElement.innerText = `mov: ${baseClass.mov}`
	document.body.appendChild(movElement)

	const affinity = affinities.find(afn => afn.id === lyn.affinity)
	const affinElement = document.createElement('div')
	affinElement.innerText = `affin: ${affinity.name}`
	document.body.appendChild(affinElement)
}
