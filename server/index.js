// Включаем dotenv
require('dotenv').config();

// Подключаем Express и файл конфигурации .env
const express = require('express');

// Импортируем подключение к БД
const sequelize = require('./db');

// Получаем порт из конфига, если не выбран запускаем на 5000
const PORT = process.env.PORT || 5000;

// Инициализируем Express
const app = express();

// Запускаем сервер
const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log('kyoServer started on port ' + PORT));
    }
    catch (e) {
        console.log('Я умер, прости');
        console.log(e);
    }
}
start();