import BaseService from "../baseservice";

class PaymentService extends BaseService {
  constructor() {
    super("Payment");
  }
  addPayment(inputdata) {
    return this.post("payment", inputdata);
  }
}

const paymentService = new PaymentService();

export { paymentService };
