require('dotenv').config();

const { POSTGRES_HOST, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DATABASE, POSTGRES_PORT } = process.env;
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    host: POSTGRES_HOST,
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DATABASE,
    dialect: 'postgres',
    port: POSTGRES_PORT,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

sequelize.authenticate().then(() => {
    console.log(`Connection has been established successfully.`);
}).catch((err) => {
    console.log('Unable to connect to the database:', err);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./userModel')(sequelize, DataTypes);

module.exports = db;