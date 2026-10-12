import express from "express";
const rota = express.Router();
import Promocao from "../models/promocoes.js";

// Página promocoes
rota.get("/promocoes", (req, res) => {
  // Selecionando todas as promocoes do banco de dados
  Promocao.findAll()
    .then((promocao) => {
      // Enviando a lista de promocoes para a página HTML
      res.render("promocoes", {
        promocoes: promocao,
      });
    })
    .catch(error =>
      console.log(`Ocorrou um erro ao listar as promocoes. Erro ${error}`)
    );
});

export default rota;
