"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./models/index");
const morgan_1 = __importDefault(require("morgan"));
const tasks_1 = __importDefault(require("./routes/tasks"));
const parent_1 = __importDefault(require("./routes/parent"));
const children_1 = __importDefault(require("./routes/children"));
const household_1 = __importDefault(require("./routes/household"));
const express_1 = __importDefault(require("express"));
const { Sequelize } = require('sequelize');
const cors = require("cors");
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/tasks', tasks_1.default);
app.use('/parents', parent_1.default);
app.use('/children', children_1.default);
app.use('/household', household_1.default);
app.use((req, res, next) => {
    res.status(404).end();
});
index_1.db.sync({ alter: true }).then(() => {
    console.log("connected to database");
});
app.listen(3000);
