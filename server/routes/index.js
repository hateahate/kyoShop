// Импортируем класс роутера из Express
const Router = require('express');
const router = new Router();

// Импортируем все роутеры
const categoryRouter = require('./categoryRouter');
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');
const companyRouter = require('./companyRouter');

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/company', companyRouter);
router.use('/category', categoryRouter);

module.exports = router