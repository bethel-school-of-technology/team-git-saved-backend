import { 
    DataTypes, 
    InferAttributes, 
    InferCreationAttributes, 
    Model, 
    Sequelize } from "sequelize";
import { DataType } from "sequelize-typescript";

export class Discussion extends Model<InferAttributes<Discussion>, InferCreationAttributes<Discussion>> {
    declare discussionId: number;
    declare headline: string;
    declare content: string;
    declare user: string;
}


export function DiscussionFactory(sequelize: Sequelize) {
    Discussion.init ({
        discussionId: {
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
        },
        user: {
            type: DataType.STRING,
            allowNull: false
        }
    },
    
     {
        freezeTableName: true,
        tableName: "discussion",
        sequelize
    
    });
};