import { Router } from "express";
import { Product } from "../../models/product.model.js";

export const router = Router();

// GET all products with filtering (type and search)
router.get("/", async (req, res, next) => {
  try {
    const { search, type } = req.query;
    
    // Build query object
    const query = {};
    
    // Filter by type (tag) if provided
    if (type) {
      query.tag = type;
    }
    
    // Search by name if provided
    if (search) {
      query.name = { $regex: search, $options: "i" }; // Case-insensitive search
    }

    const products = await Product.find(query);
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
});

// GET single product by ID
router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});
