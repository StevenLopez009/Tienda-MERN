import axios from "./axios.js";

export const createImageRequest = async (formData, userId) => {
  formData.append("userId", userId);
  return axios.post("/images", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getImageRequest = async (userId) => {
  return axios.get(`/images/${userId}`);
}
