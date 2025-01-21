import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../service/Auth.service.jsx";
import { createImageRequest, getImageRequest } from "../../service/api/image.js";
import { Box, Button, Typography } from "@mui/material";
import portada from "../../assets/portada.jpg";
import MenuNav from "../../components/MenuNav.jsx";
import defaultImg from "../../assets/defaultimageperfil.webp";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CreditCardIcon from '@mui/icons-material/CreditCard';

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
      <Box
        sx={{
          maxHeight: "180px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={portada}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          padding: "10px",
          margin: "0px 5px",
        }}
      >
        {imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt="User profile"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "contain",
                borderRadius: "50%",
              }}
            />
            <Typography marginTop="20px" variant="h5" align="left">
              {user.username}
            </Typography>
            <Typography sx={{
              textAlign: "justify",
              margin: "20px 0px",
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <hr />
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                width: "90%",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  width: "100%",
                  height: "50px",
                }}
                component={Link}
                to="/payment"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <CreditCardIcon fontSize="small" color="primary" />
                <Typography
                  style={{
                    fontWeight: 500,
                  }}
                >
                  Payment Methods
                </Typography>
              </Box>
              <ArrowForwardIosIcon fontSize="small" color="action" />
            </Box>
            <hr />
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                width: "90%",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  width: "100%",
                  height: "50px",
                }}
                component={Link}
                to="/client/public"
                onClick={() => logout()}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: 500,
                }}
              >
                <LogoutIcon fontSize="small" color="primary" />
                <Typography
                  style={{
                    fontWeight: 500,
                  }}
                >
                  Log Out
                </Typography>
              </Box>
              <ArrowForwardIosIcon fontSize="small" color="action" />
            </Box>
          </>
        ) : (
          <img
            src={defaultImg}
            alt="User profile"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "contain",
              borderRadius: "50%",
            }}
          />
        )}
      </Box>

      <Box sx={{
        position: "absolute",
        top: "60%",
        left: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: "80px",
      }}>
        <form onSubmit={handleSubmit}>
          <Button
            variant="contained"
            component="label"
            startIcon={<AddIcon />}
            sx={{
              backgroundColor: "#6e4a33",
              color: "#fff",
              margin: "10px",
              height: "40px",
              textAlign: "center"
            }}
          >
            <input
              type="file"
              id="imageProfile"
              name="imageProfile"
              accept="image/*"
              hidden
            />
          </Button>
          <Button type="submit" sx={{
            backgroundColor: "#6e4a33",
            color: "#fff",
          }}>Subir</Button>
        </form>
        <MenuNav />
      </Box >
    </Box>

  );
};

export default ProfilePage;
