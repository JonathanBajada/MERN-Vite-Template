import { Router } from "express";

import {
  createBusiness,
  getAllBusinesses,
  updateBusiness,
} from "../controllers/businessController.js";

const router = Router();

router.route("/").get(getAllBusinesses).post(createBusiness);
router.route("/:id").patch(updateBusiness);

export default router;
