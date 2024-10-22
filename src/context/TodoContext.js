import react, { createContext } from 'react'

export const ToDoContext = createContext({
    todos:[],
    addToDo: (todo)=>{},
    updateToDo: (id, todo)=>{},
    deleteToDo: (id)=>{},
toggleComplete: (id)=>{}
})







export const ToDoProvider = ToDoContext.Provider

export const useToDo = () =>{
    return useContext(ToDoContext)
}
