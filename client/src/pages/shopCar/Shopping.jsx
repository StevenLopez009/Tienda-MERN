import { Box, Button, Typography } from '@mui/material';
import { useCart } from '../../service/Cart.service.jsx';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import CartItemCard from '../../components/CartItemCard.jsx';
import { useState } from 'react';
import axios from 'axios';


function ShoppinPage() {
  const { cartItems } = useCart();
  const [grandTotal, setGrandTotal] = useState(0);
  const [quantities, setQuantities] = useState({}); // Mantén las cantidades seleccionadas.

  const handleTotalChange = (amount) => {
    setGrandTotal((prevTotal) => prevTotal + amount);
  };

  const handleQuantityChange = (id, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantity,
    }));
  };

  const handlePurchase = async () => {
    try {
      console.log("Estado de quantities:", quantities)
      // Aseguramos de usar _id en lugar de id
      const purchaseData = cartItems.map((item) => {
        console.log("Procesando producto:", item); // Verifica que item tenga el formato esperado
        return {
          id: String(item._id), // Usar _id en lugar de id
          quantity: quantities[item._id] || 0, // Asegúrate de usar _id aquí también
        };
      }).filter((item) => item.quantity > 0);
  
      console.log("Productos para la compra:", purchaseData);
  
      // Realiza la solicitud a la API
      const response = await axios.post('http://localhost:3000/api/products/update-stock', purchaseData);
  
      // Muestra el mensaje de respuesta
      alert(response.data.message);
    } catch (error) {
      console.error("Detalles del error:", error);
      console.error("Respuesta del error:", error.response?.data);
      alert(error.response?.data?.message || "Error updating stock");
    }
  };
  

  return (
    <Box sx={{ margin: "20px 20px" }}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "40px" }}>
        <Link to="/tasks" style={{ textDecoration: "none", color: "inherit" }}>
          <ArrowBackIcon sx={{ marginRight: "10px", cursor: "pointer" }} />
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
          onClick={handlePurchase}
        >
          Comprar
        </Button>
      </Box>
    </Box>
  );
}

export default ShoppinPage;



