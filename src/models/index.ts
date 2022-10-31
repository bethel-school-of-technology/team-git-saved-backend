import { Sequelize } from "sequelize";
import { ChildrenFactory } from "./children";
import { ParentFactory } from "./parent";
import { TaskFactory } from "./tasks";
import { BlogFactory } from "./blogs";
import { HouseholdFactory } from "./household";

const dbName = "hometasticDb";
const username = "root";
const password = "Password1!";

const sequelize = new Sequelize(dbName, username, password, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

TaskFactory(sequelize);
ParentFactory(sequelize);
ChildrenFactory(sequelize);
HouseholdFactory(sequelize);
BlogFactory(sequelize);

export const db = sequelize;
