const result = document.getElementById('result')
const length = document.getElementById('length')
const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const generate = document.getElementById('generate')
const clipboard = document.getElementById('clipboard')

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
  const symbols = '!@#$%^&*()[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

const randomGenerator = {
  Lower: getRandomLower,
  Upper: getRandomUpper,
  Numbers: getRandomNumber,
  Symbols: getRandomSymbol,
}

const generatePassword = (Lower, Upper, Numbers, Symbols, Length) => {
  let generatedPassword = ''
  const typesCount = Lower + Upper + Numbers + Symbols
  const typesArray = [{ Lower }, { Upper }, { Numbers }, { Symbols }].filter(
    (item) => Object.values(item)[0]
  )

  if (typesCount === 0) return ''

  for (let i = 0; i < Length; i += typesCount) {
    typesArray.forEach((type) => {
      const theKeys = Object.keys(type)[0]

      generatedPassword += randomGenerator[theKeys]()
    })
  }
  const finalPassword = generatedPassword.slice(0, Length)
  return finalPassword
}

generate.onclick = () => {
  const Length = +length.value
  const hasLower = lowercase.checked
  const hasUppper = uppercase.checked
  const hasNumbers = numbers.checked
  const hasSymbols = symbols.checked
  result.innerText = generatePassword(
    hasLower,
    hasUppper,
    hasNumbers,
    hasSymbols,
    Length
  )
}
