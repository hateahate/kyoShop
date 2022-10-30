const Router = require('express');
const router = new Router();
const ticketController = require('../controllers/ticketController');
const authMiddleware = require('../middleware/authMiddleware');
const checkRole = require('../middleware/checkRoleMiddleware');

router.get('/', checkRole('admin'), ticketController.adminGetAllTickets);
router.get('/user/:userId', checkRole('user'), ticketController.userGetAllTickets);
router.post('/add-new', authMiddleware, ticketController.create);
router.get('/:id', authMiddleware, ticketController.getTicket);
router.post('/update', authMiddleware, ticketController.addMessage);
module.exports = router;