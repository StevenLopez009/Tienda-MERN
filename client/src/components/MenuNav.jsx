import { Box } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NavItem = ({ icon: Icon, isSelected, onClick }) => (
  <Box
    sx={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}
    onClick={onClick}
  >
    {isSelected && (
      <Box
        sx={{
          position: "absolute",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "white",
          top: "-10px",
          right: "-10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon sx={{ color: "#1c1c1c", fontSize: "2rem" }} />
      </Box>
    )}
    <Icon sx={{ color: "#fff", fontSize: "2rem", '&:hover': { color: '#6e4a33' } }} />
  </Box>
);

function MenuNav() {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setSelected(path);
    navigate(path);
  };

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
      <NavItem
        icon={HomeIcon}
        isSelected={selected === "/tasks"}
        onClick={() => handleNavigation("/tasks")}
      />
      <NavItem
        icon={ShoppingBagIcon}
        isSelected={selected === "/shopping"}
        onClick={() => handleNavigation("/shopping")}
      />
      <NavItem
        icon={FavoriteBorderIcon}
        isSelected={selected === "/favorite"}
        onClick={() => handleNavigation("/favorite")}
      />
      <NavItem
        icon={ChatIcon}
        isSelected={selected === "/chat"}
        onClick={() => handleNavigation("/chat")}
      />
      <NavItem
        icon={AccountCircleIcon}
        isSelected={selected === "/profile"}
        onClick={() => handleNavigation("/profile")}
      />
    </Box>
  );
}

export default MenuNav;
