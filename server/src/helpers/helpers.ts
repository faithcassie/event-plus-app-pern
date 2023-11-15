import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { NextFunction } from "express";
import createHttpError from "http-errors";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

export const hashPassword = async (password: string) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

export const comparePassword = async (password: string, dbPassword: string) => {
  const match = await bcrypt.compare(password, dbPassword);
  return match;
};

export const generateToken = async (
  id: number,
  email: string,
  next: NextFunction
) => {
  try {
    const token = jwt.sign(
      {
        id,
        email,
      },
      JWT_SECRET
    );
    return token;
  } catch (error) {
    next(createHttpError(404, "Error generating token"));
  }
};
