import { Router } from 'express';
import authRouterCompany from "../routers/company/authRouter"

const router = Router();

router.use(authRouterCompany);

export default router;