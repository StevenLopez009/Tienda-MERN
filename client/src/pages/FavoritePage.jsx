import { Box, Grid, Typography } from "@mui/material";
import MenuNav from "../components/MenuNav"
import { useCart } from "../context/CartContext";
import Target from "../components/Target";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

function FavoritePage (){
  const { favItems,addToCart, addToFav } = useCart();
  return(
    <>
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
          My Wishlist
        </Typography>
      </Box>
      <Box>
      <Box sx={{padding: "5px"}} >
        <Grid container spacing={2}>
          {favItems.map((product) => (
            <Grid item xs={6} sm={6} key={product._id}>
              <Target product={product} addToCart={addToCart} addToFav={addToFav}/>
            </Grid>
          ))}
        </Grid>
      </Box>
      </Box>
      <MenuNav/>
    </Box>
    </>
    
  )
}

export default FavoritePage