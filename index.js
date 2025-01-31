import express, { json } from 'express';
import { connect, Schema, model } from 'mongoose';
const app = express();

// Connecting to MongoDB
connect('mongodb://localhost/todo_list', {useNewUrlParser: true, useUnifiedTopology: true});

// Middleware
app.use(json());

// Schema and Model
const taskSchema = new Schema({
  name: String,
  completed: Boolean,
});

const Task = model('Task', taskSchema);

// Routes
app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

app.post('/tasks', async (req, res) => {
  const task = new Task({
    name: req.body.name,
    completed: false,
  });
  await task.save();
  res.send(task);
});

app.delete('/tasks/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send({ message: 'Task deleted' });
});

// Start the Server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
