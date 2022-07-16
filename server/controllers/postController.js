const uuid = require('uuid');
const path = require('path');
const { Post } = require('../models/models');
const ApiError = require('../error/ApiError');
class PostController {
    async create(req, res, next) {
        try {
            let { title, description, link, postCategoryId } = req.body; // Получаем данные о создаваемом товаре из GET-запроса
            if (req.files) {
                const { img } = req.files; // Получаем изображение
                let fileName = uuid.v4() + ".jpg"; // Генерируем уникальное название изображению
                img.mv(path.resolve(__dirname, '..', 'static', fileName)); // Загружаемые изображения кидаем в директорию static на сервере и даём уникальное имя
                const post = await Post.create({ title, description, img: fileName, link, postCategoryId });
                return res.json(post);
            }
            else {
                const post = await Post.create({ title, description });
                return res.json(post);
            }
        }
        catch (e) {
            next(ApiError.badRequest(e.message)); // Если ошибка возвращаем сообщение об ошибке
        }
    }
    async getAll(req, res) {
        let { limit, page } = req.query;
        page = page || 1; // Создаем пагинацию получения товаров, одна страница по-умолчанию если не указано другого.
        limit = limit || 9; // Лимит товаров на странице.
        let offset = page * limit - limit; // При заданном лимите пилим на странцы.
        let posts;
        posts = await Post.findAndCountAll({ limit, offset });
        return res.json(posts);
    }
    async getOne(req, res) {
        const { id } = req.params; // Получаем ID из запроса
        const post = await Post.findOne({
            where: { id }
        }); // Получаем товар с заданным айди и возвращаем
        return res.json(post);
    }
    async update(req, res, next) {
        try {
            const { id, title, description } = req.body; // Получаем данные о создаваемом товаре из GET-запроса
            if (req.files) {
                const { img } = req.files; // Получаем изображение
                let fileName = uuid.v4() + ".jpg"; // Генерируем уникальное название изображению
                img.mv(path.resolve(__dirname, '..', 'static', fileName)); // Загружаемые изображения кидаем в директорию static на сервере и даём уникальное имя
                const post = await Post.update({ title, description, img: fileName }, { where: { id } });
                return res.json(post);
            }
            else {
                const post = await Post.update({ title, description }, { where: { id } });
                return res.json(post);
            }
        }
        catch (e) {
            next(ApiError.badRequest(e.message)); // Если ошибка возвращаем сообщение об ошибке
        }
    }
    async remove(req, res, next) {
        try {
            const { id } = req.query;
            await Post.destroy({ where: { id } });
            return res.json('Removed');
        }
        catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}
module.exports = new PostController();