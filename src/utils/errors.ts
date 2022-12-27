import { HttpCode } from "../../types/httpStatusCodes";

interface AdvancedErrorInterface {
  message: string;
  methodName?: string;
  httpCode: HttpCode;
  originalHttpCode: number;
  isOperational: boolean;
}

export class AdvancedError extends Error {
  public readonly message: string;
  public readonly methodName: string;
  public readonly httpCode: number;
  public readonly originalHttpCode: number;
  public readonly isOperational: boolean;

  constructor({
    message,
    methodName,
    httpCode,
    originalHttpCode,
    isOperational,
  }: AdvancedErrorInterface) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.message = message;
    this.methodName = methodName || '';
    this.httpCode = httpCode;
    this.originalHttpCode = originalHttpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}
