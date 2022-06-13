const { Post, Product } = require('../models/models');
const ApiError = require('../error/ApiError');
class LiveSearchController {
    async getAll(req, res) {
        let { title, name } = req.query;
        const Posts = await Post.findAll({ where: { title } });
        const Products = await Product.findAll({ where: { name } });
        return res.json(Posts, Products);
    }
}
module.exports = new LiveSearchController();