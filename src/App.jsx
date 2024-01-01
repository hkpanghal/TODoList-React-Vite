import React, { useEffect, useState } from "react";
import { TodoContextProvider } from "./contexts/Index";
import ToDoForm from "./components/ToDoForm";
import ToDoItems from "./components/ToDoItems";

function App() {
  const [todos, setTodos] = useState([]);

  function addToDo(todo){
    setTodos((oldtodos)=> [...oldtodos,{id:Date.now(),...todo}])
  }

  function deleteToDo(id){
    setTodos((oldtodos)=>oldtodos.filter((prevtodos)=>prevtodos.id != id))
  }

  function updateToDo(id,todo){
    setTodos((oldtodos)=>oldtodos.map((prevtodo)=>prevtodo.id === id?  todo : prevtodo))
  }

  function toggleComplete(id){
    setTodos((oldtodos)=>oldtodos.map((prevtodos)=>prevtodos.id === id? {...prevtodos,completed:!prevtodos.completed} : prevtodos))
  }

  useEffect(()=>{
   
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0) setTodos(todos)
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])


  return (
    <TodoContextProvider value={{todos,addToDo,deleteToDo,updateToDo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <ToDoForm/>
          </div>

          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((eachtodo)=>(
              <div key={eachtodo.id}
              className="w-full">
                
                <ToDoItems todo={eachtodo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
