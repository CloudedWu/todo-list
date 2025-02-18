import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <Link to="/TodoApp">TodoApp</Link>
      <br/>
      <Link to="/about">About Us</Link>
    </div>
  );
}
