
import { useState } from 'react'
import './App.css'
import { ToDoProvider } from './context'

function App() {
  const [todos, setTodos] = useState([])
  const addToDo = (todos) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todos }])
  }

  const updateToDo = (id, todos) => {
    setTodos((prev) => prev.map((prevToDo) => (prevToDo.id === id ? todos : prevToDo)))
  }

  const deleteToDo = (id) => {
    setTodos((prev)=> prev.filter((todo)=> (todo.id !==id)))
  }

  const toggleComplete = (id) =>{
    setTodos((prev)=> prev.map((prevToDo)=> prevToDo === id ? 
    { ...prevToDo, completed:!prevToDo.completed }: prevToDo))
  }
  return (
    <ToDoProvider value={{ todos, deleteToDo, updateToDo, toggleComplete, addToDo }}>
      <div>

      </div>
    </ToDoProvider>
  )
}

export default App
