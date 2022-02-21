// Импортируем класс роутера из Express
const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController'); // Импортируем асинхронный контроллер

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', userController.check);

module.exports = router;