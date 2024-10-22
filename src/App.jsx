
import { useEffect, useState } from 'react'
import './App.css'
import { ToDoProvider } from './context'
import ToDoForm from './components/ToDoForm'
import TodoItem from './components/TodoItem'

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
    setTodos((prev)=> prev.map((prevToDo)=> prevToDo.id === id ? 
    { ...prevToDo, completed:!prevToDo.completed }: prevToDo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos' , JSON.stringify(todos))
  },[todos])
  return (
    <ToDoProvider value={{ todos, deleteToDo, updateToDo, toggleComplete, addToDo }}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <ToDoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </ToDoProvider>
  )
}

export default App
