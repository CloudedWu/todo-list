const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  id:{
    type: Number,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Todo', TodoSchema);