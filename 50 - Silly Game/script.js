const screens = document.querySelectorAll('.screen')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let current_screen = 0
let seconds = 0
let score = 0
let selected_insect = {}

const getImageDetails = (btn) => {
  const img = btn.querySelector('img')
  const src = img.getAttribute('src')
  const alt = img.getAttribute('alt')
  return { src, alt }
}

const switchScreen = () => {
  screens[current_screen].classList.add('up')
  current_screen += 1
}

const set_selected_insect = (btn) => {
  selected_insect = getImageDetails(btn)
}

const getRandomLocation = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  const x = Math.random() * (width - 200) + 100
  const y = Math.random() * (height - 200) + 100
  return { x, y }
}

const increaseTime = () => {
  let m = Math.floor(seconds / 60)
  let s = seconds % 60
  m = m < 10 ? `0${m}` : m
  s = s < 10 ? `0${s}` : s
  timeEl.innerHTML = `Time: ${m}:${s}`
  seconds++
}

const startGame = () => {
  setInterval(increaseTime, 1000)
}

const increaseScore = () => {
  score++
  if (score > 19) {
    message.classList.add('visible')
  }
  scoreEl.innerHTML = `Score: ${score}`
}

const addInsects = () => {
  setTimeout(createInsect, 1000)
  setTimeout(createInsect, 1500)
}

function catchInsect() {
  increaseScore()
  this.classList.add('caught')
  setTimeout(() => {
    this.remove()
  }, 2000)
  addInsects()
}

const createInsect = () => {
  const insect = document.createElement('div')
  insect.classList.add('insect')
  const { x, y } = getRandomLocation()
  insect.style.top = `${y}px`
  insect.style.left = `${x}px`
  insect.innerHTML = `<img src="${selected_insect.src}" alt="${
    selected_insect.alt
  }" style="transform: rotate(${Math.random() * 360}deg)"/>`

  insect.addEventListener('click', catchInsect)

  game_container.appendChild(insect)
}

start_btn.addEventListener('click', switchScreen)

choose_insect_btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    set_selected_insect(btn)
    switchScreen()
    setTimeout(createInsect, 1000)
    startGame()
  })
})
