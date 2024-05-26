import authController from "../../controller/auth/index.js";


import { Router } from "express";

const authRouter = Router();

authRouter.post('/signup', authController.signUp);
authRouter.post('/signin', authController.signIn);

export default authRouter;