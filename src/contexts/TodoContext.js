import { createContext,useContext } from "react";

const TodoContext=createContext({
todos:[{
    id:1,
    todo:"todo value",
    completed:false,
}],
addTodo:(todo)=>{},
updateTodo:(id,todo)=>{},
deleteTodo:(id)=>{},
toggleComplete:(id)=>{}
})

export const TodoProvider=TodoContext.Provider

export default function useTodo(){
  return useContext(TodoContext)
}