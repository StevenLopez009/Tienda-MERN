import { Router } from "express";
import multer from "multer";
import fs from "fs";

const router = Router();
const upload = multer({dest: "src/uploads/"});

router.post("/images", upload.single("imageProfile"), (req, res ) => {
  console.log(req.file)
  saveImage(req.file)
  res.send("Termino")
})

function saveImage(file){
  const newPath= `./src/uploads/${file.originalname}`;
  fs.renameSync(file.path, newPath);
  return newPath;
}

export default router;