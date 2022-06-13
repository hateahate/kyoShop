const Router = require('express');
const router = new Router();
const LiveSearchController = require('../controllers/liveSearch');
const checkRole = require('../middleware/checkRoleMiddleware');

router.get('/', LiveSearchController.getAll());

module.exports = router;