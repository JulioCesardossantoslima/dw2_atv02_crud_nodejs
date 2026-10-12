// Model Contato
import connection from "../config/sequelize-config.js";

import Sequelize from "sequelize";

const Contato = connection.define('contatos', {
   
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
    }
})


export default Contato;