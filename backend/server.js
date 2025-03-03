require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// 连接 MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB 连接成功'))
  .catch(err => console.error('MongoDB 连接失败:', err));

// 中间件
app.use(cors());
app.use(express.json());

// 路由
app.use('/tasks', require('./routes/taskRoutes'));

// 启动服务器
app.listen(PORT, () => console.log(`服务器运行在 http://localhost:${PORT}`));
