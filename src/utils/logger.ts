import winston from 'winston';
let logTraceId = 'service_log'

const { combine, timestamp, prettyPrint, errors } = winston.format;

const ignorePrivate = winston.format((info) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  logTraceId = info.traceId? info.traceId : logTraceId
  info.app = 'openai'
  info.traceId = logTraceId
  return info;
});

export default winston.createLogger({
  format: combine(
    ignorePrivate(),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    prettyPrint(),
    errors({ stack: true })
  ),
  transports: [
    new winston.transports.Console(),
    // new winston.transports.File({ filename: 'combined.log' })
  ],
});
