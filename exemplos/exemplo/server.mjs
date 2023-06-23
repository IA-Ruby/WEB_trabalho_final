import express from "express";
import routes from "./routes.js";
import db from "./db.js"

const app = express();

app.use(express.json());
app.use(routes);

db.sync(() => console.log(`Database connected: ${process.env.DB_NAME}`));

app.listen(3000, () => console.log("Server Start at 3000"));
