import { Router } from "express";
import { createService, showAllServices, showServices } from "../controllers/serviceController";
import validateClient from "../middlewares/validateClient";

import validateCompany from "../middlewares/validateCompany";
import { validateSchema } from "../middlewares/validateSchema";
import serviceSchema from "../schemas/serviceSchema";

const router = Router();

router.post("/service", validateCompany, validateSchema(serviceSchema), createService);

router.get("/services", validateCompany, showAllServices);

router.get("/service/:idsector", validateCompany, showServices);

router.get("/services/:idsector", validateClient, showServices);

export default router;