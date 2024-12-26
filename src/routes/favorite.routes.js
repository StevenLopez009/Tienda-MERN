import { Router } from "express";
import { createFavorite } from "../controllers/favorites.controller.js";

const router = Router();

router.post("/favorites", createFavorite);

export default router;
