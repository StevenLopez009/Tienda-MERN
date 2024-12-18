import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

function CartItemCard({ item, onTotalChange ,onQuantityChange}) {
  const [counter, setCounter]= useState(0)

  const incrementar = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    onTotalChange(item.price); 
    onQuantityChange(item.id, newCounter);
  };

  const decrementar = () => {
    if (counter > 0) {
      const newCounter = counter - 1;
      setCounter(newCounter);
      onTotalChange(-item.price);
      onQuantityChange(item.id, newCounter); 
    }
  };

  const total = counter * item.price;

  return (
    <Box key={item.id}>
      <Box
        sx={{
          width: "95%",
          height: "25vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "30%",
            height: "100%",
          }}
        >
          <img
            src={item.image}
            style={{
              width: "100px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "15px",
              margin: "20px 0",
            }}
          />
        </Box>
        <Box
          sx={{
            margin: "0 20px ",
          }}
        >
          <Typography>{item.name}</Typography>
          <Typography>${item.price}</Typography>
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
      </Box>
       <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Typography sx={{fontSize:"18px"}}>
          Total: ${total.toFixed(2)}
        </Typography>
      </Box>
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #ccc",
          margin: "5px 0",
        }}
      />
    </Box>
  );
}

export default CartItemCard;
