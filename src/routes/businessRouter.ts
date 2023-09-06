import { Router } from "express";

import {
  createBusiness,
  getAllBusinesses,
  updateBusiness,
  deleteBusiness,
} from "../controllers/businessController.js";

const router = Router();

router.route("/").get(getAllBusinesses).post(createBusiness);
router.route("/:id").patch(updateBusiness).delete(deleteBusiness);

export default router;
