import {
  signInWithEmail,
  registerWithEmail,
} from "../controllers/auth.controller";
import validators from "../middleware/validators";
import { body } from "express-validator";

const router = require("express").Router();

router.post(
  "/sign-in",
  validators.validate([
    body("email", "Invalid email").exists().isEmail(),
    body("password", "Invalid password")
      .exists()
      .notEmpty()
      .isLength({ min: 5 }),
  ]),
  signInWithEmail
);

/**
 * @route POST /auth/sign-up
 * @description Register new user
 * @access Public
 */
router.post(
  "/sign-up",
  validators.validate([
    body("email", "Invalid email").exists().isEmail(),
    body("password", "Invalid password")
      .exists()
      .notEmpty()
      .isLength({ min: 5 }),
  ]),
  registerWithEmail
);

export default router;
