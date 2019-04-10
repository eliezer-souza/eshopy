import { Request, Response, NextFunction } from "express";
import HttpException from "@eshopy/exception/http.exception";
import { User } from "@eshopy/entities";

import IUser from "./user.interface";

class UserController {
  async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<IUser | Response> {
    const { username, password, email } = request.body;

    const findUser = await User.find({
      where: { email: email, username: username }
    });

    if (findUser.length !== 0) {
      await next(new HttpException(404, "User already exists"));
    } else {
      const user = await User.create({ username, password, email }).save();

      if (!user) {
        await next(new HttpException(404, "User not created"));
      } else {
        return response.send({ user });
      }
    }
  }

  async users(
    request: Request,
    response: Response
  ): Promise<IUser[] | Response> {
    const users = await User.find();
    return response.json({ users });
  }

  async user(request: Request, response: Response): Promise<IUser | Response> {
    const user = await User.findOne({ where: { id: request.params.id } });
    return response.json({ user });
  }
}

export default new UserController();
