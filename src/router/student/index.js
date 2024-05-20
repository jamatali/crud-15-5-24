import { Router } from "express";
import studentController from "../../controller/student/index.js";

const studentRouter = Router();

studentRouter.get('/students', studentController.getALL);

studentRouter.post('/student', studentController.create);

studentRouter.get('/student/:id', studentController.getSingle);

studentRouter.put('/student/:id', studentController.update);

studentRouter.delete('/student/:delete', studentController.delete);

export default studentRouter;