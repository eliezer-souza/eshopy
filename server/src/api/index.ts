import express, { Router } from 'express';
import userRouter from './user';

const router = Router();

router.use('/docs', express.static('docs'));

router.use('/users', userRouter);

export default router;
