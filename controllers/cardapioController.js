import express from "express";
import Cardapio from "../models/contato.js";
const rota = express.Router();

rota.get("/cardapio", (req, res) => {
  // Selecionando todos os contatos do banco de dados
  Cardapio.findAll()
    .then((cardapio) => {
      // Enviando a lista de contatos para a página HTML
      res.render("cardapio", {
        cardapio: cardapio,
      });
    })
    .catch(error =>
      console.log(`Ocorrou um erro ao listar o cardápio. Erro ${error}`)
    );
});
export default rota;
