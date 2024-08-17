import React, { createContext, useState, useEffect } from "react";
import { registerService } from "../../services/register/register-service";

export const TraineeContext = createContext({
  addTrainee: () => {},
  GetTraineeById: () => {},
});

export const TraineeContexProvider = ({ children }) => {
  const [Trainees, setTrainees] = useState(() => {
    // Load trainees from local storage if available
    const storedTrainees = localStorage.getItem("Trainees");
    return storedTrainees ? JSON.parse(storedTrainees) : [];
  });

  console.log(Trainees);

  useEffect(() => {
    // Store trainees in local storage whenever they change
    localStorage.setItem("Trainees", JSON.stringify(Trainees));
  }, [Trainees]);
  console.log(localStorage);

  const AddNewTrainee = async (inputdata) => {
    try {
      const response = await registerService.addTrainee(inputdata);
      const newTrainee = response.data;
      localStorage.setItem("jwt", newTrainee.jwt);
      localStorage.setItem("id", newTrainee.user.id);

      setTrainees((prevTrainee) => [...prevTrainee, newTrainee]);
    } catch (error) {
      console.log(error);
    }
  };

  const GetTraineeById = (id) => {
    return Trainees.find((Trainee) => Trainee.id === id);
  };

  const value = { Trainees, AddNewTrainee, GetTraineeById };
  return (
    <TraineeContext.Provider value={value}>{children}</TraineeContext.Provider>
  );
};
