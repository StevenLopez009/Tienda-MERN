import { Box } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

function MenuNav() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "90%",
        height: "10vh",
        backgroundColor: "#1c1c1c",
        borderRadius: "50px",
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
      }}
    >
      <Link to="/tasks" style={{ textDecoration: 'none' }}>
        <HomeIcon sx={{ color: "#fff", fontSize: "2rem", '&:hover': { color: '#6e4a33' } }} />
      </Link>
      
      <Link to="/shopping" style={{ textDecoration: 'none' }}>
        <ShoppingBagIcon sx={{ color: "#fff", fontSize: "2rem", '&:hover': { color: '#6e4a33' } }} />
      </Link>
      
      <Link to="/favorite" style={{ textDecoration: 'none' }}>
        <FavoriteBorderIcon sx={{ color: "#fff", fontSize: "2rem", '&:hover': { color: '#6e4a33' } }} />
      </Link>
      
      <Link to="/tasks" style={{ textDecoration: 'none' }}>
        <ChatIcon sx={{ color: "#fff", fontSize: "2rem", '&:hover': { color: '#6e4a33' } }} />
      </Link>
      
      <Link to="/profile" style={{ textDecoration: 'none' }}>
        <AccountCircleIcon sx={{ color: "#fff", fontSize: "2rem", '&:hover': { color: '#6e4a33' } }} />
      </Link>
    </Box>
  );
}

export default MenuNav;


