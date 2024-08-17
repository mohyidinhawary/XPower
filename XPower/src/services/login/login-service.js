import BaseService from "../baseservice";

class LoginService extends BaseService {
  constructor() {
    super("Account");
  }

  TraineeLogin(inputdata) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    };
    return this.post("login", inputdata, config);
  }
}

const loginService = new LoginService();

export { loginService };
