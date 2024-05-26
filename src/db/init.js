import userModel from "../model/auth/index.js";
import ProductModel from "../model/product/index.js";
import SalesModel from "../model/sales/index.js";
import SalesProductModel from "../model/salesProduct/index.js";
import StudentModel from "../model/student/index.js";

const syncDB = async () => {
    await StudentModel.sync({alter:true, force:false});
    await ProductModel.sync({alter:true, force:false});
    await SalesModel.sync({alter:true, force:false});
    await SalesProductModel.sync({alter:true, force:false});
    await userModel.sync({alter:true, force:false});
    };
    
    
    export default syncDB;