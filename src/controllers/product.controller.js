import productModel from "../models/product.model.js";

export const getproducts = async (req, res) => {
  const products = await productModel.find();
  res.json(products);
};

export const createProduct = async (req, res) => {
  const { name, size, price, description, image, category } = req.body;

  const newProduct = new productModel({
    name,
    size,
    price,
    description,
    image,
    category,
  });
  const savedProduct = await newProduct.save();
  res.json(savedProduct);
};

export const getProduct = async (req, res) => {
  const product = await productModel.findById(req.params.id);
  if (!product) return res.status(400).json({ message: "Product Not Found" });
  res.json(product);
};

export const updateProduct = async (req, res) => {
  const product = await productModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  if (!product) return res.status(400).json({ message: "Product Not Found" });
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  const product = await productModel.findByIdAndDelete(req.params.id);
  if (!product) return res.status(400).json({ message: "Product Not Found" });
  return res.sendStatus(204);
};
