import { Box, Button, Typography } from '@mui/material';
import { useCart } from '../../service/Cart.service.jsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import CartItemCard from '../../components/CartItemCard.jsx';
import { useState } from 'react';

function ShoppinPage() {
  const { cartItems } = useCart();
  const [grandTotal, setGrandTotal] = useState(0);
  const [quantities, setQuantities] = useState({});

  const handleTotalChange = (amount) => {
    setGrandTotal((prevTotal) => prevTotal + amount);
  };

  const handleQuantityChange = (id, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantity,
    }));
  };


  return (
    <Box sx={{ margin: "20px 20px" }}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "40px" }}>
        <Link to="/tasks" style={{ textDecoration: "none", color: "inherit" }}>
          <ArrowBackIcon sx={{ marginRight: "10px" }} />
        </Link>
        <Typography
          variant="h6"
          sx={{
            flex: 1,
            textAlign: "center",
          }}
        >
          My Cart
        </Typography>
      </Box>
      <Box>
        {cartItems.map((item) => (
          <CartItemCard
            key={item._id}
            item={item}
            onTotalChange={handleTotalChange}
            onQuantityChange={handleQuantityChange}
          />
        ))}
        <Typography>Total General: ${grandTotal.toFixed(2)}</Typography>
        <Button
          sx={{
            padding: "20px",
            margin: "0 5px",
            backgroundColor: "#6e4a33",
            color: "white",
            fontWeight: "800",
            borderRadius: "50px",
          }}
        >
          Comprar
        </Button>
      </Box>
    </Box>
  );
}

export default ShoppinPage;



