import { useState } from "react";
import AddTodo from "./AddTodo.js"
import TodoList  from "./TodoList.js";


export default function TodoApp() {
  const initialTodo = [
    {
      id:0,
      text:'学习语文',
      done:false
    },
    {
      id:1,
      text:'学习英语',
      done:true
    }
  ]

  const [todos, setTodos] = useState(initialTodo);
  const [newTodo, setNewTodo] = useState("");

  function handleChangeTodo(task){
    setTodos(
      todos.map((t)=>{
        if(t.id === task.id){
          return task
        } else {
          return t
        }
      })
    )
  }


  return (
    <>
    <div >
      <h1 className="text">Todo List</h1>
      <AddTodo 
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList 
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        todos={todos}
        setTodos={setTodos} 
        handleChangeTodo = {handleChangeTodo}
      />      
    </div>


    </>
  );
}
