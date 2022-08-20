const ApiError = require('../error/ApiError');
const { DashboardNotification } = require('../models/models');

class DashboardController {
    async create(req, res, next) {
        try {
            const { title, body } = req.body
            const notification = await DashboardNotification.create({ title, body })
            return res.json(noti)
        }
        catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async getAll(req, res, next) {
        try {
            const allNotifications = await DashboardNotification.findAll()
            return res.json(allNotifications)
        }
        catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new DashboardController();