import Model from "../models/task.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Model.find({});
    res.status(201).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const createTask = async (req, res) => {
  try {
    const Task = await Model.create(req.body);
    res.status(201).json(Task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Model.findOneAndDelete({ _id: id });
    if (!task) {
      return res.status(401).json({ msg: `task with id ${id} not exists` });
    }
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Model.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(401).json({ msg: `task with id ${id} not exists` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Model.findOne({ _id: id });
    if (!task) {
      return res.status(401).json({ msg: `task with id ${id} not exists` });
    }
    res.status(201).json({ task });
  } catch (error) {
    res.status(401).send("error");
  }
};
