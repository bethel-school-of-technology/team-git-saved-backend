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
exports.updateHousehold = exports.deleteHousehold = exports.createHousehold = exports.getHousehold = exports.getAllHouseholds = void 0;
const household_1 = require("../models/household");
// get all households
const getAllHouseholds = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    household_1.Household.findAll().then(response => {
        res.status(200).json(response);
    });
    // let householdFound = await Parents.findAll();
    // res.status(200).json(householdFound)
});
exports.getAllHouseholds = getAllHouseholds;
// get household by id
const getHousehold = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let householdId = req.params.id;
    let householdFound = yield household_1.Household.findByPk(householdId).then(response => {
        res.status(200).json(householdFound);
    });
});
exports.getHousehold = getHousehold;
// create household
const createHousehold = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let household = req.body;
    if (household.title) {
        try {
            let created = yield household_1.Household.create(household);
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
exports.createHousehold = createHousehold;
// delete household
const deleteHousehold = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let householdId = req.params.id;
    let householdFound = yield household_1.Household.findByPk(householdId);
    if (householdFound) {
        yield household_1.Household.destroy({
            where: { householdId: householdId }
        }).then(response => {
            res.status(200).json();
        });
    }
    else {
        res.status(404).send();
    }
});
exports.deleteHousehold = deleteHousehold;
// update to update completed- household
const updateHousehold = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let householdId = req.params.id;
    let householdBody = req.body;
    let householdFound = yield household_1.Household.findByPk(householdId);
    // console.log(householdFound);
    if (householdFound) {
        yield household_1.Household.update(householdBody, {
            where: {
                householdId: householdId
            }
        }).then(response => {
            res.status(200).send(response);
        });
    }
    else {
        res.status(404).send();
    }
});
exports.updateHousehold = updateHousehold;
