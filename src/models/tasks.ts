import { DataTypes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class Tasks extends Model<InferCreationAttributes<Tasks>, InferCreationAttributes<Tasks>> {
    declare taskId: number;
    declare title: string;
    declare pointValue: number
    declare assignedTo: string;
    declare completed: boolean;
}


export function TaskFactory(sequelize: Sequelize) {
    Tasks.init({
        taskId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        pointValue: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        assignedTo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    }, {
        freezeTableName: true,
        tableName: "tasks",
        sequelize
    });


}


