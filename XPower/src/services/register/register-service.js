import BaseService from "../baseservice";

class RegisterService extends BaseService {
  constructor() {
    super("Account");
  }
  addTrainee(inputdata) {
    return this.post("Regsiter", inputdata);
  }
}

const registerService = new RegisterService();

export { registerService };
