const express = require("express");
const routes = require("./routes.js");
const port = 3000;

const app =  express();

app.use(express.json());

app.get("/", (req, res) =>{
    res.sendFile('views/home/home.js', {root: __dirname});
});

app.listen(port, () => {
    console.log("executando servidor");
});