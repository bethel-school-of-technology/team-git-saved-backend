import { 
    DataTypes, 
    InferCreationAttributes, 
    Model, 
    Sequelize } from "sequelize";

export class Blogs extends Model<InferCreationAttributes<Blogs>, InferCreationAttributes<Blogs>> {
    declare blogId: number;
    declare headline: string;
    declare content: string;
}

export function BlogFactory(sequelize: Sequelize) {
    Blogs.init ({
        blogId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        headline: {
            type: DataTypes.STRING,
            allowNull: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
     {
        freezeTableName: true,
        tableName: "blogs",
        sequelize
    
    });
};