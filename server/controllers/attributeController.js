const { Attribute } = require("../models/models");
const ApiError = require("../error/ApiError");
const sequelize = require("sequelize");
const { Sequelize } = require("../db");
class AttributeController {
    async getFilterAtributes(req, res) {
        const returnResult = {};
        const result = await Attribute.findAll({
            group: ["name", "description"],
            attributes: [
                "name",
                "description",
                [Sequelize.fn("COUNT", Sequelize.col("description")), "count"],
            ],
        });
        result.map((item) => {
            let itemCount = JSON.stringify(item);
            itemCount = JSON.parse(itemCount).count;
            if (!returnResult[item.name]) {
                returnResult[item.name] = [];
            }
            returnResult[item.name].push({
                name: item.description,
                count: itemCount,
            });
        });
        return res.json(returnResult);
    }

    async create(req, res, next) {
        const { name, description, productId } = req.body;
        const attribute = await Attribute.create({ name, description, productId });
        return res.json(attribute);
    }
    async getAll(req, res) {
        const attributes = await Attribute.findAll({ order: ["name"] });
        return res.json(attributes);
    }
    async update(req, res) {
        const { id, name } = req.body;
        const attribute = await Attribute.update(
            { name, childOf },
            { where: { id } }
        );
        return res.json(attribute);
    }
    async remove(req, res) {
        const { id } = req.params;
        await Attribute.destroy({ where: { id } });
        return res.json({ status: "removed" });
    }
    async test(req, res) {
        const result = await Attribute.aggregate("description", "UNIQUE");
        return res.json(result);
    }
}
module.exports = new AttributeController();
