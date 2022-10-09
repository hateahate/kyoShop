const { Basket } = require('../models/models')
const ApiError = require('../error/ApiError');
const { mailSender } = require('../middleware/mailSenderMiddleware');

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
            mailSender({
                from: '"Fred Foo 👻" <mailtransport@vitaforest.kz>', // sender address
                to: "stepanpavlenko@icloud.com", // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Hello world?</b>", // html body
            })
            return res.json(basket);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new BasketController();