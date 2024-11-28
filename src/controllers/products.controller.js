import ProductModel from "../models/product.model.js";

export const getProducts = async (req, res) => {
  const products = await ProductModel.find();
  res.json(products);
};

export const getProduct = async (req, res) => {
  const product = await ProductModel.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

export const createProduct = async (req, res) => {
  const { name, price, image, description, size, stock } = req.body;
  const newProduct = new ProductModel({
    name,
    price,
    image,
    description,
    size,
    stock,
  });
  const savedProduct = await newProduct.save();
  res.json(savedProduct);
};
