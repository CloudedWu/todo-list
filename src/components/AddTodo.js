import { useState } from "react";
import { Button } from 'antd';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { addtodo } from '../features/todolistSlice';

export default function AddTodo() {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  function handleNewTodo(e) {
    setTodoText(e.target.value);
  }

  function handleAddTodo() {
    if (todoText.trim()) {
      dispatch(addtodo({
        text: todoText,
        content: ''  // 如果需要content的话，可以添加另一个输入框
      }));
      setTodoText('');
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  }

  return (
    <div style={{
      width: 500,
      marginBottom: 20,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      <Input
        placeholder='请输入待办事项'
        value={todoText}
        onChange={handleNewTodo}
        onKeyDown={handleKeyDown}
        style={{ width: 400 }}
      />
      <Button
        type="primary"
        onClick={handleAddTodo}>
        添加
      </Button>
    </div>
  );
}