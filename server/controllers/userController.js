const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');

const generateJwt = (id, email, role) => {
    return Jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '1h' }
    )
}

const { User, Basket, Address, Company } = require('../models/models');
class UserController {
    async registration(req, res, next) {
        try {
            const { email, password, first_name, last_name, role, birthDate, gender, companyName, vat, website, state, country, city, zip, post, phone, registryCode } = req.body;
            if (!email || !password) {
                return next(ApiError.badRequest('Uncorrent email or password')); //Проверяем получаемые данные
            }
            const candidate = await User.findOne({ where: { email } }); // Проверяем используется ли EMail
            if (candidate) {
                return next(ApiError.badRequest('User with this email already exist'));
            }
            const hashPassword = await bcrypt.hash(password, 5);
            const user = await User.create({ email, first_name, last_name, birthDate, role, phone, gender, password: hashPassword }); // User
            const address = await Address.create({ country, city, zip, post, state, userId: user.id }) // Create address
            const company = await Company.create({ companyName, vat, registryCode, website, userId: user.id }); // Create company
            const basket = await Basket.create({ userId: user.id });
            const token = generateJwt(user.id, user.email, user.role);
            if (address && user && company && basket) {
                return res.json({ token });
            }
            else {
                return next(ApiError.badRequest('Internal server error'))
            }
        }
        catch (e) {
            return next(ApiError.badRequest(e.message))
        }
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

    async getUser(req, res, next) {
        try {
            const { id } = req.params
            const user = await User.findOne({ where: { id }, attributes: ['first_name', 'last_name', 'id', 'role', 'approved', 'email'] });
            return res.json(user);
        }
        catch (e) {
            return next(ApiError.internal('Cannot get user'))
        }
    }

    async getAllUsers(req, res, next) {
        try {
            const users = await User.findAll({ attributes: ['first_name', 'last_name', 'id', 'role', 'approved', 'email'] });
            return res.json(users)
        }
        catch (e) {
            return next(ApiError.internal('Internal Error'))
        }
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

    async updateUser(req, res, next) {
        try {
            const { id, email, first_name, last_name, role, approved } = req.body;
            const user = await User.update({ email, first_name, last_name, role, approved }, { where: { id } })
            return res.json(user)
        }
        catch (e) {
            return next(ApiError.badRequest('User cannot be updated'))
        }
    }

    async updatePassword(req, res, next) {
        try {
            const { id, password, oldpassword } = req.body
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
            return next(ApiError.badRequest(e.message))
        }
    }
}
module.exports = new UserController();