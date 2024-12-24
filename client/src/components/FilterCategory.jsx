import { Box, Button } from "@mui/material";

function FilterCategory({ selectedCategory, onCategoryChange }) {
  const buttonStyle = (isActive) => ({
    borderRadius: "40px",
    color: isActive ? "white" : "black",
    backgroundColor: isActive ? "#704f38" : "transparent",
    border: "1px solid black",
    minHeight: "40px",
    minWidth: "70px",
    padding: "10px",
    fontSize: ".8rem",
    "&:hover": {
      backgroundColor: isActive ? "#704f38" : "#f5f5f5",
    },
  });

  const categories = ["All", "Newest", "Popular", "Man", "Woman"];

  return (
    <Box sx={{ display: "flex", gap: "8px", marginTop: "20px", overflow: "hidden" }}>
      {categories.map((category) => (
        <Button
          key={category}
          sx={buttonStyle(selectedCategory === category)}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Button>
      ))}
    </Box>
  );
}

export default FilterCategory




