const BASE_URL = "https://jsonplaceholder.typicode.com/todos"
const todos = []

const todoList = document.querySelector('#todo-list')
const form = document.querySelector('#form')


const getTodos = async () => {
  const res = await fetch(BASE_URL)
  const data = await res.json()

  console.log(data)
  data.forEach(todo => {
    todos.push(todo)
  })
  listTodos()
}


getTodos()


const listTodos = () => {
  todoList.innerHTML = ''

  todos.forEach(todo => {
    
    const todoElement = createTodoElement(todo)
    todoList.appendChild(todoElement)
  })
}


const createTodoElement = (todoData) => {
  let todo = document.createElement('div')
  todo.id = todoData.id
  todo.classList.add('todo')
 

  let title = document.createElement('p')
  title.classList.add('todo-title')
  title.innerText = todoData.title
  
  let status = document.createElement('p')
  status.classList.add('todo-status')
  status.innerText = todoData.completed

  

  todo.appendChild(title)
  todo.appendChild(status)


  return todo
}

const handleSubmit = e => {
e.preventDefault()

const newTodo = {
  title: document.querySelector('#todo-input').value
}

fetch(BASE_URL, {
  method: 'POST',
  body: JSON.stringify(newTodo),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => response.json())
.then((data) => {

  todos.push(data)
  const todoElement = createTodoElement(data)
  todoList.appendChild(todoElement)
})


}

form.addEventListener('submit', handleSubmit)