import { NextFunction } from "express";
import pool from "../config/db";
import createHttpError from "http-errors";

export const createUserDb = async (
  email: string,
  password: string,
  next: NextFunction
) => {
  try {
    const { rows: user } = await pool.query(
      `INSERT INTO users(email, passwd) 
          VALUES($1, $2) 
          returning user_id, email, fullname, username, google_id, created_at`,
      [email, password]
    );
    return user[0];
  } catch (error) {
    next(createHttpError(404, "Error in createUserDb"));
  }
};
