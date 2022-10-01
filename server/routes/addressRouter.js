const Router = require('express');
const router = new Router();
const addressController = require('../controllers/addressController');
const authMiddleware = require('../middleware/authMiddleware');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', addressController.create);
router.get('/', checkRole('admin'), addressController.getAll)

module.exports = router;