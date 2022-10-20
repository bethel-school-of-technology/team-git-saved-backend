import { RequestHandler, response } from "express";
import { Blogs } from "../models/blogs";

//get All blogs

export const getAllBlogs: RequestHandler = async (req, res) => {
    Blogs.findAll().then(response => {
        res.status(200).json(response)
    })
}



// get blog by id

export const getBlog: RequestHandler = async (req, res) => {
    let blogId = req.params.id;

    let blogFound = await Blogs.findByPk(blogId).then(response => {
        res.status(200).json(blogFound)
    })
}


// create blog
export const createBlog: RequestHandler = async (req, res) => {

    let blog = req.body;


    if (blog.title) {
        try {
            let created = await Blogs.create(blog)
            res.status(201).json(created)
        } catch (err) {
            res.status(400).send();
        }
    } else {
        res.status(400).send();
    }


}


// delete blog
export const deleteBlog: RequestHandler =async (req, res) => {

    let blogId = req.params.id;

    let blogFound = await Blogs.findByPk(blogId);

    if (blogFound) {
        await Blogs.destroy({
            where: { blogId: blogId}
        }).then(response => {
            res.status(200).json();
        })
    } else {
        res.status(404).send();
    }

    
}


// update Blog


export const updateBlog: RequestHandler =async (req, res) => {

    let blogId = req.params.id;
    let taskBody = req.body;

    let blogFound = await Blogs.findByPk(blogId);
// console.log(parentFound);



    if (blogFound) {
        await Blogs.update(taskBody, {
            where: {
                blogId: blogId
            }
        }).then(response => {
            res.status(200).send(response)
        })
    } else {
        res.status(404).send();
    }


    
}
