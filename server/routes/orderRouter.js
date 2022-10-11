const Router = require('express');
const router = new Router();
const orderController = require('../controllers/orderController');

router.post('/', orderController.create);
router.get('/:id', orderController.getOne);
router.get('/:userId', orderController.getAllByUserId)
router.post('/update', orderController.update);
router.post('/remove', orderController.remove);

module.exports = router;