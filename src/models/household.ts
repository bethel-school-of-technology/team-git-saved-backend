import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";

export class Household extends Model<
  InferAttributes<Household>,
  InferCreationAttributes<Household>
> {
  declare householdId: number;
  declare name: string;
  declare size: number;
}

export function HouseholdFactory(sequelize: Sequelize) {
  Household.init(
    {
      householdId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      tableName: "household",
      sequelize,
    }
  );
}
