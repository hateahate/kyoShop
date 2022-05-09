const Router = require('express');
const router = new Router();
const postCategoryController = require('../controllers/postCategoryController');

router.post('/', postCategoryController.create);
router.get('/', postCategoryController.getAll);
router.post('/update', postCategoryController.update);
router.post('/remove', postCategoryController.remove);

module.exports = router;