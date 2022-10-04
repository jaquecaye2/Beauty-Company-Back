import { Router } from "express";

import { signup, signin } from "../controllers/authController";
import { validateSchema } from "../middlewares/validateSchema";
import userSchema from "../schemas/userSchema";

const router = Router();

router.post("/signup", validateSchema(userSchema), signup);

router.post("/signin", validateSchema(userSchema), signin);

export default router
