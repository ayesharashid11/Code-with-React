import React, { useState } from 'react'
import { useToDo } from '../context'

const ToDoForm = () => {
     const [todo , setTodo] = useState('')

     const {addToDo} =useToDo()

     const add =(e)=>{
        e.preventDefault();
        if (!todo) return

        // addToDo({id : Date.now(), todo:todo , completed: false})
        addToDo({todo, completed: false})
        setTodo('')
     }
  return (
    <div>
      <form >
        <input type='text'  placeholder='Enter To Do ' className='text-black'
        value={todo} onChange={(e)=> setTodo(e.target.value)}/> 
        <button type='submit' onClick={add}>Add</button>
      </form>
    </div>
  )
}

export default ToDoForm
