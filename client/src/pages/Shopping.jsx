import { Box, Typography, Button } from '@mui/material';
import { useCart } from '../context/CartContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ShoppinPage() {
  const { cartItems } = useCart();
  return (
    <Box sx={{
      margin: "20px 20px"
    }}>
      <Box sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "40px",
        }}>
          <ArrowBackIcon sx={{
            marginRight: "10px", 
          }} />
          <Typography variant='h6' sx={{
            flex: 1, 
            textAlign: "center",
          }}>
            My Cart
          </Typography>
        </Box>
      <Box>
        {cartItems.map((item) => (
          <Box key={item.id}>
            <Box sx={{
              width: "95%",
              height: "25vh", 
              display: "flex",
              alignItems: "center"
            }}>
              <Box sx={{
                width: "30%", 
                height: "100%", 
              }}>
                <img 
                  src={item.image}  
                  style={{
                    width: "100%", 
                    height: "80%", 
                    objectFit: "cover", 
                    borderRadius: "15px",
                    margin: "20px 0"
                  }} 
                />
              </Box>
              <Box sx={{
                margin: "0 20px "
              }}>
                <Typography>{item.name}</Typography>
                <Typography>${item.price}</Typography>
              </Box>
              <Box sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "auto"
              }}>
                <Button 
                  sx={{ minWidth: "30px", padding: "5px", margin: "0 5px", backgroundColor:"#dee2e6", color: "black", fontWeight: "800" }}
                >
                  -
                </Button>
                <Typography sx={{ minWidth: "30px", textAlign: "center" }}>0</Typography>
                <Button 
                  sx={{ minWidth: "30px", padding: "5px", margin: "0 5px" ,backgroundColor:"#6e4a33", color: "white", fontWeight: "800"}}
                >
                  +
                </Button>
              </Box>
            </Box>
            <hr style={{
              border: "none",
              borderTop: "1px solid #ccc",
              margin: "5px 0"
            }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ShoppinPage;


