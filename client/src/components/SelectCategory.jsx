import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import shirtIcon from "../assets/shirt.png";
import pantsIcon from "../assets/pants.png";
import dressIcon from "../assets/dress.png";
import jacketIcon from "../assets/jacket.png";

const categories = [
  { label: "SHIRT", icon: shirtIcon },
  { label: "PANTS", icon: pantsIcon },
  { label: "DRESS", icon: dressIcon },
  { label: "JACKET", icon: jacketIcon },
];

const iconContainerStyle = (isActive) => ({
  backgroundColor: isActive ? "white" : "#e3d5ca",
  borderRadius: "50px",
  width: "60px",
  height: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  transition: "background-color 0.3s",
});

const SelectCategory = ({ selectedCategory, onCategoryChange }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "1.2rem" }}>Category</Typography>
        <Typography>See All</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          margin: "20px 0",
        }}
      >
        {categories.map((category) => (
          <Box key={category.label} onClick={() => onCategoryChange(category.label)}>
            <Box sx={iconContainerStyle(selectedCategory === category.label)}>
              <img
                src={category.icon}
                alt={category.label}
                style={{ width: "40px", height: "40px" }}
              />
            </Box>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "0.8rem",
                color: selectedCategory === category.label ? "#704f38" : "black",
              }}
            >
              {category.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default SelectCategory;


