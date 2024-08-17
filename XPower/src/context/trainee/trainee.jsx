import React, { createContext, useState } from "react";
import { registerService } from "../../services/register/register-service";

export const TraineeContext = createContext({
  addTrainee: () => {},
  GetTraineeById: () => {},
});

export const TraineeContexProvider = ({ children }) => {
  const [Trainees, setTrainees] = useState([]);

  console.log(Trainees);

  const AddNewTrainee = async (inputdata) => {
    try {
      const response = await registerService.addTrainee(inputdata);
      const newTrainee = response.data;

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
