const { Attribute } = require('../models/models');
const ApiError = require('../error/ApiError');
class AttributeController {
    async create(req, res, next) {
        const { name, description, productId } = req.body;
        const attribute = await Attribute.create({ name, description, productId });
        return res.json(attribute);
    }
    async getAll(req, res) {
        const attributes = await Attribute.findAll({ order: ['name'] });
        return res.json(attributes);
    }
    async update(req, res) {
        const { id, name } = req.body;
        const attribute = await Attribute.update({ name, childOf }, { where: { id } });
        return res.json(attribute);
    }
    async remove(req, res) {
        const { id } = req.body;
        await Attribute.destroy({ where: { id } });
        return res.json('Removed');
    }
    async test(req, res) {
        const result = await Attribute.aggregate('description', 'UNIQUE',)
        return res.json(result)
    }
}
module.exports = new AttributeController();