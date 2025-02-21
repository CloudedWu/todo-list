import AddTodo from "../components/AddTodo.js"
import TodoList from "../components/TodoList.js";
import SearchTodo from "../components/SearchTodo.js";

export default function TodoApp() {
  return (
    <div>
      <h1 className="text">Todo List</h1>
      <SearchTodo />
      <AddTodo />
      <TodoList />
    </div>
  );
}
