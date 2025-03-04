import TodoApp from "./pages/TodoApp"
import About from "./pages/About"
import NavBar from "./components/NavBar"
import { Routes, Route } from 'react-router-dom'
import TodoContent from "./pages/TodoContent"

export default function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/TodoApp" element={<TodoApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/TodoContent/:taskId" element={<TodoContent />} />
      </Routes>
    </div>
  )
}
