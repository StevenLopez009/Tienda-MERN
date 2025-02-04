import { useState } from "react";
import { Box, Typography, Modal, Backdrop, Fade, Button } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Target({ product, addToCart, createFavorite, userId, deleteFavorite, isFavorited }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toggleDescription = () => setShowFullDescription(!showFullDescription);
  const maxDescriptionLength = 100;
  const shortDescription = product.description.slice(0, maxDescriptionLength);

  const createFav = async () => {
    try {
      const res = await createFavorite(userId, [product._id]);
      return res.data
    } catch (error) {
      console.log("Error creating favorite")
    }
  }

  const deleteFav = async () => {
    try {
      const res = await deleteFavorite(userId, product._id);
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log("Error Deleting favorite")
    }
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor, selecciona un tamaño antes de agregar al carrito.");
      return;
    }
    addToCart({ ...product, selectedSize });
  };


  return (
    <>
      <Box
        onClick={handleOpen}
        sx={{
          width: "150px",
          height: "150px",
          aspectRatio: "1",
          display: "flex",
          flexDirection: "column",
          margin: "30px auto",
          position: "relative",
        }}
      >
        {isFavorited ? (
          <RemoveCircleIcon
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              fontSize: "2rem",
              backgroundColor: "#6e4a33",
              padding: "5px",
              borderRadius: "50%",
              color: "white",
              zIndex: 100,
            }}
            onClick={(event) => {
              event.stopPropagation();
              deleteFav()
            }}
          />
        ) : (
          <FavoriteBorderIcon
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              fontSize: "2rem",
              backgroundColor: "rgba(255, 255, 255, 0.42)",
              padding: "5px",
              borderRadius: "50%",
              color: "#6e4a33",
              zIndex: 100,
            }}
            onClick={(event) => {
              event.stopPropagation();
              createFav()
            }}
          />
        )}
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
            <Box sx={{ position: "relative" }}>
              <ArrowBackIcon
                sx={{
                  position: "absolute",
                  top: "30px",
                  left: "30px",
                  fontSize: "2rem",
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "50%",
                  color: "#6e4a33",
                }}
                onClick={handleClose}
              />
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
            </Box>
            <Box sx={{ margin: "0 20px" }}>
              <Typography variant="h5" marginBottom={"10px"}>
                {product.name}
              </Typography>
              <Typography variant="h6">Product Details</Typography>
              <Box sx={{ display: "flex", margin: "10px 0" }}>
                <Typography variant="body1" sx={{ marginTop: "8px", textAlign: "justify" }}>
                  {showFullDescription ? product.description : `${shortDescription}...`}
                </Typography>
                <Button
                  onClick={toggleDescription}
                  sx={{ marginTop: "8px", padding: "0", textTransform: "none", color: "#6e4a33" }}
                  size="small"
                >
                  {showFullDescription ? "Ver menos" : "Ver más"}
                </Button>
              </Box>
              <Typography variant="h6">Select Size</Typography>
              <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
                {product.size.map((size) => (
                  <Box
                    key={size}
                    sx={{
                      width: 40,
                      height: 40,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '5px',
                      fontWeight: 'bold',
                      fontSize: 16,
                      cursor: 'pointer',
                      backgroundColor: selectedSize === size ? '#6e4a33' : 'grey.100',
                      color: selectedSize === size ? 'white' : 'black',
                      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Box>
                ))}
              </Box>
              <Box sx={{ margin: "20px 0" }}>
                <Typography variant="h6" gutterBottom>
                  Select Color
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
                  {['#faedcd', '#dda15e', '#ffddd2'].map((color) => (
                    <Box
                      key={color}
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: color,
                        cursor: 'pointer',
                        border: '2px solid transparent',
                        transition: 'border 0.3s ease',
                        '&:hover': {
                          border: '2px solid grey',
                        },
                        '&.selected': {
                          border: '2px solid black',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", margin: "20px 0" }}>
                <Box>
                  <Typography>Total Price</Typography>
                  <Typography variant="h6">$ {product.price}</Typography>
                </Box>
                <Button
                  sx={{
                    width: "50%",
                    backgroundColor: "#6e4a33",
                    color: "white",
                    borderRadius: "50px",
                  }}
                  onClick={handleAddToCart}
                >
                  Add to Cart
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



