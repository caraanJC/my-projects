const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.querySelector('#left')
const rightBtn = document.querySelector('#right')

let activeSlide = 0

function setBgToBody() {
  removeActiveClass()
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides[activeSlide].classList.add('active')
}

function removeActiveClass() {
  slides.forEach((slide) => slide.classList.remove('active'))
}

function increaseActiveSlideValue() {
  activeSlide++
}

function decreaseActiveSlideValue() {
  activeSlide--
}

setBgToBody()
setActiveSlide()

leftBtn.addEventListener('click', () => {
  decreaseActiveSlideValue()
  if (activeSlide < 0) activeSlide = slides.length - 1
  setBgToBody()
  setActiveSlide()
})

rightBtn.addEventListener('click', () => {
  increaseActiveSlideValue()
  if (activeSlide > slides.length - 1) activeSlide = 0
  setBgToBody()
  setActiveSlide()
})
