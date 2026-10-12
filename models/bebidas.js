
import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Bebida = connection.define(
  "Bebida",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    preco: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    imagem: {
      type: Sequelize.STRING(255),
      allowNull: true
    }
  },
  {
    tableName: "bebidas",
    timestamps: false
  }
);

export default Bebida;