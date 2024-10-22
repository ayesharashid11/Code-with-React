import React, { useState } from 'react'
import { useToDo } from '../context'

const TodoItem = ({ todo }) => {
    const [toDoEdit, setToDoEdit] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo); 

    const { toggleComplete, deleteToDo, updateToDo } = useToDo();

    const editToDo = () => {
        updateToDo(todo.id, { ...todo, todo: todoMsg });
        setToDoEdit(false);  
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    }

    return (
        <div
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text" 
                className={` text-black ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}  
                readOnly={!toDoEdit}
            />
            <button
                onClick={() => {
                    if (todo.completed) return;

                    if (toDoEdit) {
                        editToDo();  
                    } else {
                        setToDoEdit((prev) => !prev); 
                    }
                }}
                disabled={todo.completed}
            >
                {toDoEdit ? "📁" : "✏️"}
            </button>
            <button
                onClick={() => deleteToDo(todo.id)}
            >
                ❌
            </button>
        </div>
    )
}

export default TodoItem
