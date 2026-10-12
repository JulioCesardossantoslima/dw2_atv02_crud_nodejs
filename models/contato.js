// Model Contato
// Um model é uma representação de uma entidade do sistema (tabela)

// Importando o arquivo de conexão
import connection from "../config/sequelize-config.js";

// Importando a biblioteca Sequelize
import Sequelize from "sequelize";

const Contato = connection.define('contatos', {
    // Atributos da tabela 'contato'
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco:{
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone:{
        type: Sequelize.STRING,
        allowNull: false
    },
})

Contato.sync({force: false})

export default Contato;

