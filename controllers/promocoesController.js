import express from "express";
import Promocao from "../models/promocoes.js";
const rota = express.Router();

rota.get("/", (req, res) => {
  Promocao.findAll()
    .then((promocoes) => {
      res.render("promocoes", {
        promocoes: promocoes,
      });
    })
    .catch((error) =>
      console.log(`Ocorreu um erro ao listar as promoções. Erro ${error}`),
    );
});

export default rota;