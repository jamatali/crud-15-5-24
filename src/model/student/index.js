import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const StudentModel = sequelize.define(
    'Students',
    {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: true
            },
            phone: {
                type: DataTypes.BIGINT,
                allowNull: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            }
    }
)

export default StudentModel;