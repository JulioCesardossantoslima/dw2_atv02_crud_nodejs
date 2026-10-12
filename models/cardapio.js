// Model Cardapio
import connection from "../config/sequelize-config.js";

import Sequelize from "sequelize";

const Cardapio = connection.define('cardapio', {
   
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


export default Cardapio;