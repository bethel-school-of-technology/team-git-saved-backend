"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const parentController_1 = require("./controllers/parentController");
const models_1 = require("./models");
const parentRoutes_1 = __importDefault(require("./routes/parentRoutes"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "../src/public")));
// Setting our view engine as Handlebars
app.set("view engine", "hbs");
app.set("views", path_1.default.join(__dirname, "../src/views"));
app.set("view options", { layout: "layout" });
// TODO: Add routing middleware here
app.use("/parents", parentRoutes_1.default);
app.use("/", parentController_1.defaultParent);
app.use((req, res, next) => {
    res.status(404).render("error", {
        message: "This is not the URL you are looking for!",
    });
});
// Syncing our database
models_1.db.sync().then(() => {
    console.info("connected DB");
});
app.listen(3001);
