import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/register/register.component";
import Payment from "../pages/payment/payment.component";
import Subscription from "../components/subscription/subscription.component";
import LogIn from "../pages/login/login.component";
import { Home } from "../pages/Home/Home.component";
import TraineeRenew from "../pages/trainee-renew/trainee-renew.component";
export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Register />,
      },
      {
        path: "/subscription",
        element: <Subscription />,
      },

      {
        path: "/payment/:id",
        element: <Payment />,
      },

      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/renew/:id",
        element: <TraineeRenew />,
      },
    ],
  },
]);
