const userServices = require("../services/user.services");

class UserController {
  async findUsers(_, res) {
    const users = await userServices.onlyUsernameAndId();
    res.json(users);
  }

  async create(req, res) {
    const { username } = req.body;
    const user = await userServices.create(username);
    res.json(user);
  }

  async addExercise(req, res) {
    const { id } = req.params;
    const { description, duration, date } = req.body;
    const userExercise = await userServices.addExercise(id, {
      description,
      duration,
      date,
    });

    res.json(userExercise);
  }

  async log(req, res) {
    const { id } = req.params;
    const log = await userServices.log(id);

    res.json(log);
  }
}

module.exports = new UserController();
