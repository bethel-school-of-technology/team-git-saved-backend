import { RequestHandler } from "express";
import { Parents } from "../models/parent";
import {
  comparePasswords,
  hashPassword,
  signUserToken,
} from "../services/auth";

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

  if (parent.username && parent.password) {
    let hashedPassword = await hashPassword(parent.password);
    parent.password = hashedPassword;
    let created = await Parents.create(parent);
    res.status(201).json({
      username: created.username,
      parentId: created.parentId,
    });
  } else {
    res.status(400).send("Username and password required");
  }
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

  if (parentFound) {
    res.status(204).send();
  } else {
    res.status(404).send();
  }
};

//login Parent
export const loginParent: RequestHandler = async (req, res, next) => {
  // Look up user by their username
  let existingParent: Parents | null = await Parents.findOne({
    where: { username: req.body.username },
  });

  // If user exists, check that password matches
  if (existingParent) {
    let passwordsMatch = await comparePasswords(
      req.body.password,
      existingParent.password
    );

    // If passwords match, create a JWT
    if (passwordsMatch) {
      let token = await signUserToken(existingParent);
      res.status(200).json({ token });
    } else {
      res.status(401).json("Invalid password");
    }
  } else {
    res.status(401).json("Invalid username");
  }
};
