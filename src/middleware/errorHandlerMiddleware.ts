import type { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

interface CustomError extends Error {
  statusCode?: number;
}

const errorHandlerMiddleware = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  console.log(error);
  const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = error.message || "something went wrong, try again later";
  res.status(statusCode).json({ msg });
};

export default errorHandlerMiddleware;
