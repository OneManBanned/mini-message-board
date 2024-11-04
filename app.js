import express from "express"
import messageRouter from "./routes/messageRouter.js";
import indexRouter from "./routes/indexRouter.js";
import pkg from "express-handlebars"
import { fileURLToPath } from "url"
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const handlebars = pkg.engine

const PORT = process.env.PORT || 3000;
const app = express();

app.set("view engine", "hbs")
app.engine("hbs", handlebars({
    layoutDirs: __dirname + 'views/layouts/',
    extname: 'hbs'
}))

app.use("/", indexRouter);
app.use("/new", messageRouter)

app.listen(PORT, () => console.log(`listening on port http://localhost:${PORT}`));
