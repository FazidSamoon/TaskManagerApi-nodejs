import Model from "../models/task.js";
import asyncHandler from "../Middleware/async.js";


export const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Model.find({});
  res.status(201).json(tasks);
});

export const createTask = asyncHandler(async (req, res) => {
  const Task = await Model.create(req.body);
  res.status(201).json(Task);
});

export const deleteTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const task = await Model.findOneAndDelete({ _id: id });
  if (!task) {
    return res.status(401).json({ msg: `task with id ${id} not exists` });
  }
  res.status(201).json(task);
});

export const updateTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const task = await Model.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(401).json({ msg: `task with id ${id} not exists` });
  }
  res.status(200).json(task);
});

export const getTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const task = await Model.findOne({ _id: id });
  if (!task) {
    return res.status(401).json({ msg: `task with id ${id} not exists` });
  }
  res.status(201).json({ task });
});
