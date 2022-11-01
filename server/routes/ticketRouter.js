const Router = require('express');
const router = new Router();
const ticketController = require('../controllers/ticketController');
const authMiddleware = require('../middleware/authMiddleware');
const checkRole = require('../middleware/checkRoleMiddleware');

router.get('/', ticketController.adminGetAllTickets);
router.get('/user/:userId', authMiddleware, ticketController.userGetAllTickets);
router.post('/add-new', ticketController.create);
router.get('/:id', authMiddleware, ticketController.getTicket);
router.post('/update', authMiddleware, ticketController.addMessage);
module.exports = router;