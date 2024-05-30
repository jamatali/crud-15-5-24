import authController from "../../controller/auth/index.js";


import { Router } from "express";
import authMiddleware from "../../middleware/auth.js";

const authRouter = Router();

authRouter.post('/signup', authController.signUp);
authRouter.post('/signin',authMiddleware, authController.signIn);

export default authRouter;