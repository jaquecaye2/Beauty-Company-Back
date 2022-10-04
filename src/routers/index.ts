import { Router } from 'express';
import authRouter from "../routers/authRouter"
import testsRouter from "../routers/testsRouter"

const router = Router();

router.use(authRouter);
router.use(testsRouter);

export default router;