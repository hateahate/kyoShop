const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');

const generateJwt = (id, email, role) => {
    return Jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '1h' }
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
        let validateApprove = user.approved;
        if (!validateApprove) {
            return next(ApiError.internal('Account is not approved'))
        }
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token });
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({ token });
    }

    async getUser(req, res) {
        const { id } = req.params
        const user = await User.findOne({ where: { id } });
        return res.json({
            'first_name': user.first_name,
            'last_name': user.last_name,
        });
    }

    async getAllUsers(req, res) {
        const users = await User.findAll();
        return res.json(users)
    }

    async remove(req, res, next) {
        try {
            const { id } = req.body;
            await User.destroy({ where: { id } });
            return res.json('Removed');
        }
        catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async updateUser(req, res) {
        try {
            const { id, email, first_name, last_name, role } = req.body;
            const user = await User.update({ email, first_name, last_name, role }, { where: { id } })
            return res.json(user)
        }
        catch (e) {
            return res.json(e.message)
        }
    }

    async updatePassword(req, res, next) {
        try {
            const { id, password, oldpassword } = req.body
            console.log(id)
            const user = await User.findOne({ where: { id } });
            let comparePassword = bcrypt.compareSync(oldpassword, user.password)
            if (!comparePassword) {
                next(ApiError.badRequest('Password uncorrect'))
            }
            else {
                const hashPassword = await bcrypt.hash(password, 5);
                const updatePass = await User.update({ password: hashPassword }, { where: { id } })
                return res.json('Password updated')
            }
        }
        catch (e) {
            return res.json(e.message)
        }
    }
}
module.exports = new UserController();