// Importing required modules
const mongoose = require('mongoose');

// Defining the task schema
const TaskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    default: 'pending'
  }
}, {
  timestamps: true
});

// Creating the task model
const Task = mongoose.model('Task', TaskSchema);

// Exporting the task model
module.exports = Task;
