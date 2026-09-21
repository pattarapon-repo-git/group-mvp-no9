import { Router } from "express";
import { Product } from "../../models/product.model.js";
import { protect, admin } from "../../middlewares/auth.middleware.js";

export const router = Router();

// Protect all admin routes
router.use(protect, admin);

// POST create new product
router.post("/", async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    return res.status(201).json(savedProduct);
  } catch (error) {
    next(error);
  }
});

// PUT update product
router.put("/:id", async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
    return res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
});

// DELETE product
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
});
