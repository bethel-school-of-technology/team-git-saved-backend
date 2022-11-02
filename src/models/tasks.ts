import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class Tasks extends Model<InferAttributes<Tasks>, InferCreationAttributes<Tasks>> {
    declare taskId: number;
    declare title: string;
    declare pointValue: number
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
            allowNull: true
        },
        
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        
    }, {
        freezeTableName: true,
        tableName: "tasks",
        sequelize
    });


}


