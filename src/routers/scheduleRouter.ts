import { Router } from "express";
import { createSchedule, showSchedules } from "../controllers/scheduleController";

import validateCompany from "../middlewares/validateCompany";
import validateClient from "../middlewares/validateClient";
import { validateSchema } from "../middlewares/validateSchema";
import scheduleSchema from "../schemas/scheduleSchema";

const router = Router();

router.post("/schedule", validateClient, validateSchema(scheduleSchema), createSchedule);

router.get("/schedule", validateCompany, showSchedules);

export default router;