import { Router } from "express";

import { signin } from "../../controllers/company/authController";
import { validateSchema } from "../../middlewares/validateSchema";
import companySchema from "../../schemas/companySchema";

const router = Router();

router.post("/signincompany", validateSchema(companySchema), signin);

export default router;
