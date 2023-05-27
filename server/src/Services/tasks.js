class TaskService {
  constructor(Task) {
    this.task = Task;
  }

  async get() {
    try {
      return await this.task.findAll({
        attributes: ["id", "description", "isDone"],
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async getById(id) {
    try {
      return await this.task.findOne({
        where: {
          id: id,
        },
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async getByUserId(userId) {
    try {
      return await this.task.findAll({
        attributes: ["id", "description", "isDone"],
        where: {
          UserId: userId,
        },
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async create(taskDTO) {
    try {
      await this.task.create(taskDTO);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async delete(id) {
    try {
      return await this.task
        .destroy({
          where: {
            id: id,
          },
        })
        .then(function (rowDeleted) {
          if (rowDeleted === 1) {
            console.log("Deleted successfully");
          }
        });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async update(taskDTO) {
    try {
      await this.task.update(
        {
          isDone: taskDTO.isDone,
        },
        { where: { id: taskDTO.id } }
      );
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = TaskService;
