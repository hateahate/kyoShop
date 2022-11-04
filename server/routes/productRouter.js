const Router = require('express');
const router = new Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', productController.create);
router.get('/', productController.getAll);
router.get('/:id', productController.getOne);
router.post('/update', productController.update);
router.post('/remove', productController.remove);

module.exports = router;