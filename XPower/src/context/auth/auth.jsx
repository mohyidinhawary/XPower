import { createContext, useState } from "react";

import { loginService } from "../../services/login/login-service";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [Trainee, setTrainee] = useState({});
  //   let [loading, setLoading] = useState(true);

  let loginUser = async (inputdata) => {
    try {
      const response = await loginService.TraineeLogin(inputdata); // Use LoginService for login

      if (response.status === 200) {
        const Trainee = response.data;
        console.log(response);
        setTrainee(Trainee);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   let updateToken = async () => {
  //     try {
  //       const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ refresh: authTokens?.refresh }),
  //       });

  //       const data = await response.json();

  //       if (response.status === 200) {
  //         setAuthTokens(data);
  //         setUser(jwtDecode(data.access));
  //         localStorage.setItem("authTokens", JSON.stringify(data));
  //       } else {
  //         logoutUser();
  //       }

  //       if (loading) {
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       console.error("Token update failed: ", error);
  //       logoutUser();
  //     }
  //   };

  let contextData = {
    Trainee: Trainee,

    loginUser: loginUser,
  };

  //   useEffect(() => {
  //     if (loading) {
  //       updateToken();
  //     }

  //     let fourMinutes = 1000 * 60 * 4;

  //     let interval = setInterval(() => {
  //       if (authTokens) {
  //         updateToken();
  //       }
  //     }, fourMinutes);
  //     return () => clearInterval(interval);
  //   }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
