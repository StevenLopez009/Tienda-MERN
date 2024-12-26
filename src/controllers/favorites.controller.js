import mongoose from "mongoose";
import Favorite from "../models/favorite.model.js";

export const createFavorite = async (req, res) => {
  try {
    const { userId, productIds } = req.body;

    const userIdObjectId = new mongoose.Types.ObjectId(userId);
    const productIdsObjectId = productIds.map(
      (productId) => new mongoose.Types.ObjectId(productId)
    );

    const newFavorite = new Favorite({
      user: userIdObjectId,
      products: productIdsObjectId,
    });

    await newFavorite.save();
    res.status(201).json({ message: "Favorite created successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating favorite" });
  }
};
