"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateParent = exports.deleteParent = exports.createParent = exports.getParent = exports.getAllParents = exports.defaultParent = void 0;
const parent_1 = require("../models/parent");
const defaultParent = (req, res, next) => {
    res.redirect("/parents");
};
exports.defaultParent = defaultParent;
// get all parents
const getAllParents = async (req, res) => {
    parent_1.Parents.findAll().then((response) => {
        res.status(200).json(response);
    });
    // let parentsFound = await Parents.findAll();
    // res.status(200).json(parentsFound)
};
exports.getAllParents = getAllParents;
// get parent by id
const getParent = async (req, res) => {
    let itemId = req.params.parentId;
    let parentItem = await parent_1.Parents.findByPk(itemId);
    if (parentItem) {
        res.status(200).json(parentItem);
    }
    else {
        res.status(404);
    }
};
exports.getParent = getParent;
// create parent
const createParent = async (req, res) => {
    let parent = req.body;
    await parent_1.Parents.create(parent).then((response) => {
        res.status(200).json(response);
    });
    // if (parent.householdName) {
    //   try {
    //     let created = await Parents.create(parent);
    //     res.status(201).json(created);
    //   } catch (err) {
    //     res.status(400).send();
    //   }
    // } else {
    //   res.status(400).send();
    // }
};
exports.createParent = createParent;
// delete parent
const deleteParent = async (req, res) => {
    let itemId = req.params.parentId;
    let deleted = await parent_1.Parents.destroy({
        where: { parentId: itemId },
    });
    if (deleted) {
        res.redirect("/");
    }
    else {
        res.status(404);
    }
};
exports.deleteParent = deleteParent;
// update to update completed Parent
const updateParent = async (req, res) => {
    let itemId = req.params.parentId;
    let taskBody = req.body;
    let [parentFound] = await parent_1.Parents.update(taskBody, {
        where: { parentId: itemId },
    });
    // console.log(parentFound);
    if (parentFound) {
        res.status(204).send();
    }
    else {
        res.status(404).send();
    }
};
exports.updateParent = updateParent;
