import { createContext,useContext } from "react";

export const TodoContext = createContext({

    todos:[
        {
            id:1,
            todoTitle:"",
            completed:false
        }
    ],

    addToDo:(todo)=>{},
    deleteToDo:(id)=>{},
    updateToDo:(id ,todo)=>{},
    toggleComplete:(id)=>{}
})


export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoContextProvider = TodoContext.Provider