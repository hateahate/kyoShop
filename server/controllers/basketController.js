const { Basket } = require('../models/models')
const ApiError = require('../error/ApiError');

class BasketController {
    async updateBasket(req, res, next) {
        try {
            let { items, userId } = req.body;
            const basket = await Basket.update({ items }, { where: { userId } });
            return res.json(basket);
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }
    async getBasket(req, res, next) {
        try {
            const { userId } = req.params;
            const basket = await Basket.findOne({ where: { userId } });
            return res.json(basket);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new BasketController();