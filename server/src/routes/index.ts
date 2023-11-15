const router = require("express").Router();
import authRoute from "./auth.routes";
import userRoute from "./user.routes";
import eventRoute from "./events.routes";

router.use("/auth", authRoute);
router.use("/users", userRoute);
router.use("/events", eventRoute);

export default router;
