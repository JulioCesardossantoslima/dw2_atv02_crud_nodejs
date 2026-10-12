import express from "express";
import Contato from "../models/contato.js";
import Vaga from "../models/vagas.js";
const rota = express.Router();

rota.get("/", async (req, res) => {
    try {
        const contatos = await Contato.findAll();
        const vagas = await Vaga.findAll();

        res.render("contato", {
            contatos,
            vagas
        });
    } catch (error) {
        console.error("Erro ao listar os produtos:", error);
        res.status(500).send("Erro ao carregar o cardápio.");
    }
});

export default rota;