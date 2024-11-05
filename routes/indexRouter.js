import { Router } from "express";
import pkg from "express-handlebars"

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const create = pkg.create
const hbs = create({
    helpers: {
        val() {
            let string = ''
            messages.map(message => string+=`<p>${message.text} ${message.user} ${message.added}</p>`)
            return string;
        },
    }
})

indexRouter.get("/", (req, res) => {
    res.render("main", {layout: "index", helpers: { messages: hbs.helpers.val() }});
});

export default indexRouter;
