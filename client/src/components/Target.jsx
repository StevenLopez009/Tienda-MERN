import { useState } from "react";
import { Box, Typography, Modal, Backdrop, Fade, Button } from "@mui/material";

function Target({ product }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const toggleDescription = () => setShowFullDescription(!showFullDescription);
  const maxDescriptionLength = 100; 
  const shortDescription = product.description.slice(0, maxDescriptionLength);

  return (
    <>
      <Box
        onClick={handleOpen} 
        sx={{
          height: "25vh",
          width: "100%",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={product.image}
          alt={`Imagen de ${product.name}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <Box sx={{ textAlign: "left", marginTop: "8px" }}>
          <Typography variant="h6" component="h2" sx={{ fontSize: "1rem" }}>
            {product.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "black", fontWeight: "bold" }}>
            ${product.price}
          </Typography>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: "white",
              overflowY: "auto",
      
            }}
          >
            
            <img
              src={product.image}
              alt={`Imagen de ${product.name}`}
              style={{
                width: "100%",
                height: "60vh",
                objectFit: "cover",
                borderRadius: "50px 50px 0 0",
                marginBottom: "16px",
              }}
            />
            <Box sx={{
              margin: "0 20px",
             
            }}>
              <Typography variant="h5" marginBottom={"10px"}>{product.name}</Typography>
              <Typography variant="h6">Product Details</Typography>
              <Box sx={{display: "flex"}}>
                <Typography variant="body1" sx={{ marginTop: "8px" }}>
                  {showFullDescription ? product.description : `${shortDescription}...`}
                </Typography>
                <Button
                  onClick={toggleDescription}
                  sx={{ marginTop: "8px", padding: "0", textTransform: "none" }}
                  size="small"
                >
                  {showFullDescription ? "Ver menos" : "Ver más"}
                </Button>
              </Box>
              
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default Target;

