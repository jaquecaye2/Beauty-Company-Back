import { Router } from "express";
import { createSector, showSectors } from "../../controllers/company/sectorController";

import validateCompany from "../../middlewares/validateCompany";
import { validateSchema } from "../../middlewares/validateSchema";
import sectorSchema from "../../schemas/sectorSchema"

const router = Router();

router.post("/sector", validateCompany, validateSchema(sectorSchema), createSector);

router.get("/sector", validateCompany, showSectors);

export default router;