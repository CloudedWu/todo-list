import { useState } from "react";


export default function AddTodo({ newTodo, setNewTodo, todos, setTodos }) {
  const [nextId,setNextId] = useState(2)

  function handleNewTodo(e) {
    setNewTodo({
      id:nextId,
      text:e.target.value,
      done:false,});
    setNextId(nextId+1)
  }

  function handleAddTodo() {
    if (newTodo.text.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo({
        ...newTodo,
        text:''
      });
    }
  }

  function handleKeyDown(e){
    if (e.key === "Enter"){
      handleAddTodo();
    }
  }

  return (
    <>
      <input
        placeholder='请输入待办事项'
        value={newTodo.text}
        onChange={handleNewTodo}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleAddTodo} 
      >
      添加
      </button>
    </>
  );
}