const { Post, Product, Wiki } = require('../models/models');
const ApiError = require('../error/ApiError');
class LiveSearchController {
    async getAll(req, res) {
        let { title, name } = req.query;
        const Posts = await Post.findAll({ where: { title } });
        const Products = await Product.findAll({ where: { name } });
        const Wiki = await Wiki.findAll({ where: { title } });
        return res.json(Posts, Products);
    }
}
module.exports = new LiveSearchController();