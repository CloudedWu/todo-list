import { createSlice } from '@reduxjs/toolkit'

export const todolistSlice = createSlice({
  name: 'todolist',
  initialState: [
    {
      id: 0,
      text: '学习语文',
      content: '背诵古诗词',
      done: false
    },
    {
      id: 1,
      text: '学习英语',
      content: '背单词',
      done: true
    }
  ],
  reducers: {
    addtodo: (state, action) => {
      state.push({
        id: state.length,
        text: action.payload.text,
        content: action.payload.content,
        done: false
      })
    },
    deletetodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload)
    },
    edittodo: (state, action) => {
      const { id, text, content, done } = action.payload
      const existingTodo = state.find(todo => todo.id === id)
      if (existingTodo) {
        existingTodo.text = text
        existingTodo.content = content
        existingTodo.done = done
      }
    }
  }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { addtodo, deletetodo, edittodo } = todolistSlice.actions

export default todolistSlice.reducer