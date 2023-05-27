const { TaskController } = require("../Controllers");
const router = require("express").Router();

router.post("/", TaskController.createTask);
router.delete("/:id", TaskController.deleteTask);
router.patch("/:id", TaskController.updateTask);
router.get("/", TaskController.getTasksByUserId);
router.get("/:id", TaskController.getTasksByUserId);

module.exports = router;
