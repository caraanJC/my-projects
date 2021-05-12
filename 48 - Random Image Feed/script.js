const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
rows = 10

const getRandomNum = () => {
  return Math.floor(Math.random() * 10) + 300
}

const getRandomSize = () => {
  return `${getRandomNum()}x${getRandomNum()}`
}

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img')
  img.src = `${unsplashURL}${getRandomSize()}`
  container.appendChild(img)
}
