import { Router } from "express";

import {
  showClient,
  showClients,
  createClient,
  updateClient,
  deleteClient,
  showProfile,
} from "../controllers/clientController";
import validateClient from "../middlewares/validateClient";
import validateCompany from "../middlewares/validateCompany";
import { validateSchema } from "../middlewares/validateSchema";
import clientSchema from "../schemas/clientSchema";

const router = Router();

router.post("/client", validateCompany, validateSchema(clientSchema), createClient);

router.get("/clients", validateCompany, showClients);

router.get("/client/:id", validateCompany, showClient);

router.put("/client/:id", validateCompany, updateClient);

router.delete("/client/:id", validateCompany, deleteClient);

router.get("/myprofile", validateClient, showProfile)

export default router;
