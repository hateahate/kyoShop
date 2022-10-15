const { Post, Product, Wiki } = require('../models/models');
const ApiError = require('../error/ApiError');
const { Op } = require('sequelize')
class LiveSearchController {
    async getAll(req, res, next) {
        try {
            let { title } = req.query;
            const products = await Product.findAll({ where: { title: { [Op.like]: `%${title}%` } } });
            const posts = await Post.findAll({ where: { title: { [Op.like]: `%${title}%` } } });
            const wiki = await Wiki.findAll({ where: { title: { [Op.like]: `%${title}%` } } });
            let response = [{ products_res: products }, { posts_res: posts }, { wiki_res: wiki }]
            return res.json(response);
        }
        catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }
}
module.exports = new LiveSearchController();