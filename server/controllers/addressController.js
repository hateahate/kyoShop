const { Address } = require('../models/models');
const ApiError = require('../error/ApiError');
class AddressController {
    async create(req, res, next) {
        try {
            let { country, type, city, postAddress, postCode } = req.body;
            const address = await Address.create({ country, type, city, postAddress, postCode });
            return res.json(address);
        }
        catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async getAll(req, res, next) {
        try {
            posts = await Address.findAll();
            return res.json(posts);
        }
        catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async remove(req, res, next) {
        try {
            const { id } = req.body;
            await Post.destroy({ where: { id } });
            return res.json('Removed');
        }
        catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}
module.exports = new AddressController();