import lyn from './characters/lyn'

window.onload = function() {
  const header = document.getElementById('header')
  header.innerText = 'Code goes here'
  const p = document.createElement("p")
  p.classList.add("feces")
  p.innerText = "test"
  document.body.appendChild(p)
  console.log(lyn)
}
