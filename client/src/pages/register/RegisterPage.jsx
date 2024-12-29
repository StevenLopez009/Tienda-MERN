import { useForm } from "react-hook-form";
import { useAuth } from "../../service/Auth.service.jsx";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";

function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "60%", md: "40%" },
          padding: "2rem",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={onSubmit}>
          <Typography variant="h4" align="center" margin="1.5rem 0">
            Create Account
          </Typography>
          <Typography align="center" sx={{ mb: 2 }}>
            Fill in your information below to register
          </Typography>
          {registerErrors.length > 0 && (
            <Box sx={{ mb: 2 }}>
              {registerErrors.map((error, i) => (
                <Typography
                  key={i}
                  color="error"
                  align="center"
                  sx={{ fontSize: "0.9rem" }}
                >
                  {error}
                </Typography>
              ))}
            </Box>
          )}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Username"
              fullWidth
              {...register("username", { required: true })}
              required
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                sx: { borderRadius: "40px" },
              }}
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              {...register("email", { required: true })}
              required
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                sx: { borderRadius: "40px" },
              }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              {...register("password", { required: true })}
              required
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                sx: { borderRadius: "40px" },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                py: 1.5,
                backgroundColor: "#7f5539",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#6e4a33",
                },
              }}
            >
              Register
            </Button>
          </Box>
          <Typography align="center" sx={{ mt: 2 }}>
            Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "none", color: "#7f5539" }}>
              Sign In
            </Link>
          </Typography>
        </form>
      </Box>
    </Box>
  );
}

export default RegisterPage;

