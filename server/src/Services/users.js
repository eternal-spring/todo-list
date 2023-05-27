class UserService {
  constructor(User) {
    this.user = User;
  }

  async findUser(username) {
    try {
      return await this.user.findOne({
        where: {
          username: username,
        },
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async create(userDTO) {
    try {
      await this.user.create(userDTO);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = UserService;
