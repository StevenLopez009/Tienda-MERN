import path from "path";
import { fileURLToPath } from "url";
import { promises as fs } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getImage = async (req, res) => {
  try {
    const { userId } = req.params;
    const imagePath = path.resolve(__dirname, "../uploads", `${userId}.jpg`);

    // Verifica si la imagen existe
    await fs.access(imagePath);

    // Retorna el path de la imagen
    res.status(200).json({ filePath: `/uploads/${userId}.jpg` });
  } catch (error) {
    console.error(error);
    if (error.code === "ENOENT") {
      res.status(404).json({ message: "Image not found" });
    } else {
      res.status(500).json({ message: "Error fetching image" });
    }
  }
};


