import { Router } from "express";

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
    res.send("message router");
});

export default messageRouter;