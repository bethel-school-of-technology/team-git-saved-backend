"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let express = require('express');
const app = express();
app.get("/", (req, res) => {
    return res.send("Hello world");
});
app.post('/api/blogs', (req, res) => {
    console.log(req.body);
    return res.sendStatus(200);
});
app.listen(5500, () => {
    console.log("Application listening at http://localhost:5500");
});
