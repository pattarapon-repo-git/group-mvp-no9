import { Router } from "express";
import { User } from "../../models/user.model.js";

export const router = Router();

// POST: Add product to cart
router.post("/", async (req, res, next) => {
  try {
    const { userId, product_id, product_quantity, product_price } = req.body;
    
    if (!userId) return res.status(400).json({ message: "userId is required" });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if product already exists in cart
    const existingItemIndex = user.cart.findIndex(
      (item) => item.product_id.toString() === product_id
    );

    if (existingItemIndex > -1) {
      // Update quantity if exists
      user.cart[existingItemIndex].product_quantity += product_quantity;
    } else {
      // Add new item
      user.cart.push({ product_id, product_quantity, product_price });
    }

    await user.save();
    return res.status(200).json(user.cart);
  } catch (error) {
    next(error);
  }
});

// PUT: Update product quantity in cart
router.put("/:productId", async (req, res, next) => {
  try {
    const { userId, product_quantity } = req.body;
    const { productId } = req.params;

    if (!userId) return res.status(400).json({ message: "userId is required" });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const item = user.cart.find((item) => item.product_id.toString() === productId);
    if (!item) return res.status(404).json({ message: "Product not found in cart" });

    item.product_quantity = product_quantity;
    await user.save();

    return res.status(200).json(user.cart);
  } catch (error) {
    next(error);
  }
});

// DELETE: Remove product from cart
router.delete("/:productId", async (req, res, next) => {
  try {
    const { userId } = req.body; // In a real app, use req.user.id or query params
    const { productId } = req.params;

    if (!userId) return res.status(400).json({ message: "userId is required" });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.cart = user.cart.filter((item) => item.product_id.toString() !== productId);
    await user.save();

    return res.status(200).json(user.cart);
  } catch (error) {
    next(error);
  }
});
