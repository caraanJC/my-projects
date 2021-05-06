const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const send = document.getElementById('send')
const panel = document.getElementById('panel')
let selectedRating = 'Satisfied'

// event bubbling & event propagation
ratingsContainer.addEventListener('click', (event) => {
  if (event.target.parentNode.classList.contains('rating')) {
    removeActive()
    event.target.parentNode.classList.add('active')
    selectedRating = event.target.nextElementSibling.innerText
  }
})

const removeActive = () => {
  for (rating of ratings) {
    rating.classList.remove('active')
  }
}

send.addEventListener('click', (e) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br />
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `
})
