import { Router } from "express";

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

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render("main", {layout: "index"});
});

export default indexRouter;