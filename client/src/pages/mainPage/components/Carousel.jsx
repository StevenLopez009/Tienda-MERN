import { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Logo from "../../../assets/portada.jpg"
import carrusel2 from "../../../assets/carrusel2.jpg"
import carrusel3 from "../../../assets/carrusel3.jpg"
import carrusel4 from "../../../assets/carrusel4.jpg"
import carrusel5 from "../../../assets/carrusel5.jpg"

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: Logo,
      label: "Slide 1",
    },
    {
      img: carrusel2,
      label: "Slide 2",
    },
    {
      img: carrusel3,
      label: "Slide 3",
    },
    {
      img: carrusel4,
      label: "Slide 4",
    },
    {
      img: carrusel5,
      label: "Slide 3",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: 170,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0px auto",
        }}
      >
        <img
          src={slides[currentSlide].img}
          alt={slides[currentSlide].label}
          style={{ width: "100%", height: "100%", borderRadius: 8, objectFit: "cover" }}
        />
      </Box>

      <Box mt={1} display="flex" justifyContent="center">
        {slides.map((_, index) => (
          <IconButton
            key={index}
            onClick={() => goToSlide(index)}
            size="small"
            sx={{ color: currentSlide === index ? "primary.main" : "grey.500" }}
          >
            <FiberManualRecordIcon sx={{ fontSize: "12px" }} />{" "}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;