import { RequestHandler } from "express";
import { User } from "../models/user"; 
import { comparePasswords, hashPassword, signUserToken } from "../services/auth";


// get all users

export const getAllUsers: RequestHandler = async (req, res) => {
    User.findAll().then(response => {
        res.status(200).json(response)
    })

    // let userFound = await User.findAll();
    // res.status(200).json(userFound)

}


// get User by id

export const getUser: RequestHandler = async (req, res) => {
    let userId = req.params.id;

    let userFound = await User.findByPk(userId).then(response => {
        res.status(200).json(response)
    })


}


// create User
export const createUser: RequestHandler = async (req, res) => {

    let user = req.body;


    if (user.name) {
        try {
            let created = await User.create(user)
            res.status(201).json(created)
        } catch (err) {
            res.status(400).send();
        }
    } else {
        res.status(400).send();
    }


}


// delete User
export const deleteUser: RequestHandler =async (req, res) => {

    let userId = req.params.id;

    let userFound = await User.findByPk(userId);

    if (userFound) {
        await User.destroy({
            where: { userId: userId}
        }).then(response => {
            res.status(200).json();
        })
    } else {
        res.status(404).send();
    }

    
}


// update to update completed- User


export const updateUser: RequestHandler =async (req, res) => {

    let userId = req.params.id;
    let userBody = req.body;

    let userFound = await User.findByPk(userId);
// console.log(userFound);

    if (userFound) {
        await User.update(userBody, {
            where: {
                userId: userId
            }
        }).then(response => {
            res.status(200).send(response)
        })
    } else {
        res.status(404).send();
    }


    
}

//login Child
export const loginUser: RequestHandler = async (req, res, next) => {
    // Look up user by their username
    let existingUser: User | null = await User.findOne({
      where: { username: req.body.username },
    });
  
    // If user exists, check that password matches
    if (existingUser) {
      let passwordsMatch = await comparePasswords(
        req.body.password,
        existingUser.password
      );
  
      // If passwords match, create a JWT
      if (passwordsMatch) {
        let token = await signUserToken(existingUser);
        res.status(200).json({ token });
      } else {
        res.status(401).json("Invalid password");
      }
    } else {
      res.status(401).json("Invalid username");
    }
  };