const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const decrease = document.getElementById('decrease')
const increase = document.getElementById('increase')
const clear = document.getElementById('clear')
const color_pallet = document.getElementById('color')
const sizeText = document.getElementById('size')

let size = 20
let isPressed = false
let color = 'black'
let x
let y

canvas.addEventListener('mousedown', (event) => {
  isPressed = true
  x = event.offsetX
  y = event.offsetY
})

canvas.addEventListener('mouseup', (event) => {
  isPressed = false
  x = undefined
  y = undefined
})

canvas.addEventListener('mousemove', (event) => {
  if (isPressed) {
    const x2 = event.offsetX
    const y2 = event.offsetY

    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2
  }
})

decrease.addEventListener('click', decreaseSize)
increase.addEventListener('click', increaseSize)
clear.addEventListener('click', clearCanvas)
color_pallet.addEventListener('change', setColor)

function drawCircle(x, y) {
  context.beginPath()
  context.arc(x, y, size, 0, Math.PI * 2)
  context.fillStyle = color
  context.fill()
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath()
  context.moveTo(x1, y1)
  context.lineTo(x2, y2)
  context.strokeStyle = color
  context.lineWidth = size * 2
  context.stroke()
}

function decreaseSize() {
  if (size > 5) {
    size -= 5
  }
  changeSizeText()
}

function increaseSize() {
  if (size < 50) {
    size += 5
  }
  changeSizeText()
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height)
}

function setColor() {
  color = color_pallet.value
}

function changeSizeText() {
  sizeText.innerText = `${size}`
}
