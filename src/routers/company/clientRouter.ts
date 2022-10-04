import { Router } from "express";

import {
  showClient,
  showClients,
  createClient,
  updateClient,
  deleteClient,
} from "../../controllers/company/authController";
import validateCompany from "../../middlewares/validateCompany";

const router = Router();

router.post("/client", validateCompany, createClient);

router.get("/clients", validateCompany, showClients);

router.get("/client/:id", validateCompany, showClient);

router.put("/client/:id", validateCompany, updateClient);

router.delete("/client/:id", validateCompany, deleteClient);

export default router;
