const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// 获取所有任务
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// 获取单个任务
router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

// 创建任务
router.post('/', async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.status(201).json(newTask);
});

// 更新任务
router.put('/:id', async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTask);
});

// 删除任务
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: '任务删除成功' });
});

module.exports = router;
