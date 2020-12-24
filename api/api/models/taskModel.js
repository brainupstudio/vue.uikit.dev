const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    task: {
      type: String,
      required: 'task cannot be blank'
    },
  },
  { collection: 'task' }
);

module.exports = mongoose.model('task', taskSchema);