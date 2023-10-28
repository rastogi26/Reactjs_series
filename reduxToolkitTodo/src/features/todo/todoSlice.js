import { createSlice,nanoid } from "@reduxjs/toolkit";


//nanoid = generate unique id

 const initialState = {
   todos: [
     {
       id: 1,
       text: "hello",
     },
   ],
 };

 export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        // have properties and function
        // give two state and action
        addTodo: (state,action)=>{
            const todo = {
                id : nanoid(),
                text: action.payload
            }

            state.todos.push(todo)
        },
        removeTodo: (state,action)=>{
            //filter gives only true value
            state.todos = state.todos.filter((todo)=>todo.id!== action.payload)
        },

    }

 })


export const {addTodo,removeTodo} = todoSlice.actions


export default todoSlice.reducer