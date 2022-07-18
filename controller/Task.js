import model from "../models/task.js";

export const getAllTasks = (req, res) => {
  res.send("all tasks");
};

export const createTask = async (req, res) => {
  const Task = await model.create(req.body)
  res.json(Task);
};

export const deleteTask = (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  res.send(`delete task ${id}`);
};

export const updateTask = (req, res) => {
  const { id } = req.params;
  res.send(`update task ${id}`);
};

export const getTask = (req, res) => {
  res.send("get task");
};
