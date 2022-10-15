const Router = require('express');
const router = new Router();
const categoryController = require('../controllers/categoryController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', categoryController.create);
router.get('/', categoryController.getAll);
router.post('/update', checkRole('admin'), categoryController.update);
router.post('/remove', checkRole('admin'), categoryController.remove);

module.exports = router;