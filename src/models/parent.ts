import { DataTypes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { Household } from "./household";

export class Parents extends Model<InferCreationAttributes<Parents>, InferCreationAttributes<Parents>> {
    declare parentId: number;
    declare householdName: string;
    declare name: string;
    declare email: string;
    declare familySize: number;
}


export function ParentFactory(sequelize: Sequelize) {
    Parents.init({
        parentId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        householdName: {
            type: DataTypes.STRING,
            references: {       //This is referencing the household model => column-'name'
                model: Household,
                key:'name'
            },
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        familySize: {
            type: DataTypes.INTEGER,
            references: {       //This is referencing the household model => column-'size'
                model: Household,
                key:'size'
            },
            allowNull: true
        }
    }, {
        freezeTableName: true,
        tableName: "parents",
        sequelize
    });


}


