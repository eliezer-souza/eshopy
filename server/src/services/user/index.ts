import { Router } from 'express';
import validationData from '@eshopy/middleware/validation-data.middleware';

import UserController from './user.controller';
import { CreateUserDTO } from './user.dto';

const userRouter = Router();

userRouter.post('/', validationData(CreateUserDTO), UserController.create);
userRouter.get('/', UserController.users);
userRouter.get('/:id', UserController.user);

export default userRouter;
