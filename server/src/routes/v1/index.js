import { Router } from "express";
import { router as productsRoutes } from "./products.routes.js";
import { router as adminProductsRoutes } from "./admin.products.routes.js";
import { router as cartRoutes } from "./cart.routes.js";
import { router as authRoutes } from "./auth.routes.js";

export const router = Router();
router.use("/products", productsRoutes);
router.use("/admin/products", adminProductsRoutes);
router.use("/cart", cartRoutes);
router.use("/auth", authRoutes);
