"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParentFactory = exports.Parents = void 0;
const sequelize_1 = require("sequelize");
class Parents extends sequelize_1.Model {
}
exports.Parents = Parents;
function ParentFactory(sequelize) {
    Parents.init({
        parentId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        householdName: {
            type: sequelize_1.DataTypes.STRING,
            // references: {       //This is referencing the household model => column-'name'
            //     model: Household,
            //     key:'name'
            // },
            allowNull: true,
            unique: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        familySize: {
            type: sequelize_1.DataTypes.INTEGER,
            // references: {
            //   //This is referencing the household model => column-'size'
            //   model: Household,
            //   key: "size",
            // },
            allowNull: true,
        },
        // password: {
        //   type: DataTypes.STRING,
        //   allowNull: false,
        // },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
    }, {
        freezeTableName: true,
        tableName: "parents",
        sequelize,
    });
}
exports.ParentFactory = ParentFactory;
