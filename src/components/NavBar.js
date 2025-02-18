import React from 'react'
import { Link } from 'react-router-dom'
import { Tabs } from 'antd';

export default function NavBar() {
  const items = [
    {
      key: '1',
      label: <Link to="/TodoApp">TodoApp</Link>,
    },
    {
      key: '2',
      label: <Link to="/about">About Us</Link>,
    },
  ];

  return (
    <div>
      <Tabs defaultActiveKey="1" items={items}/>
    </div>
  );
}
