import { Router } from "express";
import productController from "../../controller/product/index.js";

const productRouter = Router();

productRouter.get('/products', productController.getAll);

productRouter.get('/product/:id', productController.getSingle);

productRouter.post('/product', productController.create);

productRouter.put('/product/:id', productController.update);

productRouter.delete('/product/:id', productController.delete);

export default productRouter;