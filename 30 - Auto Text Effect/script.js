const text = document.getElementById('text')
const speed_input = document.getElementById('speed')
const textToOutput = 'We Love Programming!'
let index = 1
let speed = 300 / speed_input.value

const writeText = () => {
  text.innerText = textToOutput.slice(0, index)
  index++

  if (index > textToOutput.length) index = 1

  setTimeout(writeText, speed)
}

speed_input.addEventListener(
  'input',
  (event) => (speed = 300 / event.target.value)
)

writeText()
