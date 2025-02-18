import { useState } from "react";
import { Button, Input, Card, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { deletetodo, edittodo } from '../features/todolistSlice';
import { Link } from 'react-router-dom';

function Todo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const dispatch = useDispatch();

  function handleDeleteTodo(taskId) {
    dispatch(deletetodo(taskId));
  }

  function handleEditing() {
    setIsEditing(!isEditing);
  }

  function handleEdit(e) {
    setNewText(e.target.value);
    dispatch(edittodo({
      ...todo,
      text: e.target.value
    }));
  }

  function handleDone() {
    dispatch(edittodo({
      ...todo,
      done: !todo.done
    }));
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  }

  let task;
  let buttonText;
  if (isEditing) {
    task = (
      <Input
        value={todo.text}
        onChange={handleEdit}
        onKeyDown={handleKeyDown}
        style={{ width: 250 }}
      />
    );
    buttonText = '保存';
  } else {
    task = <>
      <Link to={`/TodoContent/${todo.id}`}>{todo.text}</Link>
    </>;
    buttonText = '编辑';
  }

  return (
    <div
      style={{
        position: "relative",
        height: 50,
      }}>
      <input
        type="checkbox"
        onClick={handleDone}
        checked={todo.done}
      />
      {task}
      <div style={{
        position: "absolute",
        right: 0,
        top: 0,
      }}>
        <Button
          type="primary"
          onClick={handleEditing}
        >
          {buttonText}
        </Button>
        <Button
          danger
          onClick={() => handleDeleteTodo(todo.id)}
          style={{ marginLeft: 10 }}
        >
          删除
        </Button>
      </div>

    </div>
  );
}

export default function TodoList() {
  const todos = useSelector(state => state.todolist);
  return (
    <Space direction="vertical" size={16}>
      <Card
        title="未完成"
        style={{
          width: 500,
        }}
      >
        {todos.map((todo) =>
          !todo.done ? (
            <li key={todo.id}>
              <Todo todo={todo} />
            </li>
          ) : null
        )}
      </Card>
      <Card
        title="已完成"
        style={{
          width: 500,
        }}
      >
        {todos.map((todo) =>
          todo.done ? (
            <li key={todo.id}>
              <del>
                <Todo todo={todo} />
              </del>
            </li>
          ) : null
        )}
      </Card>
    </Space>
  );
}