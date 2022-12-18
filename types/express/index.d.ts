import logger from '../../src/utils/logger';

declare global {
  namespace Express {
    interface Request {
      logger: logger;
    }
  }
}
