import { useForm } from "react-hook-form";
import { useAuth } from "../../service/Auth.service.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit((data) => {
    signin(data);
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
          width: { xs: "90%", sm: "60%", md: "40%" },
          padding: "2rem",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h4" align="center" margin="2rem 0">
          Sign In
        </Typography>
        {signinErrors.length > 0 && (
          <Typography color="error" align="center" sx={{ mb: 2 }}>
            {signinErrors.join(", ")}
          </Typography>
        )}
        <form onSubmit={onSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <TextField
              label="Email"
              fullWidth
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
              InputLabelProps={{
                shrink: true,
                sx: { color: "black", fontSize: "1.2rem" },
              }}
              InputProps={{
                sx: { borderRadius: "40px" },
              }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputLabelProps={{
                shrink: true,
                sx: { color: "black", fontSize: "1.2rem" },
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
              Login
            </Button>
          </Box>
        </form>
        <Typography align="center" sx={{ mt: 3 }}>
          Don&apos;t have an account?{" "}
          <Link to="/register" style={{ textDecoration: "none", color: "#7f5539" }}>
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginPage;
