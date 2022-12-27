import { Request, Response, NextFunction } from 'express';
import ErrorResponse from '../../types/errorResponse';
import {AdvancedError} from "../utils/errors";

export default function errorMiddleware(
  err: AdvancedError,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction
) {
  res.status(err.httpCode || 500);
  req.logger.error(
    `Responding with error ${err.message} failed at ${JSON.stringify(
      err.stack
    )}`, err
  );

  res.json({
    success: false,
    message: err.message,
  });
}
