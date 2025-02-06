import { Box, Button, Typography, Grid } from "@mui/material";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import { Link, useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/register");
  };

  return (
    <>
      <Box
        sx={{
          padding: "20px",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ height: "70%" }}>
          <Grid container spacing={2} sx={{ height: "100%" }}>
            <Grid item xs={6} sx={{ height: "100%" }}>
              <img
                src={img3}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "90px",
                }}
              />
            </Grid>
            <Grid item xs={6} sx={{ height: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <img
                  src={img2}
                  alt=""
                  style={{
                    width: "100%",
                    height: "48%",
                    objectFit: "cover",
                    borderRadius: "90px",
                  }}
                />
                <img
                  src={img1}
                  alt=""
                  style={{
                    width: "100%",
                    height: "48%",
                    objectFit: "cover",
                    borderRadius: "100px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>


        <Box
          sx={{
            height: "35%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "1.5rem", textAlign: "center", mb: 1 }}
          >
            The Fashion App That Makes You Look Your Best
          </Typography>
          <Typography sx={{ textAlign: "center", mb: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            beatae sed adipisci
          </Typography>
          <Button
            type="submit"
            variant="contained"
            sx={{
              py: 1.5,
              backgroundColor: "#7f5539",
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "#6e4a33",
              },
              alignSelf: "center",
              width: "100%",
            }}
            onClick={handleButtonClick}
          >
            Let's Get Started
          </Button>
          <Typography sx={{ textAlign: "center", mt: 2 }}>
            Already have an account? <Link to={"/login"}>Sign In</Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Splash;
