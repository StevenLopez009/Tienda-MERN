import { Box, Grid, Typography } from "@mui/material";
import MenuNav from "../components/MenuNav"
import { useCart } from "../context/CartContext";
import Target from "../components/Target";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

function FavoritePage (){
  const { getFavorites} = useProducts()
  const { user } = useAuth(); 
  const { favItems,setFavItems, addToCart, addToFav } = useCart();

  useEffect(() => {
    if (user) {
      const fetchFavorites = async () => {
        const userFavorites  = await getFavorites(user.id); 
        setFavItems(userFavorites)
        console.log(favItems)
      };
      fetchFavorites();
    }
  }, [user, getFavorites]); 


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
        {favItems.products && favItems.products.length > 0 ? (
          favItems.products.map((product) => (
            <Grid item xs={6} sm={6} key={product._id}>
              <Target product={product} addToCart={addToCart} addToFav={addToFav} />
            </Grid>
          ))
        ) : (
          <Typography variant="body1" sx={{ textAlign: "center", margin: "20px auto" }}>
            No products in your wishlist yet!
          </Typography>
        )}
      </Grid>
      </Box>
      </Box>
      <MenuNav/>
    </Box>
    </>
    
  )
}

export default FavoritePage