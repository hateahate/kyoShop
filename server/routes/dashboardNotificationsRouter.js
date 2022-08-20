const Router = require('express');
const router = new Router();
const dashboardController = require('../controllers/dashboardController');

router.post('/', dashboardController.create);
router.get('/', companyController.getAll);

module.exports = router;