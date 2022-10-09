const Router = require('express');
const router = new Router();
const basketController = require('../controllers/basketController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', basketController.updateBasket);
router.get('/:userId', authMiddleware, basketController.getBasket);

module.exports = router;