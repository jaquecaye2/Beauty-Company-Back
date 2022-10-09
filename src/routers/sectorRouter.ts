import { Router } from "express";
import { createSector, showSectors } from "../controllers/sectorController";
import validateClient from "../middlewares/validateClient";

import validateCompany from "../middlewares/validateCompany";
import { validateSchema } from "../middlewares/validateSchema";
import sectorSchema from "../schemas/sectorSchema"

const router = Router();

router.post("/sector", validateCompany, validateSchema(sectorSchema), createSector);

router.get("/sector", validateCompany, showSectors);

router.get("/sectors", validateClient, showSectors);

export default router;