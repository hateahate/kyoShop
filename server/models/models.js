const sequelize = require('../db'); // Подключаемся к базе
const { DataTypes } = require('sequelize'); // Импортируем библиотеку работы с типами данных

// Сущность пользователя

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    first_name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

// Сущность компании

const Company = sequelize.define('company', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    company_name: { type: DataTypes.STRING },
    category: { type: DataTypes.STRING, defaultValue: 'UNAPPROVED' },
    vat: { type: DataTypes.STRING, unique: true },
    register_code: { type: DataTypes.INTEGER, unique: true },
    address: { type: DataTypes.STRING },
});


// Сущность товара

const Product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
});


// Информация о товаре

const ProductInfo = sequelize.define('product_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
})


// Корзина

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

// Продукт в корзине

const BasketProduct = sequelize.define('basket_product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

// Сущность категории

const ProductCategory = sequelize.define('product_category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});



// Устанавливаем связи

User.hasOne(Basket); // Связываем корзину с пользователем (одна корзина на юзера) и устанавливаем отношение объекта корзины к пользователю
Basket.belongsTo(User);

User.hasOne(Company); // По аналогии с корзиной связываем одну компанию с пользователем
Company.belongsTo(User);

Basket.hasMany(BasketProduct); // Корзине передаём объект товара в корзине

Product.hasMany(ProductInfo); // Товар может содержать множество описаний
ProductInfo.belongsTo(Product);

ProductCategory.hasMany(Product);
Product.belongsTo(ProductCategory);


// Экспортируем модели сущностей для дальнейшего использования

module.exports = {
    User,
    Product,
    Company,
    Basket,
    BasketProduct,
    ProductCategory,
    ProductInfo,
}


