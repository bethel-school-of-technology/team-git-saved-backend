"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogFactory = exports.Blogs = void 0;
const sequelize_1 = require("sequelize");
class Blogs extends sequelize_1.Model {
}
exports.Blogs = Blogs;
function BlogFactory(sequelize) {
    Blogs.init({
        blogId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        headline: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        content: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        tableName: "blogs",
        sequelize
    });
}
exports.BlogFactory = BlogFactory;
;
