import express from "express";
import { Sequelize } from "sequelize";

import connection from "./config/sequelize-config.js";

import cardapioController from "./controllers/cardapioController.js";
import promocoesController from "./controllers/promocoesController.js";
import contatoController from "./controllers/contatoController.js";

import Bebida from "./models/bebidas.js";
import Cardapio from "./models/cardapio.js";
import Promocao from "./models/promocoes.js";
import Contato from "./models/contato.js";
import Vaga from "./models/vagas.js";

const app = express();

const conexaoInicial = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "mysql",
    timezone: "-03:00"
});


app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/cardapio", cardapioController);
app.use("/promocoes", promocoesController);
app.use("/contato", contatoController);

app.get("/", (req, res) => {
    res.render("index");
});

const port = 8080;

async function iniciarServidor() {
    try {
        await conexaoInicial.authenticate();

        await conexaoInicial.query(
            "CREATE DATABASE IF NOT EXISTS pizzaria"
        );

        console.log("Banco pizzaria criado ou já existente!");

        await conexaoInicial.close();

        await connection.authenticate();

        console.log("Conexão com pizzaria realizada!");

        await Cardapio.sync();
        await Bebida.sync();
        await Promocao.sync();
        await Contato.sync();
        await Vaga.sync();

        console.log("Todas as tabelas foram verificadas!");

        app.listen(port, () => {
            console.log(
                `Servidor iniciado em http://localhost:${port}`
            );
        });

    } catch (error) {
        console.error("Erro ao iniciar a aplicação:", error);

        await conexaoInicial.close().catch(() => {});
    }
}

iniciarServidor();