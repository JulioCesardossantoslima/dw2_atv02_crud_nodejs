// Model Promos
import connection from "../config/sequelize-config.js";

import Sequelize from "sequelize";

const Promocao = connection.define('promocoes', {
   
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull: false
    },
    preco:{
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

export default Promocao;