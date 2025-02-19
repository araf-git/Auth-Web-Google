import express from "express";
import {
  signUp,
  login,
  changePassword,
  userInfo,
  sendPasswordResetEmail,
  passwordReset,
  refresh,
  logout,
  verifyEmail,
} from "../controller/auth.js";
import checkUserAuth from "../middleware/auth.js";

const router = express.Router();

router
  // Public route
  .post("/signup", signUp)
  .post("/verify-email", verifyEmail)
  .post("/login", login)
  .post("/forgot-password", sendPasswordResetEmail)
  .post("/reset-password/:id/:reset_token", passwordReset)
  .post("/refresh", refresh)

  // Protected route
  .post("/change-password", checkUserAuth, changePassword)
  .get("/userinfo", checkUserAuth, userInfo)
  .post("/logout", checkUserAuth, logout);
export default router;
