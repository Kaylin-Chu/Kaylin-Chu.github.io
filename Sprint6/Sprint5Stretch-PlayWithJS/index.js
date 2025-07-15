import canvasConfetti from 'https://cdn.skypack.dev/canvas-confetti'

let confetti = document.getElementById('confetti')
let star = document.getElementById('star')
let music = document.getElementById('music')

confetti.onclick = clickCannon
star.onclick = clickStar
music.onclick = clickMusic

function clickCannon() {
  canvasConfetti()
  let soundEffect = new Audio('PartyWhistle.mp3')
  soundEffect.play()
}

function clickStar() {
  shoot()
  setTimeout(shoot, 0)
  setTimeout(shoot, 100)
  setTimeout(shoot, 200)
  let soundEffect = new Audio('Twinkle.mp3')
  soundEffect.play()
}

function clickMusic() {
  let soundEffect = new Audio('Music.mp3')
  soundEffect.play()
}

function shoot() {
  confetti({
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    colors: ['FF1493', 'FFC0CB', 'FF69B4'],
    particleCount: 40,
    shapes: ['star'],
  })
}
