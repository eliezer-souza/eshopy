import validationData from '@eshopy/middleware/validation-data.middleware';
import { Router } from 'express';

import UserController from './user.controller';
import { CreateUserDTO } from './user.dto';

const userRouter = Router();

/**
 * @api {post} /users Create User
 * @apiDescription Create a new user
 * @apiVersion 1.0.0
 * @apiName CreateUser
 * @apiGroup User
 *
 * @apiParam  {String{..10}}       username  User's name
 * @apiParam  {String}             email     User's email
 * @apiParam  {String{6..128}}     password  User's password
 *
 * @apiSuccess (Created 201) {Number}  id         User's id
 * @apiSuccess (Created 201) {String}  username   User's name
 * @apiSuccess (Created 201) {String}  email      User's email
 * @apiSuccess (Created 201) {String}  password   User's password
 *
 * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
 */
userRouter.post('/', validationData(CreateUserDTO), UserController.create);

/**
 * @api {get} /users List of users
 * @apiDescription List of users
 * @apiVersion 1.0.0
 * @apiName List of Users
 * @apiGroup User
 *
 * @apiSuccess {Object[]} users List of users.
 *
 */
userRouter.get('/', UserController.users);

/**
 * @api {get} /users/:id Info of user
 * @apiDescription Info of user
 * @apiVersion 1.0.0
 * @apiName Info of user
 * @apiGroup User
 *
 * @apiParam  {Number}  id  User's id
 *
 * @apiSuccess {Object} users Info of user.
 *
 */
userRouter.get('/:id', UserController.user);

export default userRouter;
