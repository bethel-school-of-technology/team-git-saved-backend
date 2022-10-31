import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User} from "../models/user";


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

export const signUserToken = async (user: User) => {
  let token = jwt.sign({ userId: user.userId }, secret, {
    expiresIn: "1hr",
  });

  return token;
};