import { Router } from 'express';
import authRouterCompany from "../routers/company/authRouter"
import clientRouter from "../routers/company/clientRouter"
import sectorRouter from "../routers/company/sectorRouter"

const router = Router();

router.use(authRouterCompany);
router.use(clientRouter);
router.use(sectorRouter);

export default router;