const TaskService = require('../Services/tasks')
const { Task } = require('../Models')

const taskService = new TaskService(Task)

exports.allTasks = async function(req, res, next) {
    try {
      const tasks = await taskService.get()
      res.json(tasks)
    } catch (err) {
      res.status(400).send(err.message)
      next(err)
    }
  }
exports.createTask = async function(req, res, next) {
try {
  const { description, isDone } = req.body
  await taskService.create({ description, isDone })
  res.status(201).json({ description, isDone })
} catch (err) {
  res.status(400).send(err.message)

next(err)}
}
exports.deleteTask = async function(req, res, next) {
    const {
      params: { id }
    } = req
    try {
      const user = await taskService.delete(id)
      res.status(200).send({})
    } catch (err) {
      res.status(400).send(err)
    
    next(err)}
}
exports.updateTask = async function(req, res, next) {
    try {
        const { id, isDone } = req.body
        await taskService.update({id, isDone })
        res.status(200).json({id, isDone })
      } catch (err) {
        res.status(400).send(err.message)
      
      next(err)}
}