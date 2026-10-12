import express from "express";
import Cardapio from "../models/cardapio.js";
import Bebida from "../models/bebidas.js";

const rota = express.Router();

rota.get("/cardapio", async (req, res) => {
  try {
    // Buscando as pizzas do cardápio
    const cardapio = await Cardapio.findAll();

    // Buscando as bebidas
    const bebidas = await Bebida.findAll();

    // Enviando as duas listas para o mesmo EJS
    res.render("cardapio", {
      cardapio,
      bebidas
    });

  } catch (error) {
    console.log(`Ocorreu um erro ao listar o cardápio. Erro: ${error}`);
    res.status(500).send("Erro ao carregar o cardápio.");
  }
});

export default rota;