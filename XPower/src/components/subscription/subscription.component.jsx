import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import logo from "../../assets/logo.jpg";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import { TraineeContext } from "../../context/trainee/trainee";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Subscription() {
  const { Trainees } = useContext(TraineeContext);
  console.log(Trainees);
  const id = localStorage.getItem("id");
  const navigate = useNavigate();

  return (
    <>
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <img src={logo} alt="" />
          </Avatar>
          <Typography>you are on step to complete your subscription</Typography>
          <Button
            type="submit"
            fullWidth
            sx={{ mt: 3, mb: 2, backgroundColor: "red ", color: "white" }}
            onClick={() => navigate(`/payment/${id}`)}
          >
            Subscripe
          </Button>
        </Box>
      </Container>
    </>
  );
}
