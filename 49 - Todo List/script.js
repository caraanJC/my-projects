const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

const updateLS = () => {
  todosEl = document.querySelectorAll('#todos li')

  const todos = []

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed'),
    })
  })

  localStorage.setItem('todos', JSON.stringify(todos))
}

const addToDo = (todo) => {
  let todoText = input.value

  if (todo) {
    todoText = todo.text
  }

  if (todoText) {
    const todoEl = document.createElement('li')
    if (todo && todo.completed) {
      todoEl.classList.add('completed')
    }
    todoEl.innerText = todoText

    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed')
      updateLS()
    })

    todoEl.addEventListener('contextmenu', (event) => {
      event.preventDefault()

      todoEl.remove()

      updateLS()
    })

    todosUL.appendChild(todoEl)

    input.value = ''

    updateLS()
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  addToDo()
})

if (todos) {
  todos.forEach((todo) => addToDo(todo))
}
