import { Box, Grid, Typography } from "@mui/material";
import MenuNav from "../../components/MenuNav.jsx"
import { useCart } from "../../service/Cart.service.jsx";
import Target from "../../components/Target.jsx";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { useProducts } from "../../service/Product.service.jsx";
import { useAuth } from "../../service/Auth.service.jsx";
import { useEffect } from "react";

function FavoritePage (){
  const { getFavorites, deleteFavorite,createFavorite} = useProducts()
  const { user } = useAuth(); 
  const { favItems,setFavItems, addToCart,  } = useCart();

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
              <Target product={product} addToCart={addToCart} createFavorite={createFavorite} deleteFavorite={deleteFavorite}/>
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