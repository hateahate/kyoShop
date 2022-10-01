const { Company } = require('../models/models');
const ApiError = require('../error/ApiError');
const Validator = require('validate-vat');
class CompanyController {
    async create(req, res, next) {
        try {
            const { companyName, vat, registryCode, website, userId } = req.body;
            const validate = await Company.findOne({ where: { vat } });
            if (validate) {
                return next(ApiError.badRequest('Company already exist'));
            }
            const company = await Company.create({ companyName, vat, registryCode, website, userId });
            return res.json(company);
        }
        catch (e) {
            return next(ApiError.badRequest(e));
        }
    }
    async getAll(req, res) {
        let { limit, page } = req.query;
        page = page || 1; // Создаем пагинацию
        limit = limit || 9; // Лимит записей на странице
        let offset = page * limit - limit; // При заданном лимите пилим на странцы
        const companies = await Company.findAndCountAll({ limit, offset });
        return res.json(companies);
    }
    async getOne(req, res) {
        const { id } = req.params; // Получаем ID из запроса
        const company = await Company.findOne({
            where: { id }
        });
        return res.json(company);
    }

}
module.exports = new CompanyController();