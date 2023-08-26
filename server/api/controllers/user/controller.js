import l from "../../../common/logger";
import UserService from "../../services/user.service";

export class Controller {
  async getUserGitHubDetails(req, res, next) {
    try {
      const { username } = req.body;

      if (!username) res.status(400).json({ error: "Username is required" });

      const user = await UserService.getUserGitHubDetails(username);
      res.json(user);
    } catch (error) {
      l.error(
        error,
        "User Controller: Error while getting user GitHub details"
      );
      next(error);
    }
  }

  async getAllUsers(req, res, next) {
    const users = await UserService.getAllUsers();
    res.json(users);
  }
}
export default new Controller();
