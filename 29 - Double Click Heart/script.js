const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let likes = +times.innerText

loveMe.addEventListener('click', (event) => {
  if (clickTime === 0) clickTime = new Date().getTime()
  else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(event)
      increaseLikes()
      clickTime = 0
    } else clickTime = new Date().getTime()
  }
})

const createHeart = (event) => {
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')

  const x = event.clientX
  const y = event.clientY

  const leftOffset = event.target.offsetLeft
  const topOffset = event.target.offsetTop

  const xInside = x - leftOffset
  const yInside = y - topOffset

  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`

  loveMe.appendChild(heart)
  setTimeout(() => heart.remove(), 1000)
}

const increaseLikes = () => {
  likes++
  times.innerText = likes
}
