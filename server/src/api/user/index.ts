import { Router } from 'express';
import UserController from './user.controller';

const userRouter = Router();

userRouter.post('/', UserController.create);
userRouter.get('/', UserController.users);
userRouter.get('/:id', UserController.user);

export default userRouter;
