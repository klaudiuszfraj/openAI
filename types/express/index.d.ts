import winston = require('winston');

declare global {
  namespace Express {
    interface Request {
      logger: winston.Logger;
    }
  }
}
