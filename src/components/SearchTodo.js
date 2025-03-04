import React from 'react';
import { Input, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './SearchTodo.scss';
const { Search } = Input;

function SearchList (search, filteredTodos)  {
  if (search) {
    return (
      <ul className='search-list'>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/TodoContent/${todo.id}`}>{todo.text}</Link>
          </li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
}

export default function SearchTodo() {
  const [search, setSearch] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const todos = useSelector(state => state.todolist);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(search);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <Space direction="vertical"
      style={{ marginBottom: 10 }}>
      <Search
        placeholder="搜索待办事项"
        value={search}
        onChange={(e) => handleSearch(e)}
        enterButton
      />
      {SearchList(search, filteredTodos)}
    </Space>
  );
}
