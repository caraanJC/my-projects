const password = document.getElementById('password')
const background = document.getElementById('background')

const required_length = 8

password.addEventListener('keyup', () => {
  if (password.value.length <= required_length)
    background.style.filter = `blur(${
      20 - (password.value.length * 20) / required_length
    }px)`
})
