import { Router } from "express";
import { createSchedule, showHours, showSchedules } from "../controllers/scheduleController";

import validateCompany from "../middlewares/validateCompany";
import validateClient from "../middlewares/validateClient";
import { validateSchema } from "../middlewares/validateSchema";
import scheduleSchema from "../schemas/scheduleSchema";
import avaiableHoursSchema from "../schemas/avaiableHoursSchema";

const router = Router();

router.post("/schedule", validateClient, validateSchema(scheduleSchema), createSchedule);

router.get("/schedule/:id_professional", validateCompany, showSchedules);

router.post("/hours", validateClient, validateSchema(avaiableHoursSchema), showHours)

export default router;