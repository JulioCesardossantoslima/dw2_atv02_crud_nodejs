import express from "express";
const rota = express.Router();
const app = express();

import connection from "./config/sequelize-config.js";
connection.authenticate().then(() => {
  console.log("Conexão com o banco de dados foi realizada com sucesso!")
}).catch((error) => {
  console.log(`Ocorreu um erro ao se conectar com o banco de dados. Erro: ${error}`)
});

// Criando o banco de dados se ele não existir
const DB_NAME = "pizzaria";

connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`)
  .then(() => {
    console.log(`O banco de dados ${DB_NAME} está criado!`);
  })
  .catch((error) => {
    console.log(
      `Ocorreu um erro ao criar banco de dados ${DB_NAME}. Erro: ${error}`
    );
  });

import Sequelize from "sequelize";

const db = new Sequelize("pizzaria", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

await db.authenticate();

console.log("Conectado ao banco pizzaria!");

//Configurando o express para permitir dados através de formlários
app.use(express.urlencoded({ extended: false}));

import cardapioController from "./controllers/cardapioController.js";
import contatoController from "./controllers/contatoController.js";
import promocoesController from "./controllers/promocoesController.js";

// Importando os Models
import Cardapio from "./models/cardapio.js";
import Contato from "./models/contato.js";
import Promocao from "./models/promocoes.js";
import Bebida from "./models/bebidas.js";


// Configurando as rotas
app.use(cardapioController); // Configurando o controlador de cardápio
app.use(contatoController); // Configurando o controlador de contato
app.use(promocoesController); // Configurando o controlador de promoções
// Configurações do Express
app.set("view engine", "ejs");
//Configurar a pasta 'PUBLIC' para arquivos estáticos como CSS e JavaScripts
app.use(express.static("public"));
// Página principal
app.get("/", (req, res) => {
  res.render("index");
});

const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
async function iniciarServidor() {
    try {
        // Testa a conexão com o banco
        await connection.authenticate();
        console.log("Conectado ao banco pizzaria!");

        // Cria as tabelas caso ainda não existam
        await Cardapio.sync();
        await Bebida.sync();

        console.log("Tabelas criadas ou já existentes!");

        // Inicia o servidor depois da sincronização
        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000!");
        });

    } catch (error) {
        console.error("Erro ao conectar ou criar tabelas:", error);
    }
}

iniciarServidor();