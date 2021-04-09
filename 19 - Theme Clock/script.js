const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const time = document.querySelector('.time')
const date = document.querySelector('.date')
const toggle = document.querySelector('.toggle')
const html = document.querySelector('html')

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Ma',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

toggle.addEventListener('click', () => {
  toggleDark()
  changeToggleName()
})

function toggleDark() {
  html.classList.toggle('dark')
}

function changeToggleName() {
  if (html.classList.contains('dark')) {
    toggle.innerText = 'Light Mode'
  } else {
    toggle.innerText = 'Dark Mode'
  }
}

function setTime() {
  const time = new Date()
  const month = time.getMonth()
  const day = time.getDay()
  const AM_or_PM = time.getHours() > 12 ? 'PM' : 'AM'
  const hours = time.getHours() % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  hour.style.transform = `translate(-50%, -100%) rotate(${scale(
    hours,
    0,
    11,
    0,
    360
  )}deg)`
  minute.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`
  second.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`

  setTimeText(hours, minutes, AM_or_PM)
  setDate(day, month)
}

function setTimeText(hour, minute, AM_or_PM) {
  time.innerText = `${hour}:${minute} ${AM_or_PM}`
}

function setDate(day, month) {
  date.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${day}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

setTime()

setInterval(setTime, 1000)
