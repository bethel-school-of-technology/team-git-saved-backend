"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParentFactory = exports.Parents = void 0;
const sequelize_1 = require("sequelize");
const household_1 = require("./household");
class Parents extends sequelize_1.Model {
}
exports.Parents = Parents;
function ParentFactory(sequelize) {
    Parents.init({
        parentId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        householdName: {
            type: sequelize_1.DataTypes.STRING,
            references: {
                model: household_1.Household,
                key: 'name'
            },
            allowNull: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        familySize: {
            type: sequelize_1.DataTypes.INTEGER,
            references: {
                model: household_1.Household,
                key: 'size'
            },
            allowNull: true
        }
    }, {
        freezeTableName: true,
        tableName: "parents",
        sequelize
    });
}
exports.ParentFactory = ParentFactory;
