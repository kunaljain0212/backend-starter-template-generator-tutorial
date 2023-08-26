import l from "../../common/logger";
import { userData } from "../utils/data";

class UserService {
  async getAllUsers() {
    try {
      return userData;
    } catch (error) {
      l.error(error, "User Service: Error while getting all users");
      throw error;
    }
  }

  async getUserGitHubDetails(username) {
    try {
      const user = userData[username];
      return user;
    } catch (error) {
      l.error(error, "User Service: Error while getting user GitHub details");
      throw error;
    }
  }
}

export default new UserService();
