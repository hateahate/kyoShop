const uuid = require('uuid');
const path = require('path');
const { Product, ProductInfo, Attribute } = require('../models/models');
const ApiError = require('../error/ApiError');
const { Model } = require('sequelize');
const sequelize = require('../db');
const queryInterface = sequelize.getQueryInterface();
const { DataTypes } = require('sequelize');
class ProductController {
    async create(req, res, next) {
        try {
            const { title, price, status, stock, moq, qty_step, sku, description, category, productInfo } = req.body;
            if (req.files) {
                const { img } = req.files;
                let fileName = uuid.v4() + ".jpg";
                img.mv(path.resolve(__dirname, '..', 'static', fileName));

                if (productInfo) {
                    productInfo = JSON.parse(productInfo);
                    productInfo.forEach(i => {
                        ProductInfo.create({
                            title: i.title,
                            description: i.description,
                            productId: Product.id
                        })
                    });
                }

                const product = await Product.create({ title, price, category, status, stock, sku, moq, qty_step, description, img: fileName });
                return res.json(product);
            }
            else {
                if (productInfo) {
                    productInfo = JSON.parse(productInfo);
                    productInfo.forEach(i => {
                        ProductInfo.create({
                            title: i.title,
                            description: i.description,
                            productId: Product.id
                        })
                    });
                }

                const product = await Product.create({ title, price, category, status, sku, stock, moq, qty_step, description });
                return res.json(product);
            }
        }
        catch (e) {
            next(ApiError.badRequest(e.message)); // Если ошибка возвращаем сообщение об ошибке
        }
    }
    async getAll(req, res) {
        let { category, limit, page, isAuth } = req.query;
        console.log(isAuth)
        page = page || 1; // Создаем пагинацию получения товаров, одна страница по-умолчанию если не указано другого.
        limit = limit || 9; // Лимит товаров на странице.
        let offset = page * limit - limit; // При заданном лимите пилим на странцы.
        let products;
        if (isAuth) {
            if (!category) {
                products = await Product.findAndCountAll({ limit, offset });
            }
            if (category) {
                products = await Product.findAndCountAll({ where: { category }, limit, offset }); // Ищем товары в базе с заданным ID категории.
            }
            return res.json(products);
        }
        else {
            if (!category) {
                products = await Product.findAndCountAll({ limit, offset, attributes: ['title', 'sku', 'status', 'img'] });
            }
            if (category) {
                products = await Product.findAndCountAll({ where: { category }, limit, offset, attributes: ['title', 'sku', 'status'] }); // Ищем товары в базе с заданным ID категории.
            }
            return res.json(products)
        }
    }
    async getOne(req, res) {
        const { id } = req.params; // Получаем ID из запроса
        const product = await Product.findOne({
            where: { id },
            include: [{ model: ProductInfo, as: 'info' }, { model: Attribute, as: 'attributes' }]
        }); // Получаем товар с заданным айди и возвращаем
        return res.json(product);
    }
    async update(req, res, next) {
        try {
            const { id, title, price, status, stock, moq, sku, qty_step, description, category, productInfo } = req.body; // Получаем данные о создаваемом товаре из GET-запроса
            if (req.files) {
                const { img } = req.files; // Получаем изображение
                let fileName = uuid.v4() + ".jpg"; // Генерируем уникальное название изображению
                img.mv(path.resolve(__dirname, '..', 'static', fileName)); // Загружаемые изображения кидаем в директорию static на сервере и даём уникальное имя

                if (productInfo) {
                    productInfo = JSON.parse(productInfo);
                    productInfo.forEach(i => {
                        ProductInfo.update({
                            title: i.title,
                            description: i.description,
                            productId: Product.id
                        })
                    });
                }

                const product = await Product.update({ title, price, category, status, sku, stock, moq, qty_step, description, img: fileName }, { where: { id } });
                return res.json(product); // На основе полученных данных пытаемся создать/создаём товар.
            }
            else {
                if (productInfo) {
                    productInfo = JSON.parse(productInfo);
                    productInfo.forEach(i => {
                        ProductInfo.update({
                            title: i.title,
                            description: i.description,
                            productId: Product.id
                        })
                    });
                }

                const product = await Product.update({ title, price, category, status, sku, stock, moq, qty_step, description }, { where: { id } });
                return res.json(product);
            }
        }
        catch (e) {
            next(ApiError.badRequest(e.message)); // Если ошибка возвращаем сообщение об ошибке
        }
    }
    async remove(req, res, next) {
        try {
            const { id } = req.body;
            await Product.destroy({ where: { id } });
            return res.json('Removed');
        }
        catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}
module.exports = new ProductController();