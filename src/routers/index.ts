import { Router } from 'express';
import authRouterCompany from "../routers/company/authRouter"
import clientRouter from "../routers/company/clientRouter"

const router = Router();

router.use(authRouterCompany);
router.use(clientRouter);

export default router;