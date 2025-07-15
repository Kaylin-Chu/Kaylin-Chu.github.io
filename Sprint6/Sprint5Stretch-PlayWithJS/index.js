// import canvasConfetti from 'https://cdn.skypack.dev/canvas-confetti'

let confetti = document.getElementById('confetti')
let star = document.getElementById('star')
let music = document.getElementById('music')

confetti.onclick = clickCannon
star.onclick = clickStar
music.onclick = clickMusic

function clickCannon() {
  confetti()
  let soundEffect = new Audio('PartyWhistle.mp3')
  soundEffect.play()
}

function clickStar () {
  shoot()
  let soundEffect = new Audio('Twinkle.mp3')
  soundEffect.play()
}

function clickMusic () {
  let soundEffect = new Audio('Music.mp3')
  soundEffect.play()
}

confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
});

var defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ['star']
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ['circle']
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);
