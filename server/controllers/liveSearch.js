const { Post, Product, Wiki } = require('../models/models');
const ApiError = require('../error/ApiError');
class LiveSearchController {
    async getAll(req, res, next) {
        try {
            let { title, name } = req.query;
            const posts = await Post.findAll({ where: { $like: { title } } });
            const products = await Product.findAll({ where: { $like: { name } } });
            const wiki = await Wiki.findAll({ where: { $like: { title } } });
            return res.json(posts, products, wiki);
        }
        catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }
}
module.exports = new LiveSearchController();