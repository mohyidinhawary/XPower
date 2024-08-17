import BaseService from "../baseservice";

class PaymentService extends BaseService {
  constructor() {
    super("Payment");
  }

  addPayment(inputdata) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    };
    const UserId = localStorage.getItem("id");
    return this.post(`payment?id=${UserId}`, inputdata, config);
  }
}

const paymentService = new PaymentService();

export { paymentService };
