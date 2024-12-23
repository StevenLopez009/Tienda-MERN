import { useEffect, useState } from "react"
import {useProducts} from "../context/ProductContext"
import { useAuth } from "../context/AuthContext"
import { Box, Grid, Grid2, TextField, Typography } from "@mui/material";
import { useCart } from '../context/CartContext';
import Carousel from "../components/Carousel";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Target from "../components/Target"
import MenuNav from "../components/MenuNav";
import CountDown from "../components/CountDown";
import FilterCategory from "../components/FilterCategory";
import SelectCategory from "../components/SelectCategory";

function TaskPage(){
  const {getProducts, products} = useProducts()
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
  selectedCategory === "All"
    ? products
    : products.filter((product) =>
        product.categories.some((category) =>
          category.toLowerCase() === selectedCategory.toLowerCase()
        )
      );

  useEffect(() => {
    getProducts();
  }, []);

  return(
    <>
    <Box sx={{ width: "100%", paddingBottom: "100px"}}>
      <Box sx={{ margin: "0 auto", width: "90%" }}>
        <Box
          sx={{
            height: "20vh",
          }}
        >
          <Typography>Location</Typography>
          <Box sx={{ display: "flex" }}>
            <FmdGoodIcon sx={{ color: "#6e4a33" }} />
            <Typography>Bogota, Colombia</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "15px 0",
            }}
          >
            <TextField
              variant="outlined"
              type="search"
              placeholder="Search..."
              sx={{
                width: "85%",
                backgroundColor: "#fff",
                "& input": {
                  padding: "6px 12px",
                  fontSize: "14px",
                },
                "& .MuiOutlinedInput-root": {
                  height: "50px",
                },
              }}
            />
            <Box
              sx={{
                height: "50px",
                width: "50px",
                backgroundColor: "#6e4a33",
                borderRadius: "10px",
              }}
            ></Box>
          </Box>
        </Box>
        <Carousel />
        <SelectCategory 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory}/>
        <Box>
       <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center', 
          padding: '10px 20px', 
          borderRadius: '8px', 
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          Store
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center', 
            gap: '10px', 
          }}
        >
          <CountDown />
        </Box>
    </Box>
    <Box>
      <FilterCategory 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} />
    </Box>
      {products.length === 0 ? (
        <h1>No Products</h1>
      ) : (
        <Box sx={{ padding: "5px" }}>
          <Grid container spacing={2}>
            {filteredProducts.map((product) => (
              <Grid item xs={6} sm={6} key={product._id}>
                <Target product={product} addToCart={addToCart} />
              </Grid>
            ))}
          </Grid>
          <MenuNav/>
        </Box>
      )}
    </Box>
      </Box>
    </Box>
    </>
  )
}

export default TaskPage