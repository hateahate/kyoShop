const Router = require('express');
const router = new Router();
const basketController = require('../controllers/basketController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', basketController.updateBasket);
router.get('/', authMiddleware, basketController.getBasket);
