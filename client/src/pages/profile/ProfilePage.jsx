import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../service/Auth.service.jsx";
import { createImageRequest, getImageRequest } from "../../service/api/image.js";
import { Box, Typography } from "@mui/material";
import portada from "../../assets/portada.jpg";
import { set } from "mongoose";
import MenuNav from "../../components/MenuNav.jsx";

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
    <Box sx={{
      position: "relative",
    }}>
      <Box sx={{
        maxHeight: "180px",
        width: "100%",
        overflow: "hidden",
      }}>
        <img src={portada} alt="" />
      </Box>
      <Box >
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            id="imageProfile"
            name="imageProfile"
            accept="image/*"
          />
          <button type="submit">Upload</button>
        </form>
      </Box>
      <Box sx={{
        position: "absolute",
        top: "50%",
      }}>
        {imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt="User profile"
              style={{ width: "150px", height: "150px", objectFit: "contain", borderRadius: "50%" }}
            />
            <Typography marginTop="20px" variant="h5" align="center">{user.username}</Typography>
          </>

        ) : (
          <p>No image available</p>
        )}
      </Box>
      <Box sx={{
        paddingTop: "200px",
      }}>
        <Link to="/client/public" onClick={() => logout()} >
          Logout
        </Link>
      </Box>
      <MenuNav />
    </Box >
  );
};

export default ProfilePage;
