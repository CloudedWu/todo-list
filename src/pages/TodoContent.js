import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { edittodo } from '../features/todolistSlice';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';
import {
  LeftOutlined,
  EditOutlined,
  SaveOutlined
} from '@ant-design/icons';

import './TodoContent.scss';

const { TextArea } = Input;

function Todo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  function handleEditing() {
    setIsEditing(!isEditing);
  }

  function handleEdit(e) {
    dispatch(edittodo({
      ...todo,
      text: e.target.value
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
      <input
        value={todo.text}
        onChange={handleEdit}
        onKeyDown={handleKeyDown}
        style={{ width: 250 }}
      />
    );
    buttonText = <SaveOutlined />;
  } else {
    task = <>{todo.text}</>;
    buttonText = <EditOutlined />;
  }

  return (
    <div
      className="text"
      style={{
        position: "relative",
      }}>
      {task}
      <button
        className="edit"
        onClick={handleEditing}
        style={{
          marginLeft: 10,
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default function TodoContent() {
  const { taskId } = useParams();  // 使用 useParams 获取 URL 参数
  const todos = useSelector(state => state.todolist);
  const navigate = useNavigate();
  const [isEditingContent, setIsEditingContent] = useState(false);
  const dispatch = useDispatch();
  // 找到对应的 todo
  const todo = todos.find(todo => todo.id === parseInt(taskId));

  // 如果没有找到对应的 todo，显示错误信息
  if (!todo) {
    return (
      <div>
        <button onClick={() => navigate('/TodoApp')}>
          返回
        </button>
        <h1>未找到该任务</h1>
      </div>
    );
  }

  function handleEditContent() {
    setIsEditingContent(!isEditingContent);
  }

  function handleContentChange(e) {
    dispatch(edittodo({
      ...todo,
      content: e.target.value
    }));
  }

  let contentArea;
  let buttonContent;
  if (isEditingContent) {
    contentArea = (
      <TextArea
        rows={4}
        value={todo.content}
        onChange={handleContentChange}
        style={{ width: '100%', marginTop: 10 }}
      />
    );
    buttonContent = '保存';
  } else {
    contentArea = <p>{todo.content}</p>;
    buttonContent = <EditOutlined />;
  }

  return (
    <div className="box">
      <div
        className="title">
        <button
          className="back"
          onClick={() => navigate('/TodoApp')}>
          <LeftOutlined />
        </button>
        <div
          className="text">
          <Todo todo={todo} />
        </div>
      </div>
      <div
        className="content">
        <p>
          任务内容：
          <button
            className="edit"
            onClick={handleEditContent}
            style={{ marginLeft: 10 }}
          >
            {buttonContent}
          </button>
        </p>
        {contentArea}
      </div>
    </div>
  );
}