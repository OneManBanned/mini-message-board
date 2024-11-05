import { Router } from "express";

const messageRouter = Router();

messageRouter.post("/", (req, res) => {
    const {user, message} = req.body
    res.redirect("/")
})

messageRouter.get("/", (req, res) => {
    res.render("form", {layout: "index"});
});


export default messageRouter;
