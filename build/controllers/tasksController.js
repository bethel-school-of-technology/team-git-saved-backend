"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.deleteTask = exports.createTask = exports.getTask = exports.getAllTasks = void 0;
const tasks_1 = require("../models/tasks");
// get all tasks
const getAllTasks = async (req, res) => {
    tasks_1.Tasks.findAll().then((response) => {
        res.status(200).json(response);
    });
    // let tasksFound = await Tasks.findAll();
    // res.status(200).json(tasksFound)
};
exports.getAllTasks = getAllTasks;
// get task by id
const getTask = async (req, res) => {
    let taskId = req.params.id;
    let taskFound = await tasks_1.Tasks.findByPk(taskId).then((response) => {
        res.status(200).json(response);
    });
};
exports.getTask = getTask;
// create task
const createTask = async (req, res) => {
    let task = req.body;
    if (task.title) {
        try {
            let created = await tasks_1.Tasks.create(task);
            res.status(201).json(created);
        }
        catch (err) {
            res.status(400).send();
        }
    }
    else {
        res.status(400).send();
    }
};
exports.createTask = createTask;
// delete task
const deleteTask = async (req, res) => {
    let taskId = req.params.id;
    let taskFound = await tasks_1.Tasks.findByPk(taskId);
    if (taskFound) {
        await tasks_1.Tasks.destroy({
            where: { taskId: taskId },
        }).then((response) => {
            res.status(200).json();
        });
    }
    else {
        res.status(404).send();
    }
};
exports.deleteTask = deleteTask;
// update to update completed
const updateTask = async (req, res) => {
    let taskId = req.params.id;
    let taskBody = req.body;
    let taskFound = await tasks_1.Tasks.findByPk(taskId);
    // console.log(taskFound);
    if (taskFound) {
        await tasks_1.Tasks.update(taskBody, {
            where: {
                taskId: taskId,
            },
        }).then((response) => {
            res.status(200).send(response);
        });
    }
    else {
        res.status(404).send();
    }
};
exports.updateTask = updateTask;
