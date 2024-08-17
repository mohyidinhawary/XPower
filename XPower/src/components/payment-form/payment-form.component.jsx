import Box from "@mui/material/Box";

import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import SimCardRoundedIcon from "@mui/icons-material/SimCardRounded";

import { styled } from "@mui/system";
import { Button, Container } from "@mui/material";
import { PaymentContext } from "../../context/payment/payment";
import { useContext, useState } from "react";
const FormGrid = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function PaymentForm() {
  const { AddNewPayment } = useContext(PaymentContext);
  const [formData, setFormData] = useState({
    amount: 0,
    CardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      AddNewPayment(formData);
      // Perform any additional actions after contact creation
      setFormData({
        Amount: 0,
        CardNumber: "",
        ExpirationDate: "",
        CVV: "",
      });
    } catch (error) {
      console.log(error);
    }
    console.log(formData);
  };
  return (
    <>
      <Stack spacing={{ xs: 3, sm: 6 }} useFlexGap>
        <Container maxWidth="xs">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 3,
                height: { xs: 300, sm: 350, md: 375 },

                borderRadius: "20px",
                border: "1px solid ",
                borderColor: "divider",
                backgroundColor: "background.paper",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
              }}
              component="form"
              onSubmit={handleSubmit}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="subtitle2">Credit card</Typography>
                <CreditCardRoundedIcon sx={{ color: "text.secondary" }} />
              </Box>
              <SimCardRoundedIcon
                sx={{
                  fontSize: { xs: 48, sm: 56 },
                  transform: "rotate(90deg)",
                  color: "text.secondary",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  gap: 2,
                }}
              >
                <FormGrid sx={{ flexGrow: 1 }}>
                  <FormLabel htmlFor="CardNumber" required>
                    Card number
                  </FormLabel>
                  <OutlinedInput
                    id="CardNumber"
                    name="CardNumber"
                    autoComplete="CardNumber"
                    placeholder="0000 0000 0000 0000"
                    required
                    value={formData.CardNumber || ""}
                    onChange={handleChange}
                  />
                </FormGrid>
                <FormGrid sx={{ maxWidth: "20%" }}>
                  <FormLabel htmlFor="cvv" required>
                    CVV
                  </FormLabel>
                  <OutlinedInput
                    id="cvv"
                    name="cvv"
                    autoComplete="cvv"
                    placeholder="123"
                    required
                    value={formData.cvv || ""}
                    onChange={handleChange}
                  />
                </FormGrid>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <FormGrid sx={{ flexGrow: 1 }}>
                  <FormLabel htmlFor="amount" required>
                    Amount
                  </FormLabel>
                  <OutlinedInput
                    id="amount"
                    name="amount"
                    autoComplete="amount"
                    placeholder="$"
                    required
                    value={formData.amount || ""}
                    onChange={handleChange}
                  />
                </FormGrid>
                <FormGrid sx={{ flexGrow: 1 }}>
                  <FormLabel htmlFor="expirationDate" required>
                    Expiration date
                  </FormLabel>
                  <OutlinedInput
                    id="expirationDate"
                    name="expirationDate"
                    autoComplete="expirationDate"
                    placeholder="MM/YY"
                    required
                    value={formData.expirationDate || ""}
                    onChange={handleChange}
                  />
                </FormGrid>
              </Box>
              <Button
                type="submit"
                fullWidth
                sx={{ mt: 3, mb: 2, backgroundColor: "red ", color: "white" }}
              >
                Pay
              </Button>
            </Box>

            <Button
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2, backgroundColor: "red ", color: "white" }}
            >
              Generate QR Code
            </Button>
          </Box>
        </Container>
      </Stack>
    </>
  );
}
