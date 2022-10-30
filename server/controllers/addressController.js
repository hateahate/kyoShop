const { Address } = require('../models/models');
const ApiError = require('../error/ApiError');
class AddressController {
    async create(req, res, next) {
        try {
            let { country, type, city, post, zip, state, userId } = req.body;
            const address = await Address.create({ country, type, city, post, zip, state, userId });
            return res.json(address);
        }
        catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async getOne(req, res, next) {
        let { id } = req.body
        try {
            const address = await Address.findOne({ where: { id } })
            return res.json(address)
        }
        catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res, next) {
        try {
            const address = await Address.findAll();
            return res.json(address);
        }
        catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async remove(req, res, next) {
        try {
            const { id } = req.params;
            await Post.destroy({ where: { id } });
            return res.json({ status: 'removed' });
        }
        catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}
module.exports = new AddressController();