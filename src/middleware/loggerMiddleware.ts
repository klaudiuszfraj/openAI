import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

export default function loggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  logger.info('Received initial request', {
    traceId: Math.random().toString(),
    method: req.method,
    path: req.path,
    body: JSON.stringify(req.body),
  });
  
  req.logger = logger;
  
  next()
}
