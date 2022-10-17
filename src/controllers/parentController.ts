import { RequestHandler } from "express";
import { Parents } from "../models/parent";

export const defaultParent: RequestHandler = (req, res, next) => {
  res.redirect("/parents");
};

// get all parents
export const getAllParents: RequestHandler = async (req, res) => {
  Parents.findAll().then((response) => {
    res.status(200).json(response);
  });

  // let parentsFound = await Parents.findAll();
  // res.status(200).json(parentsFound)
};

// get parent by id
export const getParent: RequestHandler = async (req, res) => {
  let itemId = req.params.parentId;

  let parentItem: Parents | null = await Parents.findByPk(itemId);

  if (parentItem) {
    res.status(200).json(parentItem);
  } else {
    res.status(404);
  }
};

// create parent
export const createParent: RequestHandler = async (req, res) => {
  let parent: Parents = req.body;
  await Parents.create(parent).then((response) => {
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

// delete parent
export const deleteParent: RequestHandler = async (req, res) => {
  let itemId = req.params.parentId;

  let deleted = await Parents.destroy({
    where: { parentId: itemId },
  });

  if (deleted) {
    res.redirect("/");
  } else {
    res.status(404);
  }
};

// update to update completed Parent
export const updateParent: RequestHandler = async (req, res) => {
  let itemId = req.params.parentId;
  let taskBody: Parents = req.body;

  let [parentFound] = await Parents.update(taskBody, {
    where: { parentId: itemId },
  });

  // console.log(parentFound);

  if (parentFound) {
    res.status(204).send();
  } else {
    res.status(404).send();
  }
};
