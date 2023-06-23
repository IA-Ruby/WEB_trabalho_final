const express = require("express");
const port = 3000;

const app =  express();

app.get("/", (req, res) =>{
    res.send("Ola mundo");
});

app.get("/ufcrussas/:idcurso/:idaluno", (req, res) => {
    res.send("Bem-Vindo a UFC RUSSAS! idcurso:" + req.params.idcurso + "idaluno:" + req.params.idaluno);
});

app.listen(port, () => {console.log("executando servidor")});