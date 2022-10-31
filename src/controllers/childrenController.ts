import { RequestHandler } from "express";
import { Children } from "../models/children"; 


// get all children

export const getAllChildren: RequestHandler = async (req, res) => {
    Children.findAll().then(response => {
        res.status(200).json(response)
    })

    // let childrenFound = await Parents.findAll();
    // res.status(200).json(childrenFound)

}


// get child by id

export const getChild: RequestHandler = async (req, res) => {
    let childId = req.params.id;

    let childFound = await Children.findByPk(childId).then(response => {
        res.status(200).json(response)
    })


}


// create child
export const createChild: RequestHandler = async (req, res) => {

    let child = req.body;


    if (child.name) {
        try {
            let created = await Children.create(child)
            res.status(201).json(created)
        } catch (err) {
            res.status(400).send();
        }
    } else {
        res.status(400).send();
    }


}


// delete child
export const deleteChild: RequestHandler =async (req, res) => {

    let childId = req.params.id;

    let childFound = await Children.findByPk(childId);

    if (childFound) {
        await Children.destroy({
            where: { childId: childId}
        }).then(response => {
            res.status(200).json();
        })
    } else {
        res.status(404).send();
    }

    
}


// update to update completed- child


export const updateChild: RequestHandler =async (req, res) => {

    let childId = req.params.id;
    let childBody = req.body;

    let childFound = await Children.findByPk(childId);
// console.log(childFound);

    if (childFound) {
        await Children.update(childBody, {
            where: {
                childId: childId
            }
        }).then(response => {
            res.status(200).send(response)
        })
    } else {
        res.status(404).send();
    }


    
}