import express from "express";
import Contato from "../models/contato.js";
const rota = express.Router();

rota.get("/contatos", (req, res) => {
  // Selecionando todos os contatos do banco de dados
  Contato.findAll()
    .then((contatos) => {
      // Enviando a lista de contatos para a página HTML
      res.render("contatos", {
        contatos: contatos,
      });
    })
    .catch(error =>
      console.log(`Ocorrou um erro ao listar os contatos. Erro ${error}`)
    );
});
export default rota;
