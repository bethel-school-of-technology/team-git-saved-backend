import { RequestHandler } from "express";
import { Parents } from "../models/parent"; 


// get all parents

export const getAllParents: RequestHandler = async (req, res) => {
    Parents.findAll().then(response => {
        res.status(200).json(response)
    })

    // let parentsFound = await Parents.findAll();
    // res.status(200).json(parentsFound)

}


// get parent by id

export const getParent: RequestHandler = async (req, res) => {
    let parentId = req.params.id;

    let parentFound = await Parents.findByPk(parentId).then(response => {
        res.status(200).json(parentFound)
    })


}


// create parent
export const createParent: RequestHandler = async (req, res) => {

    let parent = req.body;


    if (parent.title) {
        try {
            let created = await Parents.create(parent)
            res.status(201).json(created)
        } catch (err) {
            res.status(400).send();
        }
    } else {
        res.status(400).send();
    }


}


// delete parent
export const deleteParent: RequestHandler =async (req, res) => {

    let parentId = req.params.id;

    let parentFound = await Parents.findByPk(parentId);

    if (parentFound) {
        await Parents.destroy({
            where: { parentId: parentId}
        }).then(response => {
            res.status(200).json();
        })
    } else {
        res.status(404).send();
    }

    
}


// update to update completed Parent


export const updateParent: RequestHandler =async (req, res) => {

    let parentId = req.params.id;
    let taskBody = req.body;

    let parentFound = await Parents.findByPk(parentId);
// console.log(parentFound);

    if (parentFound) {
        await Parents.update(taskBody, {
            where: {
                parentId: parentId
            }
        }).then(response => {
            res.status(200).send(response)
        })
    } else {
        res.status(404).send();
    }


    
}