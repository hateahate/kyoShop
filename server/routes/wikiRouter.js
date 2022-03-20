const Router = require('express');
const router = new Router();
const wikiController = require('../controllers/wikiController');

router.post('/', wikiController.create);
router.get('/', wikiController.getAll);
router.get('/:id', wikiController.getOne);
router.post('/update', wikiController.update);
router.post('/remove', wikiController.remove);

module.exports = router;