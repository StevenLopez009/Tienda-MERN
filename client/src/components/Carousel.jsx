import { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Arreglo de imágenes y etiquetas
  const slides = [
    {
      img: "https://img.freepik.com/foto-gratis/belleza-otonal-abstracta-patron-venas-hoja-multicolor-generado-ia_188544-9871.jpg",
      label: "Slide 1",
    },
    {
      img: "https://media.istockphoto.com/id/1283080271/es/foto/hoja-de-oto%C3%B1o-con-un-corte-en-forma-de-avi%C3%B3n-sobre-un-fondo-del-cielo.jpg?s=612x612&w=0&k=20&c=Dt2BJln57jcmfjn5Dsnwkf5O3rC85e1NG-EjrpO_Ssk=",
      label: "Slide 2",
    },
    {
      img: "https://img.freepik.com/foto-gratis/belleza-otonal-abstracta-patron-venas-hoja-multicolor-generado-ia_188544-9871.jpg",
      label: "Slide 3",
    },
    {
      img: "https://media.istockphoto.com/id/1283080271/es/foto/hoja-de-oto%C3%B1o-con-un-corte-en-forma-de-avi%C3%B3n-sobre-un-fondo-del-cielo.jpg?s=612x612&w=0&k=20&c=Dt2BJln57jcmfjn5Dsnwkf5O3rC85e1NG-EjrpO_Ssk=",
      label: "Slide 4",
    },
    {
      img: "https://img.freepik.com/foto-gratis/belleza-otonal-abstracta-patron-venas-hoja-multicolor-generado-ia_188544-9871.jpg",
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
          style={{ width: "100%", height: "100%", borderRadius: 8 }}
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