const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');

const generateJwt = (id, email, role) => {
    return Jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    ) // Генерируем токен для пользователя с временем жизни 24 часа
}

const { User, Basket } = require('../models/models');
class UserController {
    async registration(req, res, next) {
        const { email, password, first_name, last_name, role } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Uncorrent email or password')); //Проверяем получаемые данные
        }
        const candidate = await User.findOne({ where: { email } }); // Проверяем используется ли EMail
        if (candidate) {
            return next(ApiError.badRequest('User with this email already exist'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ email, first_name, last_name, role, password: hashPassword }); // Создаём пользователя в БД
        const basket = await Basket.create({ userId: user.id });
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token });
    }
    async login(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return next(ApiError.internal('User not found'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Password not correct'));
        }
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token });
    }
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({ token });
    }
    async getUsers(req, res) {
        const users = await User.findAll();
        return res.json(users);
    }
}
module.exports = new UserController();