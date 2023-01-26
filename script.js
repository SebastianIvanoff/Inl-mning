const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

const todoList = document.querySelector("#todo");
const form = document.querySelector("#form-todo");

const getTodos = async () => {
  const res = await fetch(BASE_URL)
  const data = await res.json()

  console.log(data)

  data.forEach(todo => {
    todoList.appendChild(createTodoElement(todo))
  })
}

getTodos()

const createTodoElement = (todoData) => {
  const todo = document.createElement('div')
  todo.classList.add('todo')

  const title = document.createElement('p')
  title.classList.add('todo-title')
  title.innerText = todoData.title
  const status = document.createElement('p')
  status.classList.add('stauts')
  status.innerText = todoData.completed

  const button = document.createElement('button')
  button.classList.add('delete')
  button.innerHTML


  todo.appendChild(title)
  todo.appendChild(status)
  todo.appendChild(button)

  return todo

}