import { Router } from "express";
import studentController from "../../controller/student/index.js";
import authMiddleware from "../../middleware/auth.js";

const studentRouter = Router();

studentRouter.get('/students',authMiddleware, studentController.getALL);

studentRouter.post('/student', studentController.create);

studentRouter.get('/student/:id',authMiddleware, studentController.getSingle);

studentRouter.put('/student/:id', studentController.update);

studentRouter.delete('/student/:id', studentController.delete);

export default studentRouter;