import { Request, Response, NextFunction } from 'express';
import ErrorResponse from '../../types/errorResponse';

export default function errorMiddleware(
  err: Error,
  req: Request,
  res: Response<ErrorResponse>,
  next: NextFunction
) {
  res.status(res.statusCode || 500);
  req.logger.error(
    `Responding with error ${err.message} failed at ${JSON.stringify(
      err.stack
    )}`
  );

  res.json({
    success: false,
    message: err.message,
  });
}
