import { Router } from "express";
import ROUTES from "../config/routes.js";
import { getMetaDatas, updateMeta } from "../controllers/generalController.js";

const router = Router();

router.get(ROUTES.GENERAL[1].GET_METAS, getMetaDatas);
router.post(ROUTES.GENERAL[1].UPDATE_META, updateMeta);

export default router;
