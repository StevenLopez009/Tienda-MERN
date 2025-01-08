import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../service/Auth.service.jsx";
import { createImageRequest, getImageRequest } from "../../service/api/image.js";

const ProfilePage = () => {
  const { logout, user } = useAuth();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (user?.id) {
      getImageRequest(user.id)
        .then((response) => {
          setImageUrl(response.filePath);
          console.log(imageUrl)
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
        setImageUrl(`/uploads/${fileInput.files[0].name}`);
        console.log("Image uploaded successfully");
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.error("No file selected");
    }
  };

  return (
    <div>
      <h1>Upload an Image</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="imageProfile">Choose an image:</label>
        <input
          type="file"
          id="imageProfile"
          name="imageProfile"
          accept="image/*"
        />
        <button type="submit">Upload</button>
      </form>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="User profile"
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        />
      ) : (
        <p>No image available</p>
      )}

      <Link to="/client/public" onClick={() => logout()}>
        Logout
      </Link>
    </div>
  );
};

export default ProfilePage;
