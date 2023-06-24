const express = require("express");
const router = express.Router();

const clients = require("./controllers/clients");

router.get("/", (req, res) => {
    res.send("Bom dia");
});

router.get("/clients", clients.findAll);
router.post("/clients", clients.addClient);
router.get("/clients/:id", clients.findClient);
router.put("/clients/:id", clients.updateClient);
router.delete("/clients/:id", clients.deleteClient);

module.exports = router;
