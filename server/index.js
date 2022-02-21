// Включаем dotenv
require('dotenv').config();

// Подключаем Express и файл конфигурации .env
const express = require('express');

// Импортируем модели сущностей
const models = require('./models/models');

// Импортируем подключение к БД
const sequelize = require('./db');

// Получаем порт для сервера из конфига, если не выбран запускаем на 5000-ом
const PORT = process.env.PORT || 5000;

// Инициализируем Express
const app = express();

// Запускаем сервер
const start = async () => {
    try {
        await sequelize.authenticate(); // Подключаемся к базе
        await sequelize.sync(); // Синхронизируем данные
        app.listen(PORT, () => console.log('kyoServer started on port ' + PORT)); // Если всё ок, сообщаем что сервер успешно запущен
    }
    catch (e) {
        console.log('Я умер, прости');
        console.log(e);
    }
}
start();