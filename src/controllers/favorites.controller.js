import mongoose from "mongoose";
import Favorite from "../models/favorite.model.js";
import ProductModel from "../models/product.model.js";

export const createFavorite = async (req, res) => {
  try {
    const { userId, productIds } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }
    const productIdsObjectId = productIds.map(
      (productId) => new mongoose.Types.ObjectId(productId)
    );
    const newFavorite = new Favorite({
      user: userId,
      products: productIdsObjectId,
    });
    await newFavorite.save();
    res.status(201).json({ message: "Favorite created successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating favorite" });
  }
};

export const getFavorites = async (req, res) => {
  try {
    const { userId } = req.params;

    const userIdObjectId = new mongoose.Types.ObjectId(userId);

    const favorite = await Favorite.findOne({ user: userIdObjectId });

    if (!favorite) {
      return res
        .status(404)
        .json({ message: "Favorites not found for this user" });
    }

    const productIds = favorite.products;

    const products = await ProductModel.find({ _id: { $in: productIds } });

    if (!products.length) {
      return res.status(404).json({ message: "No products found" });
    }

    res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching favorites" });
  }
};
