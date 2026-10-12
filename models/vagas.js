// Model Vagas
import connection from "../config/sequelize-config.js";

import Sequelize from "sequelize";

const Vaga = connection.define('vagas', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull: false
    },
    status:{  
        type: Sequelize.STRING,
        allowNull: false
    }
})

Vaga.sync({force: false})

export default Vaga;