import { Button } from "antd";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function TodoContent() {
  const { taskId } = useParams();  // 使用 useParams 获取 URL 参数
  const todos = useSelector(state => state.todolist);
  const navigate = useNavigate();

  // 找到对应的 todo
  const todo = todos.find(todo => todo.id === parseInt(taskId));

  // 如果没有找到对应的 todo，显示错误信息
  if (!todo) {
    return (
      <div>
        <Button type="primary" onClick={() => navigate('/TodoApp')}>
          返回
        </Button>
        <h1>未找到该任务</h1>
      </div>
    );
  }

  return (
    <div>
      <Button type="primary" onClick={() => navigate('/TodoApp')}>
        返回
      </Button>
      <h1 className="text">任务详情</h1>
      <div>
        <h2>任务名称：{todo.text}</h2>
        <p>任务内容：{todo.content}</p>
      </div>
    </div>
  );
}