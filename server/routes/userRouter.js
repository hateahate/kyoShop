// Импортируем класс роутера из Express
const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController'); // Импортируем асинхронный контроллер
const authMiddleware = require('../middleware/authMiddleware');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);
router.get('/:id', checkRole('admin'), userController.getUser);
router.get('/', checkRole('admin'), userController.getAllUsers);
router.post('/remove', checkRole('admin'), userController.remove);
router.post('/update', authMiddleware, userController.updateUser);

module.exports = router;