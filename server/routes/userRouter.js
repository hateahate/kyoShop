// Импортируем класс роутера из Express
const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController'); // Импортируем асинхронный контроллер
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);
router.get('/', userController.getUsers);

module.exports = router;