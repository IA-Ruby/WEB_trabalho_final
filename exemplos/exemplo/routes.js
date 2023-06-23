import express from "express";
import clients from "./controllers/clients.js";

const routes = express.Router();

routes.get("/", (req, res) => {
    return res.json({ name: "John Doe" });
});

routes.get("/clients", clients.findAll);
routes.post("/clients", clients.addClient);
routes.get("/clients/:id", clients.findClient);
routes.put("/clients/:id", clients.updateClient);
routes.delete("/clients/:id", clients.deleteClient);

export { routes as default };