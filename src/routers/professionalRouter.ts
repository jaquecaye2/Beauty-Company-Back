import { Router } from "express";

import {
  createProfessional,
  deleteProfessional,
  showProfessional,
  showProfessionals,
  showProfessionalsWithSector,
  updateProfessional,
} from "../controllers/professionalController";
import validateClient from "../middlewares/validateClient";
import validateCompany from "../middlewares/validateCompany";
import { validateSchema } from "../middlewares/validateSchema";
import professionalSchema from "../schemas/professionalSchema";

const router = Router();

router.post(
  "/professional",
  validateCompany,
  validateSchema(professionalSchema),
  createProfessional
);

router.get("/professionals", validateCompany, showProfessionals);

router.get("/professional/:id", validateCompany, showProfessional);

router.put("/professional/:id", validateCompany, updateProfessional);

router.delete("/professional/:id", validateCompany, deleteProfessional);

router.get("/professionals/:id_sector", validateClient, showProfessionalsWithSector);

export default router;
