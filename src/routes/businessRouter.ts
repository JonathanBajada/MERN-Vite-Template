import { Router } from "express";

import { createBusiness } from "../controllers/businessController.js";

const router = Router();

router.route("/").post(createBusiness);

export default router;
