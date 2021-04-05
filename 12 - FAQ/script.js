const faqs = document.querySelectorAll('.faq')
const faq_toggles = document.querySelectorAll('.faq-toggle')
faq_toggles.forEach((faq_toggle) => {
  faq_toggle.addEventListener('click', () => {
    faq_toggle.parentNode.classList.toggle('active')
  })
})
