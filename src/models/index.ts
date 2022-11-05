import { Sequelize } from "sequelize";
import { User, UserFactory } from "./user";
import { TaskFactory, AssociateUserTasks } from "./tasks";
import { HouseholdFactory } from "./household";
import { DiscussionFactory } from "./discussion";
import { RewardFactory } from "./reward";

const dbName = "hometasticDb";
const username = "root";
const password = "123";

const sequelize = new Sequelize(dbName, username, password, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

TaskFactory(sequelize);
UserFactory(sequelize);
HouseholdFactory(sequelize);
DiscussionFactory(sequelize);
RewardFactory(sequelize);
AssociateUserTasks();

// User.hasMany(Tasks, {
//     foreignKey: 'taskId'
//   });
//   Tasks.belongsTo(User);


export const db = sequelize;
