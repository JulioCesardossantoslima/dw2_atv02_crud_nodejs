// Model Promocao
// Um model é uma representação de uma entidade do sistema (tabela)

//  Importando o arquivo de conexão
import connection from "../config/sequelize-config.js";

// Importando a biblioteca Sequelize
import Sequelize from "sequelize";


const Promocao = connection.define('promocoes', {
    // Atributos da tabela 'promocao'
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

Promocao.sync({force: false})

export default Promocao;