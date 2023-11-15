import createHttpError from "http-errors";
import pool from "../config/db";
import { NextFunction } from "express";

export const getUserByEmailDb = async (email: string, next: NextFunction) => {
  try {
    const { rows: user } = await pool.query(
      "select * from public.users where lower(email) = lower($1)",
      [email]
    );
    return user[0];
  } catch (error) {
    next(createHttpError(404, "Error getting user from database"));
  }
};
