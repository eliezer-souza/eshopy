import HttpException from '@eshopy/exception/http.exception';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { NextFunction, Request, RequestHandler, Response } from 'express';

function validationData<T>(type: any, skipMissingProperties = false): RequestHandler {
  return (request: Request, response: Response, next: NextFunction) => {
    validate(plainToClass(type, request.body), { skipMissingProperties }).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
        next(new HttpException(400, message));
      } else {
        next();
      }
    });
  };
}

export default validationData;
