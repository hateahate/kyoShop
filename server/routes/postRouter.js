const Router = require('express');
const router = new Router();
const postController = require('../controllers/postController');

router.post('/', postController.create);
router.get('/', postController.getAll);
router.get('/:id', postController.getOne);
router.post('/update', postController.update);
router.post('/remove', postController.remove);

module.exports = router;