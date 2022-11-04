const { Order, Product } = require('../models/models');
const ApiError = require('../error/ApiError');
const { Sequelize } = require('../db');
const { Op } = Sequelize;

class OrderController {
    async create(req, res, next) {
        try {
            let { status, items, userId } = req.body;
            let orderItems = JSON.parse(items);
            let orderItemsIds = [];
            // parse items id
            orderItems.map((item) => {
                orderItemsIds.push(item.id)
            })
            // fetch all products with ids
            const products = await Product.findAll({ where: { id: { [Op.in]: orderItemsIds } } });
            // convert to json from sequelize instance
            let productsList = JSON.stringify(products)
            // reparse list from string to object
            productsList = JSON.parse(productsList)
            console.log(productsList)
            await productsList.map((item) => {
                let currentItemId = item.id;
                // find item in order with equals ids and update products qty values in database
                orderItems.find((elem) => {
                    if (elem.id === currentItemId) {
                        item.stock = item.stock - elem.qty;
                        Product.update({ stock: item.stock }, { where: { id: item.id } })
                        console.log(item.stock)
                    }
                })
            })
            // create order
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
            const { id } = req.params;
            // find order in db and status check
            const order = await Order.findOne({ where: { id } });
            // parse items from sequelize instanse to json string
            let orderItems = JSON.stringify(order.items);
            // reparse to object
            orderItems = JSON.parse(orderItems);
            // list of item ids
            let orderItemsIds = [];
            // check order status before removing, cause not closed order items need to return in stock
            if (order.status === 'Closed') {
                // if status 'Closed' remove permamently
                await Order.destroy({ where: { id } });
                return res.json(`Order with id ${id} removed successfully`);
            }
            else {
                // mapping of orderItems to get item ids
                orderItems.map((item) => {
                    orderItemsIds.push(item.id)
                })
                // fetching products with ids from order
                const products = await Product.findAll({ where: { id: { [Op.in]: orderItemsIds } } });
                // convert to json from sequelize instance
                let productsList = JSON.stringify(products)
                // reparse list from string to object
                productsList = JSON.parse(productsList)
                console.log(productsList)
                await productsList.map((item) => {
                    let currentItemId = item.id;
                    // find item in order with equals ids and update products qty values in database
                    orderItems.find((elem) => {
                        if (elem.id === currentItemId) {
                            item.stock = item.stock + elem.qty;
                            Product.update({ stock: item.stock }, { where: { id: item.id } })
                            console.log(item.stock)
                        }
                    })
                })
            }
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