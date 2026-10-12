import express from "express";
import Cardapio from "../models/cardapio.js";
import Bebida from "../models/bebidas.js";
const rota = express.Router();

rota.get("/", async (req, res) => {
    try {
        const cardapios = await Cardapio.findAll();
        const bebidas = await Bebida.findAll();

        res.render("cardapio", {
            cardapios: cardapios,
            bebidas: bebidas
        });

    } catch (error) {
        console.error("Erro ao carregar o cardápio:", error);
        res.status(500).send("Erro ao carregar o cardápio.");
    }
});

export default rota;