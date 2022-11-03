import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { Household } from "./household";

export class User extends Model<InferCreationAttributes<User>, InferCreationAttributes<User>> {
    declare userId: number;
    declare roleId: string;
    declare username: string;
    declare password: string;
    declare name: string;
    declare householdName: string;
    declare bio: string;
    declare points: number;
    declare task: string;
   
    
    
}

export function UserFactory(sequelize: Sequelize) {
    User.init({
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        roleId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
            
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        householdName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: true
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        
        task: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, 
      {
        freezeTableName: true,
        tableName: "users",
        sequelize
    });
    
    


}


