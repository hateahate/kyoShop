// Инициализируем Sequelize
const { Sequelize } = require('sequelize');

// Подключаемся к базе данных
module.exports = new Sequelize(
    process.env.DB_NAME, // Имя базы данных
    process.env.DB_USER, // Имя пользователя базы
    process.env.DB_PASSWORD, // Пароль
    {
        dialect: 'postgres',
        host: process.env.DB_HOST, // Имя/адрес хоста БД
        port: process.env.DB_PORT // Порт БД
    }
);