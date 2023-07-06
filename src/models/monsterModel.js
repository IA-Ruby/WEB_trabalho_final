const mongoose = require('mongoose');

const monsterSchema = new mongoose.Schema({
    nome: String, 
    icone: String,
    foto: String,
    introducao: String, 
    classe: String,
    titulo: String,
    tamanho: String,
    geracao: String, 
    elemento: {
        fogo: Boolean,
        agua: Boolean,
        trovao: Boolean,
        gelo: Boolean,
        dragao: Boolean,
    },
    elementalblights: {
        fireblight: Boolean,
        waterblight: Boolean,
        thunderblight: Boolean,
        iceblight: Boolean,
        dragonblight: Boolean,
    },
    abnomalstatusblights: {
        poison: Boolean,
        stun: Boolean,
        sleep: Boolean,
        blastblight: Boolean,
        bleeding: Boolean,
        paralysis: Boolean,
    },
    resistencias: { 
        fogo: Number,
        agua: Number,
        trovao: Number,
        gelo: Number,
        dragao: Number,
    },
});

module.exports = mongoose.model('Monster', monsterSchema);