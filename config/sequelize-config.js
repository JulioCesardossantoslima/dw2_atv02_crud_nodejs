import Sequelize  from "sequelize";

const connection = new Sequelize("mysql", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

export default connection;
