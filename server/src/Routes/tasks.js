const controller = require('../Controllers/task')
const router = require('express').Router()

router.post('/', controller.createTask)
router.delete('/:id', controller.deleteTask)
router.patch('/:id', controller.updateTask)
router.get('/', controller.allTasks)

module.exports = router