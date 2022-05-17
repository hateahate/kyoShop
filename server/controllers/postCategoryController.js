const { PostCategory } = require('../models/models');
const ApiError = require('../error/ApiError');
class PostCategoryController {
    async create(req, res) {
        const { name, categorylink } = req.body;
        const category = await PostCategory.create({ name, categorylink });
        return res.json(category);
    }
    async getAll(req, res) {
        const categories = await PostCategory.findAll();
        return res.json(categories);
    }
    async update(req, res) {
        const { id, name, categorylink } = req.body;
        const category = await PostCategory.set({ name, categorylink }, { where: { id } });
        return res.json(category);
    }
    async remove(req, res) {
        const { id } = req.params;
        await PostCategory.destroy({ where: { id } });
        return res.json({ id } + 'successfully removed');
    }
}
module.exports = new PostCategoryController();