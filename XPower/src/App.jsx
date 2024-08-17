import { Outlet } from "react-router-dom";
import { TraineeContexProvider } from "./context/trainee/trainee";
import { PaymentContexProvider } from "./context/payment/payment";

function App() {
  return (
    <>
      <TraineeContexProvider>
        <PaymentContexProvider>
          <Outlet />
        </PaymentContexProvider>
      </TraineeContexProvider>
    </>
  );
}

export default App;
