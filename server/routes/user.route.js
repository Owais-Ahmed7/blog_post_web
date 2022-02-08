import express from "express";
//Auth controller
import { UserLogin, UserRegis } from "../controllers/Auth.js";

const router = express.Router();

//signin route
router.post("/signin",  UserLogin);
//signup route
router.post("/signup", UserRegis);

export default router;