const uuid = require('uuid');
const path = require('path');
const { Product, ProductInfo } = require('../models/models');
const ApiError = require('../error/ApiError');
class ProductController {
    async create(req, res, next) {
        try {
            const { name, price, productCategoryId, productInfo } = req.body; // Получаем данные о создаваемом товаре из GET-запроса
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
                }); // Тут чё-то по описанию товара, пока так
            }

            const product = await Product.create({ name, price, productCategoryId, img: fileName });
            return res.json(product); // На основе полученных данных пытаемся создать/создаём товар.
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
}
module.exports = new ProductController();