"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskFactory = exports.Tasks = void 0;
const sequelize_1 = require("sequelize");
class Tasks extends sequelize_1.Model {
}
exports.Tasks = Tasks;
function TaskFactory(sequelize) {
    Tasks.init({
        taskId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        pointValue: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        assignedTo: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        completed: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: true
        }
    }, {
        freezeTableName: true,
        tableName: "tasks",
        sequelize
    });
}
exports.TaskFactory = TaskFactory;
