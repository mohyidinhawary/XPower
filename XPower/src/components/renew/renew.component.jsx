import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import { qrcodeService } from "../../services/QRCode/QRCode-service";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
export default function Renew() {
  const [QRCodeImage, setQRCodeImage] = useState(null);
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  useEffect(() => {
    const fetchQRCodeImage = async () => {
      try {
        const response = await qrcodeService.GetTraineeQR();
        setQRCodeImage(response.data.qrCodeImage);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching QR code image:", error);
      }
    };

    fetchQRCodeImage();
  }, []);
  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Container maxWidth="xs">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {QRCodeImage ? (
                <img
                  src={`data:image/jpeg;base64,${QRCodeImage}`}
                  alt="QR Code"
                  style={{
                    maxWidth: "80%",
                    height: "auto",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              ) : (
                <p>Loading QR code...</p>
              )}
            </Grid>
            <Button
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2, backgroundColor: "red", color: "white" }}
              onClick={() => {
                navigate(`/payment/${id}`);
              }}
            >
              Renew subscription
            </Button>

            <Button
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2, backgroundColor: "red", color: "white" }}
            >
              Cancel subscription
            </Button>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
