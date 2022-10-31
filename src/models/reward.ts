import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";

export class Rewards extends Model<
  InferAttributes<Rewards>,
  InferCreationAttributes<Rewards>
> {
  declare rewardId: number;
  declare title: string;
  declare pointValue: number;
  declare completed: boolean;
}

export function RewardFactory(sequelize: Sequelize) {
  Rewards.init(
    {
      rewardId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pointValue: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      tableName: "rewards",
      sequelize,
    }
  );
}
