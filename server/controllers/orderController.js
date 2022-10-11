const { Order } = require('../models/models');
const ApiError = require('../error/ApiError');

class OrderController {
    async create(req, res, next) {
        try {
            let { status, items, userId } = req.body;
            const order = await Order.create({ status, items, userId });
            return res.json(order);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }

    }
    async getOne(req, res, next) {
        let { id } = req.body
        try {
            const order = await Order.findOne({ where: { id } });
            return res.json(order)
        }
        catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }
    async getAllByUserId(req, res, next) {
        try {
            let { userId } = req.body;
            const order = await Order.findAll({ where: { userId } });
            return res.json(order);
        }
        catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async remove(req, res, next) {
        try {
            let { id } = req.body;
            await Order.destroy({ where: { id } });
            return res.json(`Order with id ${id} removed successfully`);
        }
        catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async update(req, res, next) {
        try {
            let { id, status, items, userId } = req.body;
            const order = await Order.update({ status, items, userId }, { where: { id } })
            return res.json(order);
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new OrderController();