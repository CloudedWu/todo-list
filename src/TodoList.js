import { useState } from "react";


function Todo ({todos,todo,setTodos,handleChangeTodo}) {
  const [isEditing, setIsEditing] = useState(false)
  const [newText, setNewText] = useState(todo.text); 
  const [isDone,setIsDone] = useState(todo.done)

  function handleDeleteTodo(taskId){
    setTodos(todos.filter((t) => t.id !== taskId))
  }

  function handleEditing(){
    setIsEditing(!isEditing)
  }

  function handleEdit(e){
    handleChangeTodo(
      {
        ...todo,
        text:e.target.value
      }
    )
    setNewText(e.target.value)
  }

  function handleDone(){
    handleChangeTodo(
      {
        ...todo,
        done:!isDone
      }
    )
    setIsDone(!isDone)
  }

  function handleKeyDown(e){
    if (e.key === "Enter"){
      handleChangeTodo(
        {
          ...todo,
          text:newText
        }
      )
      setIsEditing(false)
    }
  }

  let task ;
  let buttonText ;
  if (isEditing){
      task = (
      <input 
      value={todo.text}
      onChange={handleEdit}
      onKeyDown={handleKeyDown}
      ></input>);
      buttonText = '保存';
  } else {
      task = (
      <>{todo.text}</>
      );
      buttonText = '编辑';
  }
  
  return(
    <div >
    <input 
    type="checkbox"
    onClick={handleDone}
    checked={todo.done}
    />
      {task}
     <button
     onClick={handleEditing}>{buttonText}</button>
     <button
     onClick={() =>handleDeleteTodo(todo.id)}>删除</button>
    </div>
  );
}

export default function TodoList({ newTodo, setNewTodo, todos, setTodos,handleChangeTodo }) {
  return (
    <>
      <h2>未完成</h2>
      <ul>
      { todos.map((todo) => 
       { if (todo.done === false)
        {return (<li key={todo.id}>
        <Todo 
        todos={todos}
        todo={todo}
        setTodos={setTodos}
        handleChangeTodo={handleChangeTodo}/>
        </li>) } 
        }
        )}
      </ul>
      <h2>已完成</h2>
      <ul>
      { todos.map((todo) => 
       { if (todo.done === true)
        {return (<li key={todo.id}>
        <del><Todo 
        todos={todos}
        todo={todo}
        setTodos={setTodos}
        handleChangeTodo={handleChangeTodo}/>
        </del>
        </li>) } 
        }
        )}
      </ul>
    </>
  );
}