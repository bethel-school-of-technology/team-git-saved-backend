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
exports.updateParent = exports.deleteParent = exports.createParent = exports.getParent = exports.getAllParents = void 0;
const parent_1 = require("../models/parent");
// get all parents
const getAllParents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    parent_1.Parents.findAll().then(response => {
        res.status(200).json(response);
    });
    // let parentsFound = await Parents.findAll();
    // res.status(200).json(parentsFound)
});
exports.getAllParents = getAllParents;
// get parent by id
const getParent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let parentId = req.params.id;
    let parentFound = yield parent_1.Parents.findByPk(parentId).then(response => {
        res.status(200).json(parentFound);
    });
});
exports.getParent = getParent;
// create parent
const createParent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let parent = req.body;
    if (parent.title) {
        try {
            let created = yield parent_1.Parents.create(parent);
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
exports.createParent = createParent;
// delete parent
const deleteParent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let parentId = req.params.id;
    let parentFound = yield parent_1.Parents.findByPk(parentId);
    if (parentFound) {
        yield parent_1.Parents.destroy({
            where: { parentId: parentId }
        }).then(response => {
            res.status(200).json();
        });
    }
    else {
        res.status(404).send();
    }
});
exports.deleteParent = deleteParent;
// update to update completed Parent
const updateParent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let parentId = req.params.id;
    let taskBody = req.body;
    let parentFound = yield parent_1.Parents.findByPk(parentId);
    // console.log(parentFound);
    if (parentFound) {
        yield parent_1.Parents.update(taskBody, {
            where: {
                parentId: parentId
            }
        }).then(response => {
            res.status(200).send(response);
        });
    }
    else {
        res.status(404).send();
    }
});
exports.updateParent = updateParent;
