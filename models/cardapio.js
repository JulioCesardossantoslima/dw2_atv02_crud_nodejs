// Model Cardapio
// Um model é uma representação de uma entidade do sistema (tabela)

//  Importando o arquivo de conexão
import connection from "../config/sequelize-config.js";

// Importando a biblioteca Sequelize
import Sequelize from "sequelize";

const Cardapio = connection.define('cardapio', {
    // Atributos da tabela 'cardapio'
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    categoria:{
        type: Sequelize.STRING,
        allowNull: false
    }
    
})

Cardapio.sync({force: false})

export default Cardapio;