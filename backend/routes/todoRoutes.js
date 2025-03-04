const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();

// 获取所有 Todo
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// 获取单个 Todo
router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }
    res.json(todo);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// 创建新的 Todo
router.post('/', async (req, res) => {
  const { text, content } = req.body;

  try {
    const newTodo = new Todo({
      text,
      content
    });
    await newTodo.save();
    res.json(newTodo);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// 更新 Todo
router.put('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }
    res.json(todo);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// 删除 Todo
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }
    res.json({ msg: 'Todo removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;

