import BaseService from "../baseservice";

class QRCodeService extends BaseService {
  constructor() {
    super("QR");
  }

  generateQRCode() {
    const userId = localStorage.getItem("id");
    return this.post(`QR?userId=${userId}`);
  }

  GetTraineeQR() {
    const userId = localStorage.getItem("id");
    return this.get(`GetQR?userId=${userId}`);
  }
}

const qrcodeService = new QRCodeService();

export { qrcodeService };
