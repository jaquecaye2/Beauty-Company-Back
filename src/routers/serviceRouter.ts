import { Router } from "express";
import { createService, showServices } from "../controllers/serviceController";

import validateCompany from "../middlewares/validateCompany";
import { validateSchema } from "../middlewares/validateSchema";
import serviceSchema from "../schemas/serviceSchema";

const router = Router();

router.post("/service", validateCompany, validateSchema(serviceSchema), createService);

router.get("/service", validateCompany, showServices);

export default router;