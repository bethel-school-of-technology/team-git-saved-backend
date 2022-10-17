"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const children_1 = require("./children");
const household_1 = require("./household");
const parent_1 = require("./parent");
const tasks_1 = require("./tasks");
const blogs_1 = require("./blogs");
const dbName = 'hometasticDb';
const username = 'root';
const password = 'password';
const sequelize = new sequelize_1.Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
(0, tasks_1.TaskFactory)(sequelize);
(0, parent_1.ParentFactory)(sequelize);
(0, children_1.ChildrenFactory)(sequelize);
(0, household_1.HouseholdFactory)(sequelize);
(0, blogs_1.BlogFactory)(sequelize);
exports.db = sequelize;
