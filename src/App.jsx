import { useState } from 'react'
import './App.css'
import { TodoProvider} from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import InputTodo from './components/InputTodo'
import { useEffect } from 'react'

function App() {
 
const [todos, settodos] = useState([])

const addTodo=(todo)=>{
settodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
}

const updateTodo=(id,todo)=>{
settodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?todo:prevTodo))
}
const deleteTodo=(id)=>{
settodos((prev)=>prev.filter((prevTodo)=>prevTodo.id!==id))
}
const toggleComplete=(id)=>{
settodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
}


 

 useEffect(() => {

    const todos = JSON.parse(localStorage.getItem("todos"))
// console.log(localStorage.getItem('todos'))
    if (todos && todos.length > 0) {
      settodos(todos)
    }
  }, [])
   useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {/* {console.log(todos)} */}
                        
                        {todos.map((todo)=>
                             (<div key={todo.id} className='w-full'>
                               {/* {console.log(todo)} */}
                              <InputTodo todo={todo}/>
                              </div>)
                        )}

                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
