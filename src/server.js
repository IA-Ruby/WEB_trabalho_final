const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
mongoose.set('strictQuery', false);

const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION;

const routes = require("./routes/routes.js");
app.use('/', routes);

const path = require('path');
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(__dirname + "./../public"));

const start = async() => {
    try{    
        await mongoose.connect(CONNECTION);
        
        app.listen(PORT, () => {
            console.log("Executando servidor na porta: " + PORT);
        });
    }catch(e) {
        console.log(e.message);
    }
};

start();
