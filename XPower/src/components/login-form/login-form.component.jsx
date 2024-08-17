import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import logo from "../../assets/logo.jpg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/login/login-service";
import { signInWithGooglePopup } from "../../utilities/firebase/firebase";
export default function LogInForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate("/home", { replace: true });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      loginService.TraineeLogin(formData);

      // Perform any additional actions after contact creation
      setFormData({
        Email: "",
        Password: "",
      });
    } catch (error) {
      console.log(error);
    }
    console.log(formData);
  };

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
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Email"
                  label="Email"
                  type="Email"
                  id="Email"
                  value={formData.Email}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type="Password"
                  id="Password"
                  value={formData.Password}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2, backgroundColor: "red", color: "white" }}
            >
              LogIn
            </Button>

            <Button
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2, backgroundColor: "red", color: "white" }}
              onClick={signInWithGoogle}
            >
              LogIn With Google
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
