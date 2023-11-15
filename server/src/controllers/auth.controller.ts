import { Request, Response, NextFunction } from "express";
import { getUserByEmailDb } from "../db/user.db";
import {
  hashPassword,
  comparePassword,
  generateToken,
} from "../helpers/helpers";
import { createUserDb } from "../db/auth.db";
import createHttpError from "http-errors";

export const signInWithEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // get data from req body
  const { email, password } = req.body;

  //  check if user already exits
  const userByEmail = await getUserByEmailDb(email, next);

  // if no user by email, return error
  if (!userByEmail) {
    // const error = createHttpError(400, "No account found.")
    return res.status(401).send({ message: "User not found." });
  }
  // gen token from user id and email

  // return user id, email and token
  return res.status(200).send({ user: userByEmail });
};

export const registerWithEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get data from req body
    const { email, password } = req.body;

    //  check if user already exits
    const userByEmail = await getUserByEmailDb(email, next);
    if (userByEmail) {
      return res.status(401).send({ message: "Email already used." });
    }
    // if not, create new user
    // hash password
    const hashedPass = await hashPassword(password);
    // console.log(hashedPass);

    // create new user in database
    const user = await createUserDb(email, hashedPass, next);
    console.log(user);

    // gen token from user id and email
    const token = await generateToken(user.user_id, user.email, next);
    console.log(token);

    // return user id, email and token
    return res.status(200).send({
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    next(createHttpError(404, "Error in registerWithEmail"));
  }
};
