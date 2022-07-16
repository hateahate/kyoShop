const Router = require('express');
const router = new Router();
const categoryController = require('../controllers/categoryController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', categoryController.create);
router.get('/', categoryController.getAll);
router.post('/update', checkRole('ADMIN'), categoryController.update);
router.post('/remove', checkRole('ADMIN'), categoryController.remove);

module.exports = router;