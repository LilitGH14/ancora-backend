import { Router } from "express";
import {
  payViaPaypal,
  payViaStripe,
} from "../controllers/productController.js";
import ROUTES from "../config/routes.js";

const router = Router();

router.get(ROUTES.PAYMENTS[1].PAYPAL, payViaPaypal);
router.get(ROUTES.PAYMENTS[1].STRIPE, payViaStripe);

export default router;
