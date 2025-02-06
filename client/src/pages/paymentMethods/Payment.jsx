import { Box, Typography, IconButton, TextField, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function PaymentMethodsPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        padding: 2,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: 50,
          position: "relative",
        }}
      >
        <IconButton onClick={handleBack}>
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="h1"
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            fontWeight: "bold",
          }}
        >
          Add Card
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: 4,
          width: "100%",
          height: 200,
          backgroundColor: "#e0e0e0",
          borderRadius: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="subtitle1" color="textSecondary">
          Your card preview will appear here
        </Typography>
      </Box>

      {/* Inputs */}
      <Box sx={{ marginTop: 4 }}>
        <Box sx={{ marginBottom: 3 }}>
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: 1, fontWeight: "bold" }}
          >
            Card Holder Name
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter card holder name"
          />
        </Box>

        <Box sx={{ marginBottom: 3 }}>
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: 1, fontWeight: "bold" }}
          >
            Card Number
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter card number"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="subtitle1"
              sx={{ marginBottom: 1, fontWeight: "bold" }}
            >
              Expiry Date
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="MM/YY"
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="subtitle1"
              sx={{ marginBottom: 1, fontWeight: "bold" }}
            >
              CVV
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter CVV"
            />
          </Box>
        </Box>
        <Button sx={{
          marginTop: 4,
          width: "100%",
          height: 50,
          borderRadius: "50px",
          backgroundColor: "#6e4a33",
          color: "white",
        }}>
          ADD CARD
        </Button>
      </Box>
    </Box>
  );
}

export default PaymentMethodsPage;


