import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import SalesModel from "../sales/index.js";
import ProductModel from "../product/index.js";

const SalesProductModel = sequelize.define(
    "SalesProduct",
    {
   
        productQuantity: {
          type: DataTypes.INTEGER,
        },
        rate: {
          type: DataTypes.FLOAT,
        },
      }
);

SalesModel.hasMany(SalesProductModel);
SalesProductModel.belongsTo(SalesModel);

ProductModel.hasMany(SalesProductModel);
SalesProductModel.belongsTo(ProductModel);
export default SalesProductModel;