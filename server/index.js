// Включаем dotenv
require('dotenv').config();

// Импортируем cors
const cors = require('cors');

// Импортируем корневой файл роутеров
const router = require('./routes/index');

// Подключаем Express и файл конфигурации .env
const express = require('express');

// Указываем путь до папки со статикой
const path = require('path');

// Импортируем модели сущностей
const models = require('./models/models');

// Подключаем загрузчик файлов
const fileUpload = require('express-fileupload');

// Импортируем подключение к БД
const sequelize = require('./db');

// Импорт обработчика ошибок
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

// Получаем порт для сервера из конфига, если не выбран запускаем на 5000-ом
const PORT = process.env.PORT || 5000;

// Инициализируем Express и иные либы
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

// Обработчик ошибок, последний вызываемый middleware
app.use(errorHandler);



// Запускаем сервер
const start = async () => {
    console.log('kyoServer starting');
    try {
        await sequelize.authenticate(); // Подключаемся к базе
        await sequelize.sync(); // Синхронизируем данные
        app.listen(PORT, () => console.log('kyoServer started on port ' + PORT)); // Если всё ок, сообщаем что сервер успешно запущен
    }
    catch (e) {
        console.log('kyoServer critical error: ' + e);
    }
}
start();