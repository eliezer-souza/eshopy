import express, { Router } from 'express';
import userRouter from './user';

const router = Router();

router.get('/status', (req, res) => res.send('OK'));
router.use('/docs', express.static('docs'));
router.use('/users', userRouter);

export default router;
