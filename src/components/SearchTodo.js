import React from 'react';
import { Input, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const { Search } = Input;

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
        placeholder="input search text"
        value={search}
        onChange={(e) => handleSearch(e)}
        enterButton
      />
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </Space>
  );
}
