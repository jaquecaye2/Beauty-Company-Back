import { Router } from 'express';
import authRouterCompany from "./authRouter"
import clientRouter from "../routers/clientRouter"
import sectorRouter from "../routers/sectorRouter"
import serviceRouter from "../routers/serviceRouter"
import professionalRouter from "../routers/professionalRouter"
import scheduleRouter from "../routers/scheduleRouter"

const router = Router();

router.use(authRouterCompany);
router.use(clientRouter);
router.use(sectorRouter);
router.use(serviceRouter);
router.use(professionalRouter);
router.use(scheduleRouter);

export default router;