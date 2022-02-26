const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');

const { User, Basket } = require('../models/models');
class UserController {
    async registration(req, res, next) {
        const { email, password, role } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Uncorrent email or password')); //Проверяем получаемые данные
        }
        const candidate = await User.findOne({ where: { email } }); // Проверяем используется ли EMail
        if (candidate) {
            return next(ApiError.badRequest('User with this email already exist'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ email, role, password: hashPassword }); // Создаём пользователя в БД
        const basket = await Basket.create({ userId: user.id });
        const jwt = Jwt.sign({ id: user.id, email, role },
            process.env.SECRET_KEY,
            { expiresIn: '24h' }); // Генерируем токен для пользователя с временем жизни 24 часа
        return res.json({ jwt }); // Возвращаем клиенту токен

    }
    async login(req, res) {

    }
    async check(req, res, next) {
        let users = await User.findAll();
        return res.json(users);
    }
}
module.exports = new UserController();