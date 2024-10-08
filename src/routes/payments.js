import { Router } from "express";
import {
  getSales,
  payViaPaypal,
  payViaStripe,
} from "../controllers/paymentsController.js";
import ROUTES from "../config/routes.js";

const router = Router();

router.get(ROUTES.PAYMENTS[1].PAYPAL, payViaPaypal);
router.get(ROUTES.PAYMENTS[1].STRIPE, payViaStripe);
router.get(ROUTES.PAYMENTS[1].GET_SALES, getSales);

export default router;
