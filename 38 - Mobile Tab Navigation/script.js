const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

const hideAllContents = () =>
  contents.forEach((content) => content.classList.remove('show'))

const hideAllItems = () =>
  listItems.forEach((item) => item.classList.remove('active'))

const addShow = (idx) => contents[idx].classList.add('show')

const addActive = (idx) => listItems[idx].classList.add('active')

listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAllContents()
    hideAllItems()
    addShow(idx)
    addActive(idx)
  })
})
