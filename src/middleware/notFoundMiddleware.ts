import { Request, Response, NextFunction } from 'express';

export default function notFoundMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(404);
  req.logger.info(`Not found path ${req.originalUrl}`);
  next();
}
