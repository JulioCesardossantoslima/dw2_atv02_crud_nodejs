import connection from "../config/sequelize-config.js";
import Sequelize from "sequelize";

const Bebida = connection.define(
    "Bebida",
    {
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        preco: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        tableName: "bebidas",
        timestamps: false
    }
);

export default Bebida;