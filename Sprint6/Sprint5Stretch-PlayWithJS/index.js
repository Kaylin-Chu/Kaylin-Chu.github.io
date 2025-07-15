import canvasConfetti from 'https://cdn.skypack.dev/canvas-confetti'

let confetti = document.getElementById('confetti')

confetti.onclick = clickCannon

function clickCannon() {
  canvasConfetti()
  let soundEffect = new Audio('PartyWhistle.mp3')
  soundEffect.play()
}
