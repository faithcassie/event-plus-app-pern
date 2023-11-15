import validators from "../middleware/validators";
import { body } from "express-validator";

const router = require("express").Router();

/**
 * @route GET /users/me
 * @description Get current user info
 * @access Login required
 */
router.get("/me");
export default router;
