const { TaskService } = require("../Services");
const { Task } = require("../Models");

const taskService = new TaskService(Task);

const getAllTasks = async function (req, res, next) {
  try {
    const tasks = await taskService.get();
    res.json(tasks);
  } catch (err) {
    res.status(400).send(err.message);
    next(err);
  }
};

const getTasksByUserId = async function (req, res, next) {
  try {
    const tasks = await taskService.getByUserId(req.id);
    res.json(tasks);
  } catch (err) {
    res.status(400).send(err.message);
    next(err);
  }
};
const createTask = async function (req, res, next) {
  try {
    const { description, isDone } = req.body;
    await taskService.create({ description, isDone, UserId: req.id });
    res.status(201).json({ description, isDone });
  } catch (err) {
    res.status(400).send(err.message);

    next(err);
  }
};
const deleteTask = async function (req, res, next) {
  const {
    params: { id },
  } = req;
  try {
    const task = await taskService.getById(id);
    if (task.UserId != req.id) throw err;
    await taskService.delete(id);
    res.status(200).send({});
  } catch (err) {
    res.status(400).send(err);

    next(err);
  }
};
const updateTask = async function (req, res, next) {
  try {
    const { id, isDone } = req.body;
    const task = await taskService.getById(id);
    if (task.UserId != req.id) throw err;
    await taskService.update({ id, isDone });
    res.status(200).json({ id, isDone });
  } catch (err) {
    res.status(400).send(err.message);

    next(err);
  }
};

module.exports = {
  getAllTasks,
  getTasksByUserId,
  createTask,
  deleteTask,
  updateTask,
};
