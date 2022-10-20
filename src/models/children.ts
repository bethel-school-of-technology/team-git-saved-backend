import { DataTypes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { Household } from "./household";

export class Children extends Model<InferCreationAttributes<Children>, InferCreationAttributes<Children>> {
    declare childId: number;
    declare householdName: string;
    declare name: string;
    declare points: number;
    
}


export function ChildrenFactory(sequelize: Sequelize) {
    Children.init({
        childId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        householdName: {
            type: DataTypes.STRING,
            // references: {       //This is referencing the household model => column-'name'
            //     model: Household,
            //     key:'name'
            // },
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },   {
        freezeTableName: true,
        tableName: "children",
        sequelize
    });


}


