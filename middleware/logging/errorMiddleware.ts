import { Request, Response, NextFunction } from 'express';
import ApiError from '../../error/ApiError';
import logger from './logger';

// eslint-disable-next-line no-unused-vars
const errorMiddleware = (err: Error, req: Request, res: Response, next:
NextFunction) => {
  logger(err);
  if (err instanceof ApiError) {
    logger('err instanceof ApiError');
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Internal server error' });
};

// eslint-disable-next-line no-unused-vars
export default errorMiddleware;
