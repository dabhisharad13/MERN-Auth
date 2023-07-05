import { Router } from "express";
import * as controller from "../controllers/appController.js";
const router = Router();

/** GET Method */
router.route("/user/:username").get(controller.getUser);
router.route("/generateOTP").get(controller.generateOTP);
router.route("/verifyOTP").get(controller.verifyOTP);
router.route("/createResetSession").get(controller.createResetSession);

/** POST Method */
router.route("/register").post(controller.register);
router.route("/authenticate").post((req, res) => res.end());
router.route("/login").post(controller.login);

/** PUT Method */
router.route("/updateuser").put();
router.route("/resetPassword").put();

export default router;
