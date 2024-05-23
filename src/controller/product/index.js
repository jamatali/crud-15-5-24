import ProductModel from "../../model/product/index.js";

const productController = {
  getAll: async (req, res) => {
    try {
      const products = await ProductModel.findAll({});
    if(!products){
      return res.status(400).Json({message: "No Products are Found"});
    }
    res.status(200).json({ data: products });
      
    } catch (error) {
      res.status(500).json({ message: "internal server error"});
      // console.log(`This is Error=====> ${error}`)
    }
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await ProductModel.findByPk(id);
      if (!product) {
        return res.status(404).json({ message: "No Product Found" });
      }
      res.status(200).json({ data: product });
    } catch (error) {
      res.status(500).Json({ message: "Internail Server Error"});
    }
  },
  create: async (req, res) => {
    try {
      const payload = req.body;
      const product = new ProductModel();

      product.name = payload.name;
      product.quantity = payload.quantity;
      product.price = payload.price;

      await product.save();
      res.status(200).json({ message: "Product created successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error"});
      // console.log(`This is Error=====>${error}`)
    }
  },
  update: async (req, res) => {
    try {
        const {id} = req.params;
        const payload = req.body;

        const product = await ProductModel.findByPk(id);

        if(!product){
            return res.status(404).json({message: "No Product Found"});
        }
        await ProductModel.update(payload,{
            where: {id:id}
        });
        const updatedProduct = await ProductModel.findByPk(id);
        res.status(200).json({message: "Product Updated Successfully", data: updatedProduct});
    } 
    catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
  },
  delete: async(req,res) => {
    try {
        const {id} = req.params;
        const product = await ProductModel.findByPk(id);
        if(!product){
           return res.status(200).json({message:"No Product Found"});
        }
        await ProductModel.destroy({
            where: {id:id}
        })
        res.status(200).json({message: `Product with Id: ${id} deleted Successfully`})
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
  }
};

export default productController;
