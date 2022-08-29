const { ProductCategory } = require('../models/models');
const ApiError = require('../error/ApiError');
class CategoryController {
    async create(req, res, next) {
        const { name } = req.body;
        const candidate = await ProductCategory.findOne({ where: { name } })
        if (candidate) {
            return res.json('Category with this name already exist');
        }
        const category = await ProductCategory.create({ name });
        return res.json(category);
    }
    async getAll(req, res) {
        const categories = await ProductCategory.findAll();
        return res.json(categories);
    }
    async update(req, res) {
        const { id, name } = req.body;
        const category = await ProductCategory.update({ name }, { where: { id } });
        return res.json(category);
    }
    async remove(req, res) {
        const { id } = req.params;
        await ProductCategory.destroy({ where: { id } });
        return res.json({ id } + 'successfully removed');
    }
}
module.exports = new CategoryController();