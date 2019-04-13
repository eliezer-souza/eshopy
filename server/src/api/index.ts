import { Router } from 'express';
import routerV1 from './v1';

const router = Router();

router.use('/api/v1', routerV1);

export default router;
