//const express = require('express');
//const mongoose = require('mongoose');

const Monsters = require("../models/monsterModel.js");

function findAll(req, res){
    try{
        return Monsters.find();    
    }catch(e){
        res.status(500).json({ e });
    }     
};

function findMonster(req, res){
    console.log(req);
    try{
        return Monsters.findById(req);    
    }catch(e){
        res.status(500).json({ e });
    }  
};

function addMonster(req, res){

    const icone = req.files[0];
    const foto = req.files[1];

    var ele_fire = true;
    var ele_water = true;
    var ele_thunder = true;
    var ele_ice = true;
    var ele_dragon = true;

    var ele_b_fire = true;
    var ele_b_water = true;
    var ele_b_thunder = true;
    var ele_b_ice = true;
    var ele_b_dragon = true;

    var abn_b_poison = true;
    var abn_b_stun = true;
    var abn_b_sleep = true;
    var abn_b_blast = true;
    var abn_b_bleeding = true;
    var abn_b_paralysis = true;

    if(typeof req.body.ele_fire    === 'undefined')       ele_fire = false; 
    if(typeof req.body.ele_water   === 'undefined')      ele_water = false; 
    if(typeof req.body.ele_thunder === 'undefined')    ele_thunder = false; 
    if(typeof req.body.ele_ice     === 'undefined')        ele_ice = false; 
    if(typeof req.body.ele_dragon  === 'undefined')     ele_dragon = false;

    if(typeof req.body.ele_b_fire    === 'undefined')       ele_b_fire = false; 
    if(typeof req.body.ele_b_water   === 'undefined')      ele_b_water = false; 
    if(typeof req.body.ele_b_thunder === 'undefined')    ele_b_thunder = false; 
    if(typeof req.body.ele_b_ice     === 'undefined')        ele_b_ice = false; 
    if(typeof req.body.ele_b_dragon  === 'undefined')     ele_b_dragon = false;  

    if(typeof req.body.abn_b_poison    === 'undefined')    abn_b_poison = false;
    if(typeof req.body.abn_b_stun      === 'undefined')      abn_b_stun = false;
    if(typeof req.body.abn_b_sleep     === 'undefined')     abn_b_sleep = false;
    if(typeof req.body.abn_b_blast     === 'undefined')     abn_b_blast = false;
    if(typeof req.body.abn_b_bleeding  === 'undefined')  abn_b_bleeding = false;
    if(typeof req.body.abn_b_paralysis === 'undefined') abn_b_paralysis = false;

    try{    
        const monster = new Monsters({
            nome:       req.body.nome, 
            icone:      icone.path,
            foto:       foto.path,
            introducao: req.body.introducao, 
            classe:     req.body.classe,
            titulo:     req.body.titulo,
            tamanho:    req.body.tamanho,
            geracao:    req.body.geracao, 
            elemento: {
                fogo:       ele_fire,
                agua:       ele_water,
                trovao:     ele_thunder,
                gelo:       ele_ice,
                dragao:     ele_dragon,
            },
            elementalblights: {
                fireblight:     ele_b_fire,
                waterblight:    ele_b_water,
                thunderblight:  ele_b_thunder,
                iceblight:      ele_b_ice,
                dragonblight:   ele_b_dragon,
            },
            abnomalstatusblights: {
                poison:         abn_b_poison,
                stun:           abn_b_stun,
                sleep:          abn_b_sleep,
                blastblight:    abn_b_blast,
                bleeding:       abn_b_bleeding,
                paralysis:      abn_b_paralysis,
            },
            resistencias: { 
                fogo:       req.body.res_fire,
                agua:       req.body.res_water,
                trovao:     req.body.res_thunder,
                gelo:       req.body.res_ice,
                dragao:     req.body.res_dragon,
            },
        });
        monster.save();
    }catch(e){
        res.status(500).json({ e });
    }
}

async function updateMonster(req, res) {
    await Monsters.update(
        {
            nome: req.body.nome,
            email: req.body.email,
        },
        {
            where: {
                id: req.params.id,
            },
        }
    );
    Monsters.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteMonster(req, res) {
    await Monsters.destroy({
        where: {
            id: req.params.id,
        },
    });
    Monsters.findAll().then((result) => res.json(result));
}

module.exports = { findAll, addMonster, findMonster, updateMonster, deleteMonster };
