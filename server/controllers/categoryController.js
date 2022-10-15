const { ProductCategory } = require('../models/models');
const ApiError = require('../error/ApiError');
class CategoryController {
    async create(req, res, next) {
        const { name, childOf } = req.body;
        const candidate = await ProductCategory.findOne({ where: { name } })
        if (candidate) {
            return res.json('Category with this name already exist');
        }
        const category = await ProductCategory.create({ name, childOf });
        return res.json(category);
    }
    async getAll(req, res) {
        const categories = await ProductCategory.findAll();
        return res.json(categories);
    }
    async update(req, res) {
        const { id, name } = req.body;
        const category = await ProductCategory.update({ name, childOf }, { where: { id } });
        return res.json(category);
    }
    async remove(req, res) {
        const { id } = req.body;
        await ProductCategory.destroy({ where: { id } });
        return res.json('Removed');
    }
}
module.exports = new CategoryController();