import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../service/Auth.service.jsx";
import { createImageRequest, getImageRequest } from "../../service/api/image.js";
import { Box, IconButton, Typography } from "@mui/material";
import portada from "../../assets/portada.jpg";
import MenuNav from "../../components/MenuNav.jsx";
import EditIcon from "@mui/icons-material/Edit";

const ProfilePage = () => {
  const { logout, user } = useAuth();
  const [imageUrl, setImageUrl] = useState("");
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    if (user?.id) {
      getImageRequest(user.id)
        .then((response) => {
          const base64Image = `data:image/jpg;base64,${response.data.base64}`;
          setImageUrl(base64Image);
        })
        .catch((error) => {
          console.error("Error fetching image:", error);
        });
    }
  }, [user?.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const fileInput = e.target.imageProfile;

    if (fileInput.files.length > 0) {
      formData.append("imageProfile", fileInput.files[0]);
      try {
        await createImageRequest(formData, user.id);
        const response = await getImageRequest(user.id);
        setImageUrl(response.data.base64);
        setVisible(true);
      } catch (error) {
        console.error("Error uploading or fetching image:", error);
      }
    } else {
      console.error("No file selected");
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      {/* Portada */}
      <Box sx={{ maxHeight: "180px", width: "100%", overflow: "hidden" }}>
        <img src={portada} alt="Portada" />
      </Box>

      {/* Imagen de perfil */}
      <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        {imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt="User profile"
              style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "50%" }}
            />
            <Typography marginTop="20px" variant="h5" align="center">
              {user.username}
            </Typography>
          </>
        ) : (
          <p>No image available</p>
        )}
      </Box>

      {/* Input para cambiar foto */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          backgroundColor: "white",
          borderRadius: "50%",
          boxShadow: 1,
          cursor: "pointer",
        }}
      >
        <input
          type="file"
          id="imageProfile"
          name="imageProfile"
          accept="image/*"
          onChange={(e) => e.target.form.submit()}
          style={{
            opacity: 0,
            position: "absolute",
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        />
        <IconButton
          aria-label="Edit profile picture"
          component="label"
          sx={{ color: "gray", pointerEvents: "none" }}
        >
          <EditIcon />
        </IconButton>
      </Box>

      {/* Logout */}
      <Link to="/client/public" onClick={() => logout()}>
        Logout
      </Link>
      <MenuNav />
    </Box>
  );
};

export default ProfilePage;