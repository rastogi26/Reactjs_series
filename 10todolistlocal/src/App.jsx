import { useState } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";
import { useEffect } from "react";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (todo)=>{
            //to hold prev array state ,spread operator
            setTodos((prev)=> [{id:Date.now(),...todo},...prev])
  }

  const updateTodo = (id,todo)=>{
       
       // previous (prev)array ke upar map then har ek object called prevTodo pe condition
       setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))

  }

  const deleteTodo = (id)=>{
        // only add those values in array which are not equal to the id
         setTodos((prev)=>prev.filter((eachTodo)=>eachTodo.id!==id))
  }

  const toggleComplete = (id)=>{
        
      setTodos((prev) =>
        prev.map((prevTodo) =>
          prevTodo.id === id ? { ...prevTodo, completed : !prevTodo.completed} : prevTodo
        )
      );

  }

  useEffect(()=>{
    //local storage gives in string format so convert it into json format
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length>0) {
        setTodos(todos)
    }
},[])

useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
},[todos])
  
  return ( 
    <TodoProvider value={{ todos, addTodo, updateTodo,deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
          {/* Todo form goes here */}
          <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
                <div key={todo.id} className=" w-full">
                   <TodoItem todo={todo}/>
                </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
