
import { Router } from "express";
import authController from "../../controller/auth/index.js";
import AuthValidators from "../../validators/auth/index.js";

const authRouter = Router();

authRouter.post('/signup', AuthValidators.signIn, authController.signUp);
authRouter.post('/signin',authController.signIn);

export default authRouter;