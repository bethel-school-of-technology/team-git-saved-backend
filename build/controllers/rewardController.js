"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.deleteTask = exports.createTask = exports.getTask = exports.getAllTasks = void 0;
const tasks_1 = require("../models/tasks");
// get all tasks
const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    tasks_1.Tasks.findAll().then(response => {
        res.status(200).json(response);
    });
    // let tasksFound = await Tasks.findAll();
    // res.status(200).json(tasksFound)
});
exports.getAllTasks = getAllTasks;
// get task by id
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let taskId = req.params.id;
    let taskFound = yield tasks_1.Tasks.findByPk(taskId).then(response => {
        res.status(200).json(response);
    });
});
exports.getTask = getTask;
// create task
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let task = req.body;
    if (task.title) {
        try {
            let created = yield tasks_1.Tasks.create(task);
            res.status(201).json(created);
        }
        catch (err) {
            res.status(400).send();
        }
    }
    else {
        res.status(400).send();
    }
});
exports.createTask = createTask;
// delete task
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let taskId = req.params.id;
    let taskFound = yield tasks_1.Tasks.findByPk(taskId);
    if (taskFound) {
        yield tasks_1.Tasks.destroy({
            where: { taskId: taskId }
        }).then(response => {
            res.status(200).json();
        });
    }
    else {
        res.status(404).send();
    }
});
exports.deleteTask = deleteTask;
// update to update completed
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let taskId = req.params.id;
    let taskBody = req.body;
    let taskFound = yield tasks_1.Tasks.findByPk(taskId);
    // console.log(taskFound);
    if (taskFound) {
        yield tasks_1.Tasks.update(taskBody, {
            where: {
                taskId: taskId
            }
        }).then(response => {
            res.status(200).send(response);
        });
    }
    else {
        res.status(404).send();
    }
});
exports.updateTask = updateTask;
