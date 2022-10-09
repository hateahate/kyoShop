const Router = require('express');
const router = new Router();

// Import all routers
const categoryRouter = require('./categoryRouter');
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');
const companyRouter = require('./companyRouter');
const postRouter = require('./postRouter');
const wikiRouter = require('./wikiRouter');
const postCategoryRouter = require('./postCategoryRouter');
const liveSearchRouter = require('./liveSearchRouter');
const addressRouter = require('./addressRouter');
const basketRouter = require('./basketRouter');

// API waypoints
router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/company', companyRouter);
router.use('/category', categoryRouter);
router.use('/post', postRouter);
router.use('/wiki', wikiRouter);
router.use('/postcat', postCategoryRouter);
router.use('/search', liveSearchRouter);
router.use('/address', addressRouter);
router.use('/basket', basketRouter);


module.exports = router;