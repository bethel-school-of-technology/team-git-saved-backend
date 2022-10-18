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
exports.updateBlog = exports.deleteBlog = exports.createBlog = exports.getBlog = exports.getAllBlogs = void 0;
const blogs_1 = require("../models/blogs");
//get All blogs
const getAllBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    blogs_1.Blogs.findAll().then(response => {
        res.status(200).json(response);
    });
});
exports.getAllBlogs = getAllBlogs;
// get blog by id
const getBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let blogId = req.params.id;
    let blogFound = yield blogs_1.Blogs.findByPk(blogId).then(response => {
        res.status(200).json(blogFound);
    });
});
exports.getBlog = getBlog;
// create blog
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let blog = req.body;
    if (blog.title) {
        try {
            let created = yield blogs_1.Blogs.create(blog);
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
exports.createBlog = createBlog;
// delete blog
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let blogId = req.params.id;
    let blogFound = yield blogs_1.Blogs.findByPk(blogId);
    if (blogFound) {
        yield blogs_1.Blogs.destroy({
            where: { blogId: blogId }
        }).then(response => {
            res.status(200).json();
        });
    }
    else {
        res.status(404).send();
    }
});
exports.deleteBlog = deleteBlog;
// update Blog
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let blogId = req.params.id;
    let taskBody = req.body;
    let blogFound = yield blogs_1.Blogs.findByPk(blogId);
    // console.log(parentFound);
    if (blogFound) {
        yield blogs_1.Blogs.update(taskBody, {
            where: {
                blogId: blogId
            }
        }).then(response => {
            res.status(200).send(response);
        });
    }
    else {
        res.status(404).send();
    }
});
exports.updateBlog = updateBlog;
