const ApiError = require('../error/ApiError');
const { Ticket } = require('../models/models');
class TicketController {
    async create(req, res, next) {
        try {
            let { subject, status, messages, userId } = req.body;
            const ticket = Ticket.create({ subject, status, messages, userId });
            return res.json(ticket);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async getTicket(req, res, next) {
        try {
            let { id } = req.params;
            const ticket = await Ticket.findOne({
                where: { id }
            });
            return res.json(ticket);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async userGetAllTickets(req, res, next) {
        let { userId } = req.params;
        try {
            const tickets = Ticket.findAll({ where: { userId } });
            return res.json(tickets);
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }
    async adminGetAllTickets(req, res, next) {
        try {
            const tickets = Ticket.findAll();
            return res.json(tickets);
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new TicketController();