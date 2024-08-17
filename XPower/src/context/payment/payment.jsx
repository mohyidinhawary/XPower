import React, { createContext, useState } from "react";

import { paymentService } from "../../services/payment/payment-serivce";

export const PaymentContext = createContext({
  addPayment: () => {},
});

export const PaymentContexProvider = ({ children }) => {
  const [Payments, setPayments] = useState([]);
  console.log(Payments);

  const AddNewPayment = async (id, inputdata) => {
    try {
      const response = await paymentService.addPayment(id, inputdata);
      const newPayment = response.data;
      setPayments((prevPayment) => [...prevPayment, newPayment]);
    } catch (error) {
      console.log(error);
    }
  };
  const value = { AddNewPayment };
  return (
    <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>
  );
};
