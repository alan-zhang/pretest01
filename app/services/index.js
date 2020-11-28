import { doLogin } from "./mockData";
import { isValidate } from "./utils";

class DataService {
  async login(username, password) {
    if (!isValidate(username, password)) {
      return this.createErrorResult("Please input an invalid username or password.");
    }

    const user = doLogin(username, password);
    if (user) {
      return this.createResult(user)
    }

    return this.createErrorResult("Username or password invalid.");
  }

  async saveSteps(step) {
    console.log(`Step saved: ${step}`);
  }

  createResult(data) {
    return Promise.resolve({ success: true, data });
  }

  createErrorResult(message) {
    return Promise.resolve({ success: false, error: { message } });
  }
}

export default DataService;