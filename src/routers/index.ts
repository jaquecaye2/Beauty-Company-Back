import { Router } from 'express';
import authRouterCompany from "../routers/company/authRouter"
import clientRouter from "../routers/company/clientRouter"
import sectorRouter from "../routers/company/sectorRouter"
import serviceRouter from "../routers/company/serviceRouter"
import professionalRouter from "../routers/company/professionalRouter"

const router = Router();

router.use(authRouterCompany);
router.use(clientRouter);
router.use(sectorRouter);
router.use(serviceRouter);
router.use(professionalRouter);

export default router;