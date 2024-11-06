import { Router } from "express";
import messages from "../db.js"
import pkg from "express-handlebars"

const messageRouter = Router();

const create = pkg.create
const hbs = create({
    helpers: {
        message(id) {
            let string = '';
            const { user, text, added} = messages[id];
            string+=`${user} ${text} ${added}`;
            return string;
        }
    }
})

messageRouter.post("/", (req, res) => {
    const {user, message} = req.body
    messages.push({user: user, text: message, added: new Date() })
    res.redirect("/")
})

messageRouter.get("/:id", (req, res) => {
    console.log(req.params)
    const { id } = req.params;
    res.render("message", {layout: "index", helpers: { post: hbs.helpers.message(id) }});
});

messageRouter.get("/", (req, res) => {
    res.render("form", {layout: "index"});
});



export default messageRouter;
