import React, { createContext, useState } from "react";

import { paymentService } from "../../services/payment/payment-serivce";
import { qrcodeService } from "../../services/QRCode/QRCode-service";

export const PaymentContext = createContext({
  addPayment: () => {},
});

export const PaymentContexProvider = ({ children }) => {
  const [Payments, setPayments] = useState([]);
  const [QRCodes, setQRCodes] = useState([]);
  console.log(Payments);
  console.log(QRCodes);

  const AddNewPayment = async (inputdata) => {
    try {
      const response = await paymentService.addPayment(inputdata);
      const newPayment = response.data;
      setPayments((prevPayment) => [...prevPayment, newPayment]);
    } catch (error) {
      console.log(error);
    }
  };

  const AddNewQRCode = async () => {
    try {
      const response = await qrcodeService.generateQRCode();
      const newQRCode = response.data;
      setQRCodes((prevQRCode) => [...prevQRCode, newQRCode]);
    } catch (error) {
      console.log(error);
    }
  };
  const value = { AddNewPayment, AddNewQRCode };
  return (
    <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>
  );
};
