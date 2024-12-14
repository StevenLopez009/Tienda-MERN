import { useEffect, useState } from "react"
import { useTasks } from "../context/TaskContext"
import {useProducts} from "../context/ProductContext"
import { useAuth } from "../context/AuthContext"
import { Box, Grid, Grid2, TextField, Typography } from "@mui/material";
import { useCart } from '../context/CartContext';
import Carousel from "../components/Carousel";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import shirtIcon from "../assets/shirt.png"
import pantsIcon from "../assets/pants.png" 
import dressIcon from "../assets/dress.png"
import jacketIcon from "../assets/jacket.png"
import Target from "../components/Target"
import MenuNav from "../components/MenuNav";
import CountDown from "../components/CountDown";

function TaskPage(){
  const {getTasks, tasks}= useTasks()
  const {getProducts, products} = useProducts()
  const { logout}= useAuth()
  const { addToCart } = useCart();

  useEffect(()=>{
    getProducts()
  },[])

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",           
          }}
        >
          <Typography sx={{fontSize: "1.2rem" }}>Category</Typography>
          <Typography>See All</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            margin: "20px 0",
          }}
        >
          <Box>
            <Box
              sx={{
                backgroundColor: "#e3d5ca",
                borderRadius: "50px",
                width: "60px",
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center", 
              }}
            >
              <img
                src={shirtIcon}
                alt=""
                style={{
                  width: "40px", 
                  height: "40px", 
                }}
              />
            </Box>
            <Typography sx={{ textAlign: "center", fontSize: "0.8rem" }}>
              SHIRT
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                backgroundColor: "#e3d5ca",
                borderRadius: "50px",
                width: "60px",
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center", 
              }}
            >
               <img
                src={pantsIcon}
                alt=""
                style={{
                  width: "40px", 
                  height: "40px", 
                }}
              />
            </Box>
            <Typography sx={{ textAlign: "center", fontSize: "0.8rem" }}>
              PANTS
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                backgroundColor: "#e3d5ca",
                borderRadius: "50px",
                width: "60px",
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center", 
              }}
            >
               <img
                src={dressIcon}
                alt=""
                style={{
                  width: "40px", 
                  height: "40px", 
                }}
              />
            </Box>
            <Typography sx={{ textAlign: "center", fontSize: "0.8rem" }}>
              DRESS
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                backgroundColor: "#e3d5ca",
                borderRadius: "50px",
                width: "60px",
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center", 
              }}
            >
               <img
                src={jacketIcon}
                alt=""
                style={{
                  width: "40px", 
                  height: "40px", 
                }}
              />
            </Box>
            <Typography sx={{ textAlign: "center", fontSize: "0.8rem" }}>
              JACKET
            </Typography>
          </Box>
        </Box>
        <Box>
       {/* <Link to="/" onClick={() => { logout() }}>Logout</Link> */}
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
          <Typography
            sx={{
              margin: '0',
              fontSize: '16px',
              color: '#555',
            }}
          >
            Closing in
          </Typography>
          <CountDown />
        </Box>
    </Box>
      {products.length === 0 ? (
        <h1>No Products</h1>
      ) : (
        <Box sx={{ padding: "5px" }}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={6} sm={6} key={product._id}>
            <Target product={product} addToCart={addToCart}/>
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