import { Router } from "express";
import {
  createFavorite,
  getFavorites,
} from "../controllers/favorites.controller.js";

const router = Router();

router.post("/favorites", createFavorite);
router.get("/favorites/:userId", getFavorites);

export default router;
