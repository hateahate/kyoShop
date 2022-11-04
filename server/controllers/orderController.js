const { Order, Product } = require('../models/models');
const ApiError = require('../error/ApiError');
const { Sequelize } = require('../db');
const { Op } = Sequelize;

class OrderController {
    async create(req, res, next) {
        try {
            let { status, items, userId } = req.body;
            let jsonItems = JSON.parse(items);
            let itemsId = [];
            let descQty = [];
            // parse items id
            jsonItems.map((item) => {
                itemsId.push(item.id)
            })
            // fetch all products with ids
            const products = await Product.findAll({ where: { id: { [Op.in]: itemsId } } });
            // convert to json from sequelize instance
            let productsList = JSON.stringify(products)
            // reparse list from string to object
            productsList = JSON.parse(productsList)
            console.log(productsList)
            await productsList.map((item) => {
                let listItemId = item.id;
                jsonItems.find((elem) => {
                    if (elem.id === listItemId) {
                        item.stock = item.stock - elem.qty;
                        Product.update({ stock: item.stock }, { where: { id: item.id } })
                        console.log(item.stock)
                    }

                })
                console.log(productsList)
            })
            console.log(qtysfromlist)
            // create order
            const order = await Order.create({ status, items, userId });
            return res.json('yep');
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