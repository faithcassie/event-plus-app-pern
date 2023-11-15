import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";

const errorHandler = (
  error: HttpError,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log(error);
  const { statusCode, message } = error;
  res.status(statusCode || 500).json({
    status: "error",
    statusCode: statusCode || 500,
    message: statusCode === 500 ? "An error occurred" : message,
  });

  next();
};

export default errorHandler;
