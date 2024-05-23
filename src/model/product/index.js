import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";


const ProductModel = sequelize.define(
    "Products",
  {
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price:{
        type: DataTypes.DOUBLE,
        allowNull:false
    }
  }
)

export default ProductModel;