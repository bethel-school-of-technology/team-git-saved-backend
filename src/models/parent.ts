import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import { Household } from "./household";

export class Parents extends Model<
  InferAttributes<Parents>,
  InferCreationAttributes<Parents>
> {
  declare parentId: number;
  declare householdName: string;
  declare name: string;
  declare email: string;
  declare familySize: number;
  declare username: string;
  declare password: string;
  declare firstName: string;
  declare lastName: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

export function ParentFactory(sequelize: Sequelize) {
  Parents.init(
    {
      parentId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      householdName: {
        type: DataTypes.STRING,
        // references: {       //This is referencing the household model => column-'name'
        //     model: Household,
        //     key:'name'
        // },
        allowNull: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      familySize: {
        type: DataTypes.INTEGER,
        // references: {
        //   //This is referencing the household model => column-'size'
        //   model: Household,
        //   key: "size",
        // },
        allowNull: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      freezeTableName: true,
      tableName: "parents",
      sequelize,
    }
  );
}
