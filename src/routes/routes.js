const express = require('express');
router = express.Router();
const monsters = require('../controllers/monster.js');

//const bodyParser = require('body-parser');
//var urlencodedParser = bodyParser.urlencoded({extended: false});

const upload = require('../config/multer.js');

router.get("/", (req, res) =>{
    res.render('../views/login.ejs');
});

router.get("/home", (req, res) =>{
    res.render('home.ejs', {
        page_name: 'home'
    });
});

router.get("/monsterlist", async (req, res) =>{
    const result = await(monsters.findAll());
    res.render('monsterlist.ejs', {
        page_name: 'monsterlist',
        monster_list: result
    });
});

const url = require('url');
router.get("/monsterinfo/:monsterid", async(req, res) =>{
    res.redirect(url.format({
        pathname:"/monsterinfo",
        query: {
            monsterid: req.params.monsterid,
        }
    }))
});

router.get("/monsterinfo", async(req, res) =>{
    console.log(req.query.monster);
    const result = await(monsters.findMonster(req.query.monsterid));
    res.render('monsterinfo.ejs', {
        page_name: 'monsterinfo',
        monster: result
    });
});

router.get("/addmonster", (req, res) =>{
    res.render('addmonster.ejs', {
        page_name : 'addmonster'
    });
});

router.post("/addmonster", upload.array("fotos", 2), monsters.addMonster);

router.get("/about", (req, res) =>{
    res.render('about.ejs', {
        page_name : 'about'
    });
});

module.exports = router;
