const express = require("express");
const router = require("./router.js");
const path = require('path');
const port = 3000;
const app = express();

let monsters = require('./monsters.json');

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(express.json());
app.use("./router.js", router);
app.use(express.static(__dirname + "./../public"));

app.get("/", (req, res) =>{
    res.render('login.ejs');
});

app.get("/home", (req, res) =>{
    res.render('home.ejs', {
        page_name: 'home'
    });
});

app.get("/monsterlist", (req, res) =>{
    res.render('monsterlist.ejs', {
        page_name: 'monsterlist',
        monster_list: monsters
    });
});

/*
var request = require('request');

request.post(
    'getmosnterinfo',
    { json: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);
*/

app.get("/monsterinfo", (req, res) =>{
    res.render('monsterinfo.ejs', {
        monsterinfo: monsters,
        page_name: 'monsterList'
    });
});

app.get("/addmonster", (req, res) =>{
    res.render('addmonster.ejs', {
        page_name : 'addmonster'
    });
});

app.get("/about", (req, res) =>{
    res.render('about.ejs', {
        page_name : 'about'
    });
});

app.listen(port, () => {
    console.log("executando servidor");
});