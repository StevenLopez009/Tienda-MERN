import { Box, Grid } from "@mui/material";
import MenuNav from "../components/MenuNav"
import { useCart } from "../context/CartContext";
import Target from "../components/Target";

function FavoritePage (){
  const { favItems,addToCart, addToFav } = useCart();
  return(
    <>
      <Box>
      {favItems.map((product) => (
        <Grid item xs={6} sm={6} key={product._id}>
          <Target product={product} addToCart={addToCart} addToFav={addToFav}/>
        </Grid>
        ))}
      </Box>
      <MenuNav/>
    </>
    
  )
}

export default FavoritePage