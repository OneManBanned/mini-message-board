import { Router } from "express";
import pkg from "express-handlebars"
import messages from "../db.js"

const indexRouter = Router();

const create = pkg.create
const hbs = create({
    helpers: {
        val() {
            let string = ''
            messages.map((message, i) => string+=`<p>${message.text} ${message.user} ${message.added}<a href="new/${i}">open</a></p>`)
            return string;
        },
    form() { return "/new"}
    }
})

indexRouter.get("/", (req, res) => {
    res.render("main", {layout: "index", helpers: { messages: hbs.helpers.val(), form: hbs.helpers.form()}});
});

export default indexRouter;
