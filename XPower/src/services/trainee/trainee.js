import BaseService from "../baseservice";

class TraineeSerivce extends BaseService {
  constructor() {
    super("");
  }
  GetTraineeById(id) {
    return this.get("Trainee", id);
  }
}

const traineeservice = new TraineeSerivce();

export { traineeservice };
