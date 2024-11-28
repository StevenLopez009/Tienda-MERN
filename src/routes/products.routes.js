import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getProducts,
  getProduct,
  createProduct,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", createProduct);

export default router;
