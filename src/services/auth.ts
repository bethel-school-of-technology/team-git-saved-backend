import bcrypt from "bcrypt";
import { Request } from "express";
import jwt from "jsonwebtoken";
import { Parents } from "../models/parent";

const secret = "We R College Bethel";

export const hashPassword = async (plainTextPassword: string) => {
  const saltRound = 12;
  const hash = await bcrypt.hash(plainTextPassword, saltRound);
  return hash;
};

export const comparePasswords = async (
  plainTextPassword: string,
  hashPassword: string
) => {
  return await bcrypt.compare(plainTextPassword, hashPassword);
};

export const signUserToken = async (user: Parents) => {
  let token = jwt.sign({ parentId: user.parentId }, secret, {
    expiresIn: "1hr",
  });

  return token;
};

export const verifyUser = async (req: Request) => {
  // Get the Authorization header from the request
  const authHeader = req.headers.authorization;

  // If header exists, parse token from `Bearer <token>`
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    // Verify the token and get the user
    try {
      let decoded: any = await jwt.verify(token, secret);
      return Parents.findByPk(decoded.parentId);
    } catch (err) {
      return null;
    }
  } else {
    return null;
  }
};
