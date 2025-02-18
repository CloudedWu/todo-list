import TodoApp from "./components/TodoApp"
import About from "./components/About"
import NavBar from "./components/NavBar"
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/TodoApp" element={<TodoApp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
