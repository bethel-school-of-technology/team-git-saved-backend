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
exports.updateChild = exports.deleteChild = exports.createChild = exports.getChild = exports.getAllChildren = void 0;
const children_1 = require("../models/children");
// get all children
const getAllChildren = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    children_1.Children.findAll().then(response => {
        res.status(200).json(response);
    });
    // let childrenFound = await Parents.findAll();
    // res.status(200).json(childrenFound)
});
exports.getAllChildren = getAllChildren;
// get child by id
const getChild = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let childId = req.params.id;
    let childFound = yield children_1.Children.findByPk(childId).then(response => {
        res.status(200).json(response);
    });
});
exports.getChild = getChild;
// create child
const createChild = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let child = req.body;
    if (child.name) {
        try {
            let created = yield children_1.Children.create(child);
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
exports.createChild = createChild;
// delete child
const deleteChild = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let childId = req.params.id;
    let childFound = yield children_1.Children.findByPk(childId);
    if (childFound) {
        yield children_1.Children.destroy({
            where: { childId: childId }
        }).then(response => {
            res.status(200).json();
        });
    }
    else {
        res.status(404).send();
    }
});
exports.deleteChild = deleteChild;
// update to update completed- child
const updateChild = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let childId = req.params.id;
    let childBody = req.body;
    let childFound = yield children_1.Children.findByPk(childId);
    // console.log(childFound);
    if (childFound) {
        yield children_1.Children.update(childBody, {
            where: {
                childId: childId
            }
        }).then(response => {
            res.status(200).send(response);
        });
    }
    else {
        res.status(404).send();
    }
});
exports.updateChild = updateChild;
