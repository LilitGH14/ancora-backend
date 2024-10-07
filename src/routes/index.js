import { Router } from "express";
import userRoutes from "./user.js";
import paymentRoutes from "./payments.js";
import productRoutes from "./products.js";
import ROUTES from "../config/routes.js";

const router = Router();

router.use(ROUTES.PRODUCTS[0], productRoutes);
router.use(ROUTES.PAYMENTS[0], paymentRoutes);
router.use(ROUTES.AUTH[0], userRoutes);

export default router;
