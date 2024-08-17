import { Outlet } from "react-router-dom";
import { TraineeContexProvider } from "./context/trainee/trainee";
import { PaymentContexProvider } from "./context/payment/payment";
import { AuthProvider } from "./context/auth/auth";
import { ThemeContextProvider } from "./context/themeprovider/themeprovider";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <CssBaseline />

        <TraineeContexProvider>
          <PaymentContexProvider>
            <AuthProvider>
              <Outlet />
            </AuthProvider>
          </PaymentContexProvider>
        </TraineeContexProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
