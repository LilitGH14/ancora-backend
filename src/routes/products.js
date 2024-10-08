import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";
import ROUTES from "../config/routes.js";

const router = Router();

router.get(ROUTES.PRODUCTS[1].GET_PRODUCTS, getProducts);
router.post(ROUTES.PRODUCTS[1].ADD_PRODUCT, addProduct);
router.post(ROUTES.PRODUCTS[1].DELETE_PRODUCT, deleteProduct);
router.post(ROUTES.PRODUCTS[1].UPDATE_PRODUCT, updateProduct);

export default router;
