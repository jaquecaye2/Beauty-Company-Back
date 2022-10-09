import { Router } from "express";

import { signinclient, signincompany } from "../controllers/authController";
import { validateSchema } from "../middlewares/validateSchema";
import loginSchema from "../schemas/companySchema";

const router = Router();

router.post("/signincompany", validateSchema(loginSchema), signincompany);

router.post("/signinclient", validateSchema(loginSchema), signinclient)

export default router;
