"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildrenFactory = exports.Children = void 0;
const sequelize_1 = require("sequelize");
class Children extends sequelize_1.Model {
}
exports.Children = Children;
function ChildrenFactory(sequelize) {
    Children.init({
        childId: {
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
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        points: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
        freezeTableName: true,
        tableName: "children",
        sequelize,
    });
}
exports.ChildrenFactory = ChildrenFactory;
