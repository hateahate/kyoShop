const uuid = require('uuid');
const path = require('path');
const { Product, ProductInfo } = require('../models/models');
const ApiError = require('../error/ApiError');
class ProductController {
    async create(req, res, next) {
        try {
            const { name, price, productCategoryId, productInfo } = req.body; // Получаем данные о создаваемом товаре из GET-запроса
            if (req.files) {
                const { img } = req.files; // Получаем изображение
                let fileName = uuid.v4() + ".jpg"; // Генерируем уникальное название изображению
                img.mv(path.resolve(__dirname, '..', 'static', fileName)); // Загружаемые изображения кидаем в директорию static на сервере и даём уникальное имя

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

                const product = await Product.create({ name, price, productCategoryId, img: fileName });
                return res.json(product); // На основе полученных данных пытаемся создать/создаём товар.
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

                const product = await Product.create({ name, price, productCategoryId });
                return res.json(product);
            }
        }
        catch (e) {
            next(ApiError.badRequest(e.message)); // Если ошибка возвращаем сообщение об ошибке
        }
    }
    async getAll(req, res) {
        let { productCategoryId, limit, page } = req.query;
        page = page || 1; // Создаем пагинацию получения товаров, одна страница по-умолчанию если не указано другого.
        limit = limit || 9; // Лимит товаров на странице.
        let offset = page * limit - limit; // При заданном лимите пилим на странцы.
        let products;
        if (!productCategoryId) {
            products = await Product.findAndCountAll({ limit, offset });
        }
        if (productCategoryId) {
            products = await Product.findAndCountAll({ where: { productCategoryId }, limit, offset }); // Ищем товары в базе с заданным ID категории.
        }
        return res.json(products);
    }
    async getOne(req, res) {
        const { id } = req.params; // Получаем ID из запроса
        const product = await Product.findOne({
            where: { id },
            include: [{ model: ProductInfo, as: 'info' }]
        }); // Получаем товар с заданным айди и возвращаем
        return res.json(product);
    }
    async update(req, res, next) {
        try {
            const { id, name, price, productCategoryId, productInfo } = req.body; // Получаем данные о создаваемом товаре из GET-запроса
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

                const product = await Product.update({ name, price, productCategoryId, img: fileName }, { where: { id } });
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

                const product = await Product.update({ name, price, productCategoryId }, { where: { id } });
                return res.json(product);
            }
        }
        catch (e) {
            next(ApiError.badRequest(e.message)); // Если ошибка возвращаем сообщение об ошибке
        }
    }
    async remove(req, res, next) {
        try {
            const { id } = req.query;
            await Product.destroy({ where: { id } });
            return res.json('Removed');
        }
        catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}
module.exports = new ProductController();