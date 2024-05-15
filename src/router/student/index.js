import { Router } from "express";
import studentController from "../../controller/student/index.js";

const studentRouter = Router();

studentRouter.get('/students', studentController.getALL);
studentRouter.post('/student', studentController.create);
studentRouter.get('/student/:firstName', studentController.getSingle);
studentRouter.put('/student/:firstName', studentController.update);

export default studentRouter;