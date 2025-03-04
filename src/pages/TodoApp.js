import AddTodo from "../components/AddTodo.js"
import TodoList from "../components/TodoList.js";
import SearchTodo from "../components/SearchTodo.js";
import './TodoApp.scss';

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1 className="title">Todo List</h1>
      <SearchTodo />
      <AddTodo />
      <TodoList />
    </div>
  );
}
