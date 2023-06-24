const express = require("express");
const router = require("./router.js");
const path = require('path');
const expressLayouts = require("express-ejs-layouts");

const port = 3000;

const app = express();

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(express.json());
app.use("./router.js", router);

app.get("/", (req, res) =>{
    res.render('home');
});

app.listen(port, () => {
    console.log("executando servidor");
});