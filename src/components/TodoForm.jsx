import React from 'react'
import { useState } from 'react'
import useTodo from '../contexts/TodoContext'

function TodoForm() {
   
    const [todo,setTodo]=useState('')
    const {todos,addTodo,deleteTodo,updateTodo,toggleComplete}=useTodo()
 
const add=(e)=>{
    e.preventDefault()
    if(!todo) return
 addTodo({todo,completed:false})
//  console.log(todo)
 setTodo('')
}

  return (
    <div>
      <form className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=>{setTodo(e.target.value)}}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    </div>
  )
}

export default TodoForm
