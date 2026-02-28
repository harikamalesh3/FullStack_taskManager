const Task = require("../models/Task");

const createTask = async (req, res) => {
  const task = await Task.create({
    ...req.body,
    user: req.user
  });
  res.json(task);
};

const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user });
  res.json(tasks);
};

const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
};

const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.json(task);
};

const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task Deleted" });
};

module.exports = {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask
};