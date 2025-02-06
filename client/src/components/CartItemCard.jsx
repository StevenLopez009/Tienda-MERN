import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useCart } from "../service/Cart.service.jsx";
import DeleteIcon from "@mui/icons-material/Delete";
import { useProducts } from "../service/Product.service";

function CartItemCard({ item, onTotalChange, onQuantityChange }) {
  const { products } = useProducts();
  const [counter, setCounter] = useState(0);
  const [isSwiped, setIsSwiped] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const { removeFromCart } = useCart();

  const incrementar = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    onTotalChange(item.price);
    onQuantityChange(item._id, newCounter);
  };

  const decrementar = () => {
    if (counter > 0) {
      const newCounter = counter - 1;
      setCounter(newCounter);
      onTotalChange(-item.price);
      onQuantityChange(item._id, newCounter);
    }
  };

  const total = counter * item.price;

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      const swipeDistance = touchStartX - touchEndX;

      if (Math.abs(swipeDistance) > 50) {
        setIsSwiped(swipeDistance > 0);
      }
    }
    setTouchStartX(null);
  };

  return (
    <Box
      key={item.id}
      sx={{
        position: "relative",
        width: "100%",
        height: "35vh",
        marginBottom: 2,
        transition: "transform 0.3s ease",
        transform: isSwiped ? "translateX(-100px)" : "translateX(0)",
        backgroundColor: "white",
        borderRadius: "8px",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            width: "30%",
            height: "100%"
          }}
        >
          <img
            src={item.image}
            style={{
              width: "100px",
              height: "180px",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
        </Box>
        <Box sx={{ margin: "0 20px" }}>
          <Typography>{item.name}</Typography>
          <Typography>${item.price}</Typography>
          <Typography>Size: {item.selectedSize}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
          }}
        >
          <Button
            sx={{
              minWidth: "30px",
              padding: "5px",
              margin: "0 5px",
              backgroundColor: "#dee2e6",
              color: "black",
              fontWeight: "800",
            }}
            onClick={decrementar}
          >
            -
          </Button>
          <Typography sx={{ minWidth: "30px", textAlign: "center" }}>
            {counter}
          </Typography>
          <Button
            sx={{
              minWidth: "30px",
              padding: "5px",
              margin: "0 5px",
              backgroundColor: "#6e4a33",
              color: "white",
              fontWeight: "800",
            }}
            onClick={incrementar}
          >
            +
          </Button>
        </Box>
        {isSwiped && (
          <DeleteIcon
            sx={{
              position: "absolute",
              right: "-80px",
              top: "80px",
              cursor: "pointer",
              fontSize: "2.5rem",
            }}
            onClick={() => removeFromCart(item._id)}
          />
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "10px",
        }}
      >
        <Typography sx={{ fontSize: "18px" }}>subtotal: ${total.toFixed(2)}</Typography>
      </Box>
    </Box>
  );
}

export default CartItemCard;



