const { PostCategory } = require('../models/models');
class PostCategoryController {
    async create(req, res) {
        try {
            const { name } = req.body;
            const find = await PostCategory.findAll({ where: { name } })
            if (find) {
                return res.json(`${name} already exist`)
            }
            const category = await PostCategory.create({ name });
            return res.json(category);
        }
        catch (e) {
            return e.message
        }
    }
    async getAll(req, res) {
        try {
            const categories = await PostCategory.findAll();
            return res.json(categories);
        } catch (e) {
            return e.message
        }
    }
    async update(req, res) {
        try {
            const { id, name, categorylink } = req.body;
            const category = await PostCategory.update({ name, categorylink }, { where: { id } });
            return res.json(category);
        } catch (e) {
            return e.message
        }
    }
    async remove(req, res) {
        try {
            const { id } = req.body;
            await PostCategory.destroy({ where: { id } });
            return res.json({ id } + 'successfully removed');
        } catch (e) {
            return e.message
        }
    }
}
module.exports = new PostCategoryController();