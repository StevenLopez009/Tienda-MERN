import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getproducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/products", authRequired, getproducts);
router.get("/products/:id", authRequired, getProduct);
router.post("/products", authRequired, createProduct);
router.put("/products/:id", authRequired, updateProduct);
router.delete("/products/:id", authRequired, deleteProduct);

export default router;
